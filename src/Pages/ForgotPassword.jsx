import react from "react";
import { FaEnvelope } from "react-icons/fa";
import './CSS/ForgotPassword.css'
const ForgotPassword = () => {
    return (

        <div className="login-container">
            <h2 className="login-title">Quên mật khẩu</h2>
            <div className="login-fields">
                <div className="input-group">
                    <label>Nhập email của bạn</label>
                    <div className="input-wrapper">
                       < FaEnvelope className="input-icon" />
                       <input type="email" placeholder="Enter your email" />
                    </div>
                </div>
                <button className="login-btn">Gửi Liên Kết Khôi Phục</button>
            </div>

            <p className="or-text">Quay lại trang đăng nhập?</p>
            <a href="/login" className="signup-link">Đăng Nhập</a>
        </div>

    )
}
export default ForgotPassword;