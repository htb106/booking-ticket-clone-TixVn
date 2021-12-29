import CarouselBanner from 'Component/CarouselBaner'
import News from 'Component/News'
import RSlick from 'Component/RSlick'
import Theater from 'Component/Theater'
import React from 'react'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'


const Home = () => {
    return (
        <Fragment>
            <CarouselBanner/>
            <div className="container w-3/4" style={{margin: "0 auto"}}>
            <ToastContainer position="top-right" autoClose={5000}/>
                <RSlick/>
                <Theater/>
                <News/>
            </div>
        </Fragment>
    )
}

export default Home

