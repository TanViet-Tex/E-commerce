import React from "react";
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Nhận ưu đãi độc quyền qua email</h1>
      <p>Đăng ký để không bỏ lỡ những xu hướng và khuyến mãi mới nhất!</p>
      <div>
        <input type="email" placeholder="Nhập email của bạn" />
        <button>Đăng ký ngay</button>
      </div>
    </div>
  );
};

export default NewsLetter;
