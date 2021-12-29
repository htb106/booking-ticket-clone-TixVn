import React from 'react'
import { Fragment } from 'react';
import { Route } from 'react-router';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

const HomeTemplate = props => {
    const { Component, ...restProps } = props;

    return (
        <Route
           {...restProps}
           render={propsRoute => (
               <Fragment>
                   <Header/>
                   <Component {...propsRoute}/>
                   <Footer/>
               </Fragment>
           )}
        />
    )
}

export default HomeTemplate
