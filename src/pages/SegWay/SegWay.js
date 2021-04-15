import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";

const SegWay = (props) => {
  return (
    <div class='SegWay'>
    <h1 style={{color: 'rgba(84, 88, 104, 0.945)'}}>SegWay</h1>
    <img src="https://i.imgur.com/30u7s1Wm.jpg" alt="UnicycleS1" />
    <h3 style={{backgroundColor: "lightyellow"}}>Ninebot S1 Unicycle</h3>
    <p>Speed: 18.6mph Range: 28mi.  ChargeTime: 4hr.</p>
    <img src="https://i.imgur.com/33Waf0rm.jpg" alt="Scooter" />
    <h3 style={{backgroundColor: "lightyellow"}}>Ninebot E45 Scooter</h3>
    <p>Speed: 12.5mph Range: 15mi.  ChargeTime: n/a.</p>
    <img src="https://i.imgur.com/wsdBx1ym.jpg" alt="goKart" />
    <h3 style={{backgroundColor: "lightyellow"}}>Ninebot GoKart</h3>
    <p>Speed: 23mph Range: 15mi.  ChargeTime: n/a.</p>
    <Link to="/"><h1>🔙</h1></Link>
    </div>
  );
};
export default SegWay;
