import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
//import Form from "../../components/Form/Form";

const Boosted = (props) => {
  return (
    <div>
    <h1>Boosted Boards</h1>
    <Link to="/">HOME</Link>
    <img src="https://i.imgur.com/KHqZUzmm.jpg" alt="V2" />
    <img src="https://i.imgur.com/8vPcXifm.jpg" alt="Stealth" />
    <img src="https://i.imgur.com/k7DfrU6m.jpg" alt="MiniX" />
    </div>
  );
};
export default Boosted;
