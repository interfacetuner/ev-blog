import { Link } from "react-router-dom";
import "../../index.css";

const HomePage = (props) => {
  return (
    <div className="homePage">
      <h2>Select a logo to see featured electric vehicles</h2>
      <div>
        <Link to="../../pages/Boosted/Boosted">
          <img
            src="https://i.imgur.com/AwJLoXPm.jpg"
            width="192"
            height="150"
            alt="boosted logo"
          />
        </Link>

        <Link to="../../pages/OneWheel/OneWheel">
          <img
            src="https://i.imgur.com/KJntIKym.png"
            width="192"
            height="150"
            alt="onewheel logo"
          />
        </Link>

        <Link to="../../pages/SegWay/SegWay">
          <img
            src="https://i.imgur.com/kmPSZUhm.jpg"
            width="192"
            height="150"
            alt="SegWay logo"
          />
        </Link>
        <Link to="../../pages/Ktm/Ktm">
          <img
            src="https://i.imgur.com/A6mzEWqm.jpg"
            width="192"
            height="150"
            alt="Ktm logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
