import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <div className="landing-container">       
        <div className="back-img">
          <div className="text">
            <h1>Fresh Homemade Tiffins Daily</h1>
            <p>
              Healthy, affordable and delicious meals for students and
              professionals.
            </p>
            <button className="get-started" onClick={() => navigate("/login")}>Get Started</button>
         </div>         
        </div>       
      </div>
    </>
  );
}

export default Landing;