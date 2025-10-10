import React from "react";
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {

    return (

        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOP THỜI TRANG</p>
            </div>
            <ul className="footer-links">
                <li>Trang chủ</li>
                <li>Sản phẩm</li>
                <li>Giới thiệu</li>
                <li>Chính sách đổi trả</li>
                <li>Liên hệ</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-social-icon">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-social-icon">
                    <img src={whatsapp_icon} alt="" />
                </div> 
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ Tấn Việt Store. Designed by Tấn Việt </p>
            </div>
        
        </div>
    )
    
}

export default Footer;
