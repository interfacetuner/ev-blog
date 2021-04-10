import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";

const OneWheel = (props) => {
  return (
    <div>
    <h1>OneWheel</h1>
    <img src="https://i.imgur.com/UyHXS4em.jpg" alt="XR" />
    <img src="https://i.imgur.com/pHGfh0Hm.jpg" alt="Pint" />
    <Link to="/">HOME</Link>
    </div>
  );
};
export default OneWheel;
