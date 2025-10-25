import React from "react";
import "./CSS/LoginSignup.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Sign Up</h2>

      <div className="login-fields">
        <div className="input-group">
          <label>Tên đăng nhập</label>
          <div className="input-wrapper">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Enter your username" />
          </div>
        </div>

        <div className="input-group">
          <label>Nhập Email</label>
          <div className="input-wrapper">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
        </div>

        <div className="input-group">
          <label>Nhập mật khẩu</label>
          <div className="input-wrapper">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Enter your password" />
          </div>
        </div>

        <button className="login-btn">ĐĂNG KÝ</button>
      </div>

      <p className="or-text">Bạn đã có tài khoản?</p>
      <a href="/login" className="signup-link">Đăng Nhập</a>
    </div>
  );
};

export default Signup;
