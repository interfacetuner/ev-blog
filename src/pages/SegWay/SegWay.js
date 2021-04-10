import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";

const SegWay = (props) => {
  return (
    <div>
    <h1>SegWay</h1>
    <img src="https://i.imgur.com/30u7s1Wm.jpg" alt="Unicycle" />
    <img src="https://i.imgur.com/33Waf0rm.jpg" alt="Scooter" />
    <img src="https://i.imgur.com/wsdBx1ym.jpg" alt="goKart" />
    <Link to="/">HOME</Link>
    </div>
  );
};
export default SegWay;
