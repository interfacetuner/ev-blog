import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Boosted from "../../pages/Boosted/Boosted";
import OneWheel from "../../pages/OneWheel/OneWheel";
import SegWay from "../../pages/SegWay/SegWay";



const HomePage = (props) => {
    return (
      <div class='HomePage'>
  
      <div>
        <Link to="../../pages/Boosted/Boosted">
      <img src="https://i.imgur.com/AwJLoXPm.jpg" width="192" height="150" alt="boosted logo" />
      </Link>
    
      <Link to="../../pages/OneWheel/OneWheel">
      <img src="https://i.imgur.com/KJntIKym.png" width="192" height="150" alt="onewheel logo" />
      </Link>

      <Link to="../../pages/SegWay/SegWay">
      <img src="https://i.imgur.com/kmPSZUhm.jpg" width="192" height="150" alt="SegWay logo" />
      </Link>
      
      </div>
      </div>
      
    );
};

export default HomePage;
