import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-card">

          <h1>Welcome Back</h1>
          <p>Login to continue ordering delicious meals.</p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

          </form>

          <p className="register-link">
            Not a user? <Link to="/register">Register</Link>
          </p>

        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Login;