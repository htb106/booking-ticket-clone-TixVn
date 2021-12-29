import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getBanerAction } from 'redux/action/ManageBannerMovieAction';
import SwiperCore , { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Navigation, Scrollbar])

const CarouselBanner = () => {
    const dispatch = useDispatch();

     useEffect( () => {

        dispatch(getBanerAction());

     }, [dispatch]);

    const { arrBanner } = useSelector(state => state.movieBannerReducer);
    
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {arrBanner.map( banner => {
                const { maBanner, hinhAnh } = banner;

                return (
                    <SwiperSlide key={maBanner}>
                        <img src={hinhAnh} alt="BANNER" className="w-full" style={{height: "650px"}}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    )
}

export default CarouselBanner

