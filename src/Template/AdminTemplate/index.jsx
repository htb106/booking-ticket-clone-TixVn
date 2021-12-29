import React from 'react'
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { notifiError } from 'util/toastify/toastify';
import HeaderAd from './Layout/HeaderAd';
import SideBar from './Layout/SideBar';

const AdminTemplate = (props) => {
    const { Component, ...restProps } = props;

    const { userLogin } = useSelector(state => state.userReducer);

    if (userLogin.maLoaiNguoiDung !== "QuanTri") {
        notifiError("You don't have access")
        return <Redirect to="/" />
    }
    
    return (
        <Route
            {...restProps}
            render={(propsRoute) => (
                <div>
                    <HeaderAd />
                    <SideBar />
                    <Component {...propsRoute} />
                </div>
            )}
        />
    )
}

export default AdminTemplate
