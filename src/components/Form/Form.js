// import { Route, withRouter } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { BrowserRouter, Switch } from "react-router-dom";

// const ShowForm = (props) => {
//   const { location } = props;
//   if (location.pathname.match(!/HomePage/)) {
//     return null;
//   }

//     return (
//       // <ShowForm {...props} />

//     {state.blogs.map((s) => (
//       <article key={s.blog}>
//         <div>{s.blog}</div> <div>{s.level}</div>
//       </article>
//     ))}

//     {state.user && (
//       <div>
//         <hr />
//         <form onSubmit={addBlog}>
//           <label>
//             <span>Comments</span>
//             &nbsp;&nbsp;&nbsp;
//             <input
//               name="blog"
//               value={state.newBlog.blog}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             <span>Rating</span>
//             <select
//               name="level"
//               value={state.newBlog.level}
//               onChange={handleChange}
//             >
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </select>
//           </label>
//           <button>ADD COMMENT</button>
//         </form>
//       </div>

//       )};

//   const ShowForm = withRouter(ShowForm);
// };
// export default ShowForm;
