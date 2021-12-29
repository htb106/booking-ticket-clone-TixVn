import React from 'react'
import Header from 'Template/HomeTemplate/Layout/Header';
import bg from 'assets/image/backapp.jpg';
import logo from 'assets/image/logo-contact.png';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { loginAction } from 'redux/action/ManageUserAction';
import { ToastContainer } from 'react-toastify';

const schema = yup.object().shape({
    taiKhoan: yup.string().required("Account is required!"),
    matKhau: yup.string().required("Password is required!"),
})

const Login = (props) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
        },
        validationSchema: schema,
        validateOnMount: true,
    });

    const handleSubmit = e => {
        e.preventDefault();

        formik.setTouched({
            taiKhoan: true,
            matKhau: true
        });

        if (!formik.isValid) return;

        dispatch(loginAction(
            formik.values,
            () =>  {props.history.push("/")} 
        ));
    };
    return (
        <div className="relative">
            <ToastContainer position="top-right" autoClose={5000}/>
            <Header/>
            <div>
                <img 
                    src={bg} 
                    alt="BACKGROUND" 
                    className="bgLogin"
                />
            </div>
            <div className="contentLogin">
                <img src={logo} alt="LOGO" className="img"/>
                <form className="mt-10" onSubmit={handleSubmit}>
                <div className="w-full mb-8">
                    <input 
                        type="text" 
                        name="taiKhoan" 
                        placeholder="Account"
                        className="input px-5 text-base py-4 text-txtPri w-full rounded"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                       
                    />
                    {formik.touched.taiKhoan && <p className="text-red-600 ml-1 text-base mt-2 font-medium">{formik.errors.taiKhoan}</p>}
                </div>
                <div className="w-full mb-8">
                    <input 
                        type="password" 
                        name="matKhau" 
                        placeholder="Password"
                        className="input px-5 text-base py-4 text-txtPri w-full rounded"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.matKhau && <p className="text-red-600 ml-1 text-base mt-2 font-medium">{formik.errors.matKhau}</p>}
                </div>
                <div className="w-full mb-8">
                    <button
                        type="submit" 
                        className="text-center py-3 text-txtThi text-base bg-active rounded w-full"
                    >
                        LOGIN
                    </button>
                </div>

                <div className="w-full flex justify-between">
                <a 
                    className="inline-block cursor-pointer text-txtThi text-left text-sm hover:underline"
                >
                    Forgot password?
                </a>
                <NavLink 
                    to="/register"
                    className="inline-block  cursor-pointer text-txtThi text-right text-sm hover:underline"
                >
                    Don't have an account? Register
                </NavLink>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login
