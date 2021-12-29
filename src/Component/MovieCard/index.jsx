import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const MovieCard = (props) => {
    const { hinhAnh, tenPhim, ngayKhoiChieu, danhGia, moTa } = props.movie;

    return (
        <div className="card relative w-full">
            <img 
                src={hinhAnh} 
                alt="IMAGE" 
                className="rounded-lg w-full" 
                style={{height: "300px"}}
            />
            <div className="bg-bgThi w-14 h-8 rounded-lg absolute top-1 right-1">
                <p className="text-center leading-8 text-txtThi">{danhGia}/10</p>
            </div>
            <div 
                className="cardInfo bg-bgFou absolute top-0 right-0 left-0 bottom-0 rounded-lg opacity-0 transition duration-100" 
            >
                <p className="text-sm text-txtThi pt-1 pl-1">
                    {moment(ngayKhoiChieu).format("hh:mm A")} -
                    {moment(ngayKhoiChieu).format("DD/MMM/YYY")}
                </p>
                <h1 className="px-2 text-2xl pt-12 pb-3 font-medium text-center text-active">{tenPhim}</h1>
                <p className="text-center px-1 text-txtThi text-sm mb-12">{moTa.substr(0, 50)}...</p>
                <NavLink to="/" movie={props.movie}
                    className="p-3 absolute bottom-2 rounded-lg bg-active text-txtThi text-center font-medium"
                    style={{width: "90%",left: "5%"}}
                >
                    BOOK TICKETS
                </NavLink>
            </div>
        </div>
    )
}

export default MovieCard
