import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import './styles.css';
import * as yup from 'yup';
import { addUserAction } from 'redux/action/ManageUserAdminAction';

const schema = yup.object().shape({
    taiKhoan: yup.string().required("Account is required!"),
    matKhau: yup.string().required("Password is required!"),
    email: yup.string().required("Email is required!").email("Fill must a email"),
    soDt: yup.string().required("Phone is required!").matches(/^[0-9]+$/g, "Phone mus be number"),
    hoTen: yup.string().required("Full name is required!"),
})

const AddUser = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            hoTen: "",
            maMhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
        },
        validationSchema: schema,
        validateOnMount: true,
    });

    const handleSelected = (e) => {
        formik.setFieldValue("maLoaiNguoiDung", e.target.value);
    };

    const handleAddUser = (e) => {
        e.preventDefault();

        formik.setTouched({
            taiKhoan: true,
            matKhau: true,
            email: true,
            soDt: true,
            hoTen: true,
        });

        if (!formik.isValid) return;

        console.log(formik.values);
        dispatch(addUserAction(formik.values));
    }
    return (
        <div className="pl-60">
            <div className="px-10 py-10" style={{ background: "#f0f2f5" }}>
                <h1 className="text-center font-semibold text-3xl text-active tracking-widest">ADD USER</h1>
                <form
                    onSubmit={handleAddUser}
                    className="py-10 w-2/3" style={{ margin: "0 10%" }}
                >
                    <div className="w-full mb-6">
                        <div className="flex justify-between items-center">
                            <label className="text-xl" htmlFor="taiKhoan">Account:</label>
                            <input
                                type="text"
                                name="taiKhoan"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.taiKhoan && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.taiKhoan}</p>}
                    </div>
                    <div className="w-full mb-6 ">
                        <div className="flex justify-between items-center">
                            <label className="text-xl" htmlFor="matKhau">Password:</label>
                            <input
                                type="password"
                                name="matKhau"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.matKhau && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.matKhau}</p>}
                    </div>
                    <div className="w-full mb-6">
                        <div className="flex justify-between items-center">
                            <label className="text-xl" htmlFor="hoTen">Full name:</label>
                            <input
                                type="text"
                                name="hoTen"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.hoTen && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.hoTen}</p>}
                    </div>
                    <div className="w-full mb-6">
                        <div className="flex justify-between items-center">
                            <label className="text-xl" htmlFor="soDt">Phone:</label>
                            <input
                                type="text"
                                name="soDt"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.soDt && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.soDt}</p>}
                    </div>
                    <div className="w-full mb-6">
                        <div className="flex justify-between items-center">
                            <label className="text-xl" htmlFor="email">Email:</label>
                            <input
                                type="text"
                                name="email"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.email && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.email}</p>}
                    </div>
                    <div className="w-full mb-6 flex justify-start items-center">
                        <label className="text-xl w-1/5" htmlFor="maLoaiNguoiDung">User type:</label>
                        <select
                            name="maLoaiNguoiDung"
                            id="maLoaiNguoiDung"
                            className="w-1/5 h-12 rounded-md input px-6"
                            onChange={handleSelected}
                        >
                            <option value="KhachHang">Customer</option>
                            <option value="QuanTri">Manager</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <button
                            type="submit"
                            className="text-center py-3 text-txtThi text-base bg-active rounded w-full"
                        >
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
