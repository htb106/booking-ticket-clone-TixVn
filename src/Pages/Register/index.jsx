import React from 'react'
import Header from 'Template/HomeTemplate/Layout/Header';
import bg from 'assets/image/backapp.jpg';
import logo from 'assets/image/logo-contact.png';
import './styles.css'
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { GROUPID } from 'util/settings/config';
import { registerAction } from 'redux/action/ManageUserAction';
import { ToastContainer } from 'react-toastify';

const schema = yup.object().shape({
    taiKhoan: yup.string().required("Account is required!"),
    matKhau: yup.string().required("Password is required!"),
    hoTen: yup.string().required("Full name is required!"),
    soDt: yup.string().required("Phone is required!").matches(/^[0-9]+$/g, "Phone mus be number"),
    email: yup.string().required("Account is required!").email("Email is required!"),
});

const Register = (props) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDt: "",
            email: "",
            maNhom: GROUPID,
        },
        validateOnMount: true,
        validationSchema: schema,
    })

    const handleSubmit = e => {
        e.preventDefault();

        formik.setTouched({
            taiKhoan: true,
            matKhau: true,
            soDt: true,
            email: true,
            hoTen: true,
        })

        if(!formik.isValid) return

        console.log(formik.values);

        dispatch(
            registerAction(
                formik.values,
                () => {props.history.push("/login")} 
            ))
    }
    return (
        <div className="relative">
            <Header/>
            <ToastContainer/>
            <div>
                <img 
                    src={bg} 
                    alt="BACKGROUND" 
                    className="bg"
                />
            </div>
            <div className="content">
                <img src={logo} alt="LOGO" className="img"/>
                <p className="text-center text-txtThi text-base my-10">
                    Register to book tickets and recieve many offers
                </p>
                <form onSubmit={handleSubmit}>
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
                    <input 
                        type="text" 
                        name="hoTen" 
                        placeholder="Full name"
                        className="input px-5 text-base py-4 text-txtPri w-full rounded"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.hoTen && <p className="text-red-600 ml-1 text-base mt-2 font-medium">{formik.errors.hoTen}</p>}
                </div>
                <div className="w-full mb-8">
                    <input 
                        type="text" 
                        name="soDt" 
                        placeholder="Phone"
                        className="input px-5 text-base py-4 text-txtPri w-full rounded"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.soDt && <p className="text-red-600 ml-1 text-base mt-2 font-medium">{formik.errors.soDt}</p>}
                </div>
                <div className="w-full mb-8">
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        className="input px-5 text-base py-4 text-txtPri w-full rounded"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && <p className="text-red-600 ml-1 text-base mt-2 font-medium">{formik.errors.email}</p>}
                </div>
                <div className="w-full mb-8">
                    <button
                        type="submit" 
                        className="text-center py-3 text-txtThi text-base bg-active rounded w-full"
                    >
                        REGISTER
                    </button>
                </div>
                <NavLink 
                    to="/login"
                    className="mt-4 cursor-pointer text-txtThi text-left text-sm hover:underline"
                >
                    Already have an account? Login.
                </NavLink>
                </form>
            </div>
        </div>
    )
}

export default Register
