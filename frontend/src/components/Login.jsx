import React, { useState } from "react";
import "./Login.css"; // Importing the CSS file
import login_pic from "../assets/login_background.jpg";

const Login = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login & register

  if (!isOpen) return null;

  return (
    <div className="login-overlay">
      <div className="login-container">
        {/* Left Half (Form Section) */}
        <div className="login-form-section">
          <h2>{isLogin ? "Welcome Back!" : "Create an Account"}</h2>

          {/* Username Input */}
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </div>

          {/* Email Input (Only for Registration) */}
          {!isLogin && (
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          )}

          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          {/* Sign In / Register Button */}
          <button className="login-btn">
            {isLogin ? "Sign In" : "Register"}
          </button>

          {/* Toggle Between Login & Register */}
          <p className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Not registered yet? Create an account"
              : "Already registered? Sign in"}
          </p>
        </div>

        {/* Right Half (Image Background) */}
        <div
          className="login-image-section"
          style={{ backgroundImage: `url(${login_pic})` }}
        >
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
