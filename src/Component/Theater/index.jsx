import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTheaterInfoAction, getTheaterSystemAction } from 'redux/action/ManageTheaterAction';
import './styles.css';
import moment from 'moment';
import { List } from 'react-virtualized';
import { NavLink } from 'react-router-dom';

const Theater = () => {
    const dispatch = useDispatch();

    const { theaterSystem, theaterInfo } = useSelector(state => state.theaterReducer);

    const [indexGruop, setIndexGruop] = useState(0);

    const date = moment(new Date()).format("/YYYY");

    useEffect(
        () => {
            dispatch(getTheaterSystemAction());
        }, []
    );

    useEffect(
        () => {
            if (theaterSystem.length > 0) {
                dispatch(getTheaterInfoAction(theaterSystem[0].maHeThongRap));
            }
        }, [theaterSystem]
    );

    return (
        <div className="my-12" id="theater">
            <h1 className="text-center text-2xl text-active font-semibold mb-8">Theater</h1>
            <div className="flex shadow-lg"
                style={{ maxHeight: "700px" }}
            >
                <div
                    className="border border-border rounded-tl-md rounded-bl-md"
                    style={{ width: "92px" }}
                >
                    <ul>
                        {theaterSystem.map((theaterSystem, i) => (
                            <li
                                key={i}
                                onClick={() => dispatch(getTheaterInfoAction(theaterSystem.maHeThongRap))}
                            >
                                <a className="p-5 block borderBottom relative cursor-pointer">
                                    <img
                                        src={theaterSystem.logo}
                                        alt="LOGO-THEATER"
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-t-1 border-border border-b-1 w-1/3">
                    {(theaterInfo[0]?.lstCumRap.length > 0) && <List
                        height={600}
                        width={305}
                        rowHeight={90}
                        rowCount={theaterInfo[0].lstCumRap.length}
                        rowRenderer={() => (
                            theaterInfo[0]?.lstCumRap.map((theater, i) => (
                                <div
                                    key={i}
                                    className="p-5 flex relative opacity-50 hover:opacity-100"
                                    onClick={() => setIndexGruop(i)}
                                >
                                    <img src={theater.hinhAnh} className="mr-4" alt="IMAGE THEATER" style={{ width: "50px", height: "50px" }} />
                                    <div className="borderBottom" style={{ height: "50px" }}>
                                        <span className="text-sm text-txtPri block">{theater.tenCumRap.substr(0, 20)}</span>
                                        <span className="text-txtSec text-xs block">{theater.diaChi.substr(0, 28)}</span>
                                        <span className="text-xs text-active">[ Details ]</span>
                                    </div>
                                </div>
                            )))
                        }
                    />}
                </div>
                <div
                    className="border border-border w-2/4"
                    style={{ width: "calc(100% - 30% - 92px)" }}
                >
                    {(theaterInfo[0]?.lstCumRap.length > 0) && <List
                        height={600}
                        width={550}
                        rowHeight={90}
                        rowCount={theaterInfo[0]?.lstCumRap[indexGruop]?.danhSachPhim.length}
                        rowRenderer={() => (
                            theaterInfo[0]?.lstCumRap[indexGruop].danhSachPhim
                                .map(movie => (
                                    <div
                                        className="p-5 block relative"
                                        key={movie.maPhim}
                                    >
                                        <div className="flex ">
                                            <img src={movie.hinhAnh} alt="THEATER MOVIE" className="mr-4" style={{ width: "50px", height: "50px" }} />
                                            <div className="borderBottom w-1/3" style={{ height: "50px" }}>
                                                <span className="text-sm text-txtPri block font-medium">{movie.tenPhim}</span>
                                                <span className="text-txtSec text-xs block mt-2">120 phút - TIX 9.2 - IMDb 6.7</span>
                                            </div>
                                            <div className="ml-4 grid grid-cols-4 gap-2">
                                                {movie.lstLichChieuTheoPhim.map(showtime => {
                                                    const showDate = moment(showtime.ngayChieuGioChieu).format("DD/MM/YYYY");
                                                    if (showDate.includes(date)) return (
                                                        <NavLink
                                                            to={"/checkout/" + showtime.maLichChieu}
                                                            className="block px-2 rounded text-txtFiv hover:text-active cursor-pointer"
                                                            style={{ border: "1px solid #e4e4e4", height: "32px" }}
                                                        >
                                                            <span className="leading-8">
                                                                {moment(showtime.ngayChieuGioChieu).format("hh:mm")}
                                                            </span>
                                                        </NavLink>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )))}
                    />}
                </div>
            </div>
        </div>
    )
}

export default Theater
