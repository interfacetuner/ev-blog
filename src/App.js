import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
// import "./styles.css";

import { auth } from './services/firebase';

export default function App() {

  const [state, setState] = useState({
    user: null,
    blogs: [{ blog: "Comment", level: "4" }],
    newBlog: {
      blog: "",
      level: "3",
    },
  });

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

    return (
      <>
        <Header user={state.user} />
        <main>
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
            <span>EV-BLOG</span>
            <input name="blog" value={state.newBlog.blog} onChange={handleChange} />
          </label>
          <label>
            <span>LEVEL</span>
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
      </main>
    </>
  );
}
