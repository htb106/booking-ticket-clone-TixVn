import React from 'react'
import { Fragment } from 'react';
import { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import Footer from 'Template/HomeTemplate/Layout/Footer';
import Header from 'Template/HomeTemplate/Layout/Header';
import { USER_LOGIN } from 'util/settings/config';

const CheckoutTemplate = (props) => {
    const { Component, ...restProps } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
      });
    
    if(!localStorage.getItem(USER_LOGIN)) return <Redirect to="/login"/>

    return (
        <Route
            {...restProps}
            render = { (propsRoute) => (
                    <Fragment>
                        <Header/>
                        <Component {...propsRoute} />
                        <Footer/>
                    </Fragment>
                )
            }
        />

    )
}

export default CheckoutTemplate
