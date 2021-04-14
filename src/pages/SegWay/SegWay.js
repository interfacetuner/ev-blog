import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";

const SegWay = (props) => {
  return (
    <div>
    <h1>SegWay</h1>
    <img src="https://i.imgur.com/30u7s1Wm.jpg" alt="UnicycleS1" />
    <h3>S1</h3>
    <p>Speed: 18.6mph Range: 28mi.  ChargeTime: 4hr.</p>
    <img src="https://i.imgur.com/33Waf0rm.jpg" alt="Scooter" />
    <h3>Ninebot E45</h3>
    <p>Speed: 12.5mph Range: 15mi.  ChargeTime: n/a.</p>
    <img src="https://i.imgur.com/wsdBx1ym.jpg" alt="goKart" />
    <h3>Ninebot GoKart</h3>
    <p>Speed: 23mph Range: 15mi.  ChargeTime: n/a.</p>
    <Link to="/">HOME</Link>
    </div>
  );
};
export default SegWay;
