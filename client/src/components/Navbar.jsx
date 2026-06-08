import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
// import logo from "../../assets/logo.png";

function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      {/* Left Side */}
      <div className="navbar-left">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <h2 className="company-name">TiffinHub</h2>
      </div>

      {/* Right Side */}
      <div className="navbar-right">
        <Link to="/">Home</Link>

        <div className="dropdown">
          <span>Weekly Menu ▾</span>

          <div className="dropdown-content">
            <Link to="/menu/lunch">Lunch</Link>
            <Link to="/menu/dinner">Dinner</Link>
          </div>
        </div>

        <Link to="/subscription">Subscription</Link>

        <button className="button-btn" onClick={() => navigate("/login")}>Login/Signup</button>
        {/* <Link to="/login">Login / Signup</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;