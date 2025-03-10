import React, { useState } from "react";
import "./Login.css"; // Importing the CSS file
import login_pic from "../assets/login_background.jpg";
import { ConnectionStates } from "mongoose";

const Login = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login & register

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const formValidation = () => {
    let errors = {};

    if (!formData.username.trim()){
      errors.username = "Username is a required field"
    }
    if (formData.password.length < 8){
      errors.password = "Password must be at least 8 characters"
    }
    if (!isLogin && !formData.email.includes("@")){
      errors.email  = "Valid email is required"
    }
    setErrors(errors)
    return Object.keys(errors).length === 0;
  }

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValidation()){
      alert(isLogin ? "Logging in..." : "Registering...");
      
    }

  };

  if (!isOpen) return null;

  return (
    <div className="login-overlay">
      <div className="login-container">
        {/* Left Half (Form Section) */}
        <div className="login-form-section">
          <h2>{isLogin ? "Welcome Back!" : "Create an Account"}</h2>
          <form onSubmit={handleSubmit}>

          {/* Username Input */}
          <div className="input-group">
            <label>Username</label>
            <input type="text" name="username" value= {formData.username} onChange={handleChange} placeholder="Enter your username" />
            {errors.username && <p className="error-text">{errors.username}</p>}
          </div>

          {/* Email Input (Only for Registration) */}
          {!isLogin && (
            <div className="input-group">
              <label>Email</label>
              <input type="email" name= "email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
          )}

          
          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <input type="password"  name="password" value= {formData.password} onChange={handleChange} placeholder="Enter your password" />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          {/* Sign In / Register Button */}
          <button className="login-btn">
            {isLogin ? "Sign In" : "Register"}
          </button>
          </form>

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
