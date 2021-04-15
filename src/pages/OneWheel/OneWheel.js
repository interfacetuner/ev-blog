import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";

const OneWheel = (props) => {
  // const [useState, useEffect] = React.useState(false)
  // const onClick = () => setShowResults(true)

  return (
    <>
      <div className="OneWheel">
        <h1 style={{ color: "rgba(84, 88, 104, 0.945)" }}>OneWheel</h1>
        <img src="https://i.imgur.com/UyHXS4em.jpg" alt="XR" />
        <h3 style={{ backgroundColor: "lightblue" }}>XR</h3>
        <p>
          Speed: 19mph Range: 12 - 18mi. ChargeTime: 110min. FastCharger: 50min.
        </p>
        <img src="https://i.imgur.com/pHGfh0Hm.jpg" alt="Pint" />
        <h3 style={{ backgroundColor: "lightblue" }}>PINT</h3>
        <p>
          Speed: 16mph Range: 6 - 8mi. ChargeTime: 120min. FastCharger: 50min.
        </p>
        <Link to="/">
          <h1>🔙</h1>
        </Link>
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
