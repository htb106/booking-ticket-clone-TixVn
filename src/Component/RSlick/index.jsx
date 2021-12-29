import MovieCard from 'Component/MovieCard';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMovieListAction } from 'redux/action/ManageMovieAction';
import SwiperCore , { Navigation, Autoplay, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './styles.css';

SwiperCore.use([Navigation, Autoplay, ])

const RSlick = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieListAction());
    }, [dispatch]);

    const { movieList } = useSelector( state => state.movieListReducer);

    const [nowShowing, setNowShowing] = useState(true);

    const now_showing = nowShowing ? "text-active text-2xl" : "text-xl";
    const comming_soon = !nowShowing ? "text-active text-2xl" : "text-xl";

    const movieSlider = () => (
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            grid={{"rows": 2}}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: true }} 
            lidesPerView="auto"
            slidesPerGroupAuto
            loop={true}
        >
            {movieList
                .filter(movie => {
                    if(nowShowing){
                        return movie.dangChieu === true
                    }
                    return movie.sapChieu === true
                })
                .map( movie => {

                return (
                    <SwiperSlide key={movie.maPhim}>
                        <NavLink to={"/detail/" + movie.maPhim}>
                            <MovieCard movie={movie}/>
                        </NavLink>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )

    return (
        <div className="mt-12" id="movie">
            <div className="text-center mb-10">
                <a
                    className={`font-semibold mx-6 headingActiveRSlick cursor-pointer ${now_showing}`}
                    onClick={() => setNowShowing(true)}
                >
                    Now Showing
                </a>
                <a  
                    className={`font-semibold mx-6 headingActiveRSlick cursor-pointer ${comming_soon}`}
                    onClick={() => setNowShowing(false)}
                >
                    Coming Soon
                </a>
            </div>
            <div className="pb-10 shadow-md rounded-bl-sm rounded-br-sm">
                {movieSlider()}
            </div>
        </div>
    )
}

export default RSlick
