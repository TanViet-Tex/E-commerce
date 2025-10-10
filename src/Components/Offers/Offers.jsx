import React from "react";
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
            <h1>Độc Quyền</h1>
            <h1>Đề Xuất Cho Bạn</h1>
            <p>Những Sản Phẩm Bán Chạy Nhất</p>
            <button>Xem Ngay</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />

            </div>
        </div>
    )
}

export default Offers;