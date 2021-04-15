import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";

const Ktm = (props) => {
  // const [useState, useEffect] = React.useState(false)
  // const onClick = () => setShowResults(true)

  return (
    <>
      <div className="Ktm">
        <h1 style={{ color: "rgba(84, 88, 104, 0.945)" }}>KTM</h1>
        <img src="https://i.imgur.com/svBFxWSl.jpg" alt="XR" />
        <h3 style={{ backgroundColor: "orange" }}>Freeride Electric</h3>
        <p>
          Speed: 50mph Range: 18mi. ChargeTime: 110min.
        </p>

        <Link to="/">
          <h1>🔙</h1>
        </Link>
      </div>
      </>
  );
};
export default Ktm;
