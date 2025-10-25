import React from "react";
import "./CSS/LoginSignup.css";
import { FaFacebookF, FaTwitter, FaGoogle, FaUser, FaLock } from "react-icons/fa";

const LoginSignup = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Đăng nhập</h2>

      <div className="login-fields">
        {/* Username */}
        <div className="input-group">
          <label>Tên đăng nhập</label>
          <div className="input-wrapper">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Type your username" />
          </div>
        </div>

        {/* Password */}
        <div className="input-group">
          <label>Nhập mật khẩu</label>
          <div className="input-wrapper">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Type your password" />
          </div>
        </div>

        <div className="forgot">
          <a href="/forgot-password" className="signup-link">Quên mật khẩu</a>
        </div>

        <button className="login-btn">Đăng nhập</button>
      </div>

      <p className="or-text">Hoặc Đăng Nhập Bằng?</p>
      <div className="social-login">
        <FaFacebookF className="icon fb" />
        <FaTwitter className="icon tw" />
        <FaGoogle className="icon gg" />
      </div>

      <p className="or-text">Bạn Chưa Có Tài Khoản?</p>
      <a href="/signup" className="signup-link">Đăng Ký</a>
    </div>
  );
};

export default LoginSignup;
