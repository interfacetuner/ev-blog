import React from 'react';
import { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Boosted from "./pages/Boosted/Boosted";
import OneWheel from "./pages/OneWheel/OneWheel";
import Form from "./components/Form/Form";
import SegWay from "./pages/SegWay/SegWay";
import "./index.css";


import { auth } from './services/firebase';
import { render } from '@testing-library/react';

export default function App() {
  // const Form = (props) => {
  //   const { location } = props;
  //   if (location.pathname.match('./')){
  //       return null;
  //   }

  const [state, setState] = useState({
    form: false,
    user: null,
    blogs: [{ blog: "Comment", level: "4" }],
    newBlog: {
      blog: "",
      level: "3",
    },
  });

  const NotFound = (props) => <div>404 Sorry That Page Doesnt Exist</div>;

  async function getAppData() {
    try {
      const BASE_URL = 'http://localhost:3001/api/blogs';

      const blogs = await fetch(BASE_URL).then(res => res.json());
      setState((prevState) => ({
        ...prevState,
        blogs,
      }));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAppData();
    auth.onAuthStateChanged(user => {
      if(user) {
        setState(prevState => ({
          ...prevState,
          user,
        }));
      } else {
        setState(prevState => ({
          ...prevState,
          user: null
        }));
      }
    })
  }, []);

  async function addBlog(e) {
    if(!state.user) return;

    e.preventDefault();

    const BASE_URL = 'http://localhost:3001/api/blogs'; //??

    const blog = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(state.newBlog)
    }).then(res => res.json());

    console.log(blog);


    setState((prevState) => ({
      ...prevState,
      blogs: [...prevState.blogs, blog],
      newBlog: {
        blog: "",
        level: "3",
      },
    }));
  }

  function handleChange(e) {
    setState((prevState) => ({
      ...prevState, 
      newBlog: {
        ...prevState.newBlog,
        [e.target.name]: e.target.value 
      }
    })) 
  }

    // function renderForm({ Form }) {
    //       if (this.props.path  !== './') {
    //           return ( 
      

     function handleClick(state) {
        state.form = true;
      } 

      const isFormTrue = state.form;


    return (
      <>
        <Header user={state.user} />
        <main>
       <BrowserRouter>
        <Switch>
      <Route exact path="/" render={(props) => 
         <HomePage 
          {...props} 
          />
        } /> 
        <Route path="/pages/Boosted/Boosted" render={(props) => 
          <Boosted {...props} handleClick={handleClick}
          />
        } />
        <Route path="/pages/OneWheel/OneWheel" render={(props) => 
          <OneWheel {...props} 
          />
        } />
        <Route path="/pages/SegWay/SegWay" render={(props) => 
          <SegWay {...props} 
          />
        } />
        <Route render="/components/Form/Form" render={(props) => 
          <Form {...props} 
          />
        } />
        <Route render={(props) =>
        <NotFound />
        }/>
        </Switch>
        </BrowserRouter>
        </main>
        
        <> 
        { isFormTrue  ?
        
        <section>
        {state.blogs.map((s) => (
          <article key={s.blog}>
            <div>{s.blog}</div> <div>{s.level}</div>
          </article>
        ))}
        {
          state.user &&
        <>
        <hr />
        <form onSubmit={addBlog}>
          <label>
            <span>Comments</span>
            &nbsp;&nbsp;&nbsp;
            <input name="blog" value={state.newBlog.blog} onChange={handleChange} />
          </label>
          <label>
            <span>Rating</span>
            <select name="level" value={state.newBlog.level} onChange={handleChange} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              </select>
            </label>
            <button>ADD COMMENT</button>
          </form>
          </>
          
          }
        </section>
        
        : "" }
        </>
          </>
          ); 
        }; 
