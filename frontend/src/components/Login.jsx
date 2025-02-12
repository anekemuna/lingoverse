import React from "react";
import pic2 from "../assets/landing_pic2.jpeg";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.5)", // Dimmed background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: 450,
          height: 550,
          background: "white",
          position: "relative",
          borderRadius: 10,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(${pic2})`,
          backgroundSize: "cover",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "red",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          X
        </button>

        <h2 style={{ color: "#003B8C", fontSize: 32, marginBottom: 20 }}>
          Welcome Back!
        </h2>

        {/* Username Input */}
        <div style={{ width: "80%", marginBottom: 15 }}>
          <label style={{ color: "#1E1E1E", fontSize: 16 }}>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "1px solid #D9D9D9",
              marginTop: 5,
            }}
          />
        </div>

        {/* Password Input */}
        <div style={{ width: "80%", marginBottom: 15 }}>
          <label style={{ color: "#1E1E1E", fontSize: 16 }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "1px solid #D9D9D9",
              marginTop: 5,
            }}
          />
        </div>

        {/* Sign In Button */}
        <button
          style={{
            width: "80%",
            padding: 12,
            background: "#003B8C",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer",
            marginTop: 10,
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
