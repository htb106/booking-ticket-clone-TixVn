import TableShowTime from 'Component/TableShowTime';
import moment from 'moment';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetailAction } from 'redux/action/ManageMovieAction';
import './styles.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Link } from 'react-scroll';

const MovieDetail = (props) => {
    const dispatch = useDispatch();

    const [showTime, setShowTime] = useState(true);

    const show_time = showTime ? "text-active text-2xl" : "text-xl text-txtThi";
    const info = !showTime ? "text-active text-2xl" : "text-xl text-txtThi";

    const { movieDetail } = useSelector(state => state.movieListReducer);

    const { id } = props.match.params;

    useEffect(() => {
        dispatch(getMovieDetailAction(id));
    }, [dispatch]);


    const stars = Array(movieDetail.danhGia).fill(0);

    const showInfoMovie = () => (
        <div className="bg-bgFiv py-14 block">
            <div
                className="grid grid-cols-2"
                style={{ maxWidth: "870px", margin: "0 auto" }}>
                <div className="col-span-1">
                    <div className="mb-4">
                        <p className="mr-4 inline-block text-txtThi font-medium">Premerie Date:</p>
                        <p className="mr-4 inline-block text-txtSec font-medium">
                            {moment(movieDetail.ngayKhoiChieu).format("hh:mm - DD/MM/YY")}
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="mr-4 inline-block text-txtThi font-medium">Directors:</p>
                        <p className="mr-4 inline-block text-txtSec">
                            ...
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="mr-4 inline-block text-txtThi font-medium">Cast:</p>
                        <p className="mr-4 inline-block text-txtSec">
                            ...
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="mr-4 inline-block text-txtThi font-medium">Category:</p>
                        <p className="mr-4 inline-block text-txtSec">
                            ...
                        </p>
                    </div>
                </div>
                <div className="col-span-1">
                    <p className="mr-4 text-txtThi font-medium">Content:</p>
                    <p className="mr-4 text-txtSec">
                        {movieDetail.moTa}
                    </p>
                </div>
            </div>
        </div>

    )
    return (
        <div>
            <div className="relative">
                <div
                    className="w-full"
                    style={{
                        overflow: 'hidden'
                    }}
                    >
                    <img className="w-full" style={{ height: "800px", filter: "blur(15px)" }} src={movieDetail.hinhAnh} alt="backGround" />
                </div>
                <div className="movieMain grid grid-cols-12 z-10">
                    <div className="col-span-3">
                        <img src={movieDetail.hinhAnh} className="rounded" alt="Image" style={{ width: "220px", height: "320px" }} />
                    </div>
                    <div className="col-span-5 movieInfo text-left ml-4">
                        <p className="text-txtThi text-sm my-2">
                            {moment(movieDetail.ngayKhoiChieu).format("DD.MM.YY")}
                        </p>
                        <h1 className="text-txtThi text-2xl my-2">{movieDetail.tenPhim}</h1>
                        <p className="text-txtThi text-sm my-2">132 phút - 7.3 IMDb - 2D/Digital</p>
                        <Link 
                            to="tableShowTimes"
                            smooth={true}
                            duration={1000}
                            className="text-txtThi text-md my-5 bg-active rounded px-6 py-2"
                        >
                            Booking Ticker
                        </Link>
                    </div>
                    <div className="col-span-2 movieRating">
                        <div className="rounded-full border-8 border-txtFou h-32 w-32 opacity-90">
                            <div className="w-full flex justify-center items-center">
                            <p
                                className="text-4xl text-txtThi inline-block font-medium"
                                style={{ lineHeight: "7rem"}}
                            >
                                {movieDetail.danhGia}/
                                <span className="text-2xl">10</span>
                            </p>
                            </div>
                            <div className="my-5 grid-cols-5 grid">
                                {stars.map((item, i) => (
                                    <div key={i}  className="col-span-1">
                                        <i class="fas fa-star text-txtFou"></i>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        background: "linear-gradient(to top, rgb(10 32 41), transparent 100% )",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                    }}>
                </div>
            </div>
            <div>
                <div className="text-center bg-bgFiv">
                    <a
                        className={`font-semibold mx-6 headingActiveDetail cursor-pointer ${show_time}`}
                        onClick={() => {
                            setShowTime(true);
                        }}
                    >
                        Show Times
                    </a>
                    <a
                        className={`font-semibold mx-6 headingActiveDetail cursor-pointer ${info}`}
                        onClick={() => {
                            setShowTime(false);
                        }}
                    >
                        Information
                    </a>
                </div>
                {showTime ? (<TableShowTime id={id}/>) : (showInfoMovie())}
            </div>
        </div>
    )
}

export default MovieDetail;