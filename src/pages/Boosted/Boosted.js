import { Link } from "react-router-dom";
import "../../index.css";


const Boosted = (props) => {
  return (
    <div className="Boosted">
      <h1 style={{ color: "rgba(84, 88, 104, 0.945)" }}>Boosted Boards</h1>

      <img src="https://i.imgur.com/KHqZUzmm.jpg" alt="V2" />
      
      <h3 style={{ backgroundColor: "orange" }}>Boosted V2</h3>
      <p>
        Speed: 22mph Range: Standard: 7-8mi. ext.Range: 12-14mi. ChargeTime: 90
        - 120min.
      </p>
      <img src="https://i.imgur.com/8vPcXifm.jpg" alt="Stealth" />
      <h3 style={{ backgroundColor: "orange" }}>Boosted Stealth</h3>
      <p>Speed: 24mph Range: 14mi. ChargeTime: 90 - 120min.</p>
      <img src="https://i.imgur.com/k7DfrU6m.jpg" alt="MiniX" />
      <h3 style={{ backgroundColor: "orange" }}>Boosted Mini X</h3>
      <p>
        Speed: 18mph Range: Standard: 7-8mi. ext.Range: 12-14mi. ChargeTime: 90
        - 120min.
      </p>
      <Link to="/">
        <h1>🔙</h1>
      </Link>
    </div>
  );
};
export default Boosted;
