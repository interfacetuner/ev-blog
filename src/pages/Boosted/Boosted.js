import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
//import Form from "../../components/Form/Form";

const Boosted = (props) => {
  return (
    <div>
    <h1>Boosted Boards</h1>
    <img src="https://i.imgur.com/KHqZUzmm.jpg" alt="V2" />
    <h3>V2</h3>
    <p>Speed: 22mph Range: Standard: 7-8mi. ext.Range: 12-14mi. ChargeTime: 90 - 120min.</p>
    <img src="https://i.imgur.com/8vPcXifm.jpg" alt="Stealth" />
    <h3>Stealth</h3>
    <p>Speed: 24mph Range: 14mi. ChargeTime: 90 - 120min.</p>
    <img src="https://i.imgur.com/k7DfrU6m.jpg" alt="MiniX" />
    <h3>Mini X</h3>
    <p>Speed: 18mph Range: Standard: 7-8mi. ext.Range: 12-14mi. ChargeTime: 90 - 120min.</p>
    <Link to="/">Back</Link>
    </div>
  
  );
};
export default Boosted;
