import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";

const OneWheel = (props) => {

  // const [useState, useEffect] = React.useState(false)
  // const onClick = () => setShowResults(true)

  return (
    <>
    <div>
    <h1>OneWheel</h1>
    <img src="https://i.imgur.com/UyHXS4em.jpg" alt="XR" />
    <img src="https://i.imgur.com/pHGfh0Hm.jpg" alt="Pint" />
    <Link to="/">HOME</Link>
    </div>
    <div>
      {/* <Form /> */}

    {/* <section>
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
        </section>  */}

    </div>
    </>
  );
};
export default OneWheel;
