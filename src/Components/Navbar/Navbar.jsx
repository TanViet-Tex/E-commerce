import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState('shop ')

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOP THỜI TRANG</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu('shop')}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/> : <></>} </li>
                <li onClick={()=>{setMenu('mens')}}><Link to='/Nam'>Nam</Link>{menu==='mens'?<hr/> : <></>} </li>
                <li onClick={()=>{setMenu('womens')}}><Link to='/Nữ'>Nữ</Link>{menu==='womens'?<hr/> : <></>} </li>
                <li onClick={()=>{setMenu('kids')}}><Link to='/Kids'>Trẻ Em</Link>{menu==='kids'?<hr/> : <></>} </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'></Link><button>ĐĂNG NHẬP</button>
                <Link to='/cart' ><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar