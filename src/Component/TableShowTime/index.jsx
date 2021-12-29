import moment from 'moment';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { List } from 'react-virtualized';
import { getInfoShowTimesAction } from 'redux/action/ManageMovieAction';
import './styles.css';

const TableShowTime = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoShowTimesAction(id.id));
    }, [dispatch]);

    const [index, setIndex] = useState(0);

    const { infoShowTimes } = useSelector(state => state.movieListReducer);

    return (
        <div className="py-10 bg-bgFiv" id="tableShowTimes">
            <div
                className="flex shadow-lg bg-white container p-0 rounded-md"
                style={{ maxHeight: "700px", margin: "0 auto", maxWidth: "870px" }}
            >
                <div
                    className=" border border-border rounded-tl-md rounded-bl-md w-1/4"
                >
                    {infoShowTimes.heThongRapChieu?.map((theaterSystem, i) => (
                        <div key={i} onClick={() => setIndex(i)}>
                            <a className="p-5 block borderBottom relative cursor-pointer">
                                <img
                                    src={theaterSystem.logo}
                                    alt="LOGO-THEATER"
                                    style={{ width: "50px", height: "50px", display: "inline-block" }}
                                />
                                <h1 className="text-txtPri text-lg ml-6 inline-block font-medium">{theaterSystem.maHeThongRap}</h1>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="w-3/4 border border-r-1">
                    {(infoShowTimes.heThongRapChieu?.length > 0) &&
                        <List
                            height={600}
                            width={650}
                            rowHeight={1000}
                            rowCount={infoShowTimes.heThongRapChieu[index].cumRapChieu.length}
                            rowRenderer={() => (
                                infoShowTimes
                                    .heThongRapChieu[index]
                                    .cumRapChieu
                                    .map((theater, i) => (
                                        <div
                                            key={i}
                                            className="p-5 relative"
                                        >
                                            <div className="mr-8 flex mx-4">
                                                <img src={theater.hinhAnh} className="mr-4" alt="IMAGE THEATER" style={{ width: "50px", height: "50px" }} />
                                                <div>
                                                <span className="text-sm text-txtPri block">{theater.tenCumRap}</span>
                                                <span className="text-txtSec text-xs block">{theater.diaChi}</span>
                                                </div>

                                            </div>

                                            <div className="grid grid-cols-4 gap-2 pt-4">
                                                {theater.lichChieuPhim.map(showtime => (
                                                    <NavLink
                                                        to={"/checkout/" + showtime.maLichChieu}
                                                        className="px-2 rounded text-txtFiv hover:text-active cursor-pointer text-center"
                                                        style={{ border: "1px solid #e4e4e4", height: "32px" }}
                                                    >
                                                        <span className="leading-8 text-center text-sm">
                                                            {moment(showtime.ngayChieuGioChieu).format("hh:mm")} - {moment(showtime.ngayChieuGioChieu).format("DD/MM/yyyy")}
                                                        </span>
                                                    </NavLink>
                                                )
                                                )}
                                            </div>
                                        </div>
                                    ))
                            )}
                        />}
                </div>
            </div>
        </div>
    )
}

export default TableShowTime
