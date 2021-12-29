import React from 'react';
import avatar from 'assets/image/avatar.png';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { editUserProfileAction, getInfoProfileAction } from 'redux/action/ManageUserAction';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useFormik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    matKhau: yup.string().required("Password is required"),
    hoTen: yup.string().required("Full name is required"),
    soDT: yup.string().required("Phone is required!").matches(/^[0-9]+$/g, "Phone mus be number"),
    email: yup.string().required("Email is required!").email("Fill must a email!"),
})

const Profile = () => {
    const dispatch = useDispatch();

    const { userInfo } = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(getInfoProfileAction());
    }, []);

    useEffect(() => {
        if(userInfo){
            formik.setFieldValue("taiKhoan", userInfo.taiKhoan);
            formik.setFieldValue("matKhau", userInfo.matKhau);
            formik.setFieldValue("hoTen", userInfo.hoTen);
            formik.setFieldValue("soDT", userInfo.soDT);
            formik.setFieldValue("email", userInfo.email);
            formik.setFieldValue("maNhom", userInfo.maNhom);
            formik.setFieldValue("maLoaiNguoiDung", userInfo.maLoaiNguoiDung);
        }
    }, [userInfo]);

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            hoten: "",
            soDT: "",
            email: "",
            maNhom: "",
            maLoaiNguoiDung: "",
        },
        validationSchema: schema,
        validateOnMount: true,
    })

    const handleEdit = (e) => {
        e.preventDefault();

        formik.setTouched({
            matKhau: true,
            hoten: true,
            soDT: true,
            email: true,
        });

        if(!formik.isValid) return;

        console.log(formik.values)

        dispatch(editUserProfileAction(
            formik.values,
            window.location.reload(),
        ))
    }
    return (
        <div className="w-4/5" style={{ margin: "0 auto" }}>
            <div className=" grid grid-cols-3 pt-20 pb-10" style={{ minHeight: "450px" }}>
                <div className="col-span-1 text-center shadow-md">
                    <img
                        src={avatar}
                        alt="AVATAR"
                        style={{ width: "100px", height: "100px", margin: "20px auto" }}
                        className="rounded-full border-border border"
                    />
                    <div className="flex text-left ml-12 py-1">
                        <p className="w-1/2 text-base text-txtSec">Account :</p>
                        <p className="w-1/2 text-txtFiv font-semibold text-base">{userInfo.taiKhoan}</p>
                    </div>
                    <div className="flex text-left ml-12 py-1">
                        <p className="w-1/2 text-base text-txtSec">Password :</p>
                        <p className="w-1/2 text-txtFiv font-semibold text-base">{userInfo.matKhau}</p>
                    </div>
                    <div className="flex text-left ml-12 py-1">
                        <p className="w-1/2 text-base text-txtSec">Full name :</p>
                        <p className="w-1/2 text-txtFiv font-semibold text-base">{userInfo.hoTen}</p>
                    </div>
                    <div className="flex text-left ml-12 py-1">
                        <p className="w-1/2 text-base text-txtSec">Email :</p>
                        <p className="w-1/2 text-txtFiv font-semibold text-base">{userInfo.email}</p>
                    </div>
                    <div className="flex text-left ml-12 py-1">
                        <p className="w-1/2 text-base text-txtSec">Phone :</p>
                        <p className="w-1/2 text-txtFiv font-semibold text-base">{userInfo.soDt}</p>
                    </div>
                    <div className="flex text-left ml-12 py-1">
                        <p className="w-1/2 text-base text-txtSec">User type :</p>
                        <p className="w-1/2 text-txtFiv font-semibold text-base">{userInfo.maLoaiNguoiDung}</p>
                    </div>
                    <div className="my-10 flex justify-center">
                        <a className="block">
                            <i class=" cursor-pointer fab fa-facebook-square text-5xl mx-4 text-blue-700"></i>
                        </a>
                        <a className="block">
                            <i class=" cursor-pointer fab fa-instagram-square text-5xl mx-4 text-pink-500"></i>
                        </a>
                        <a className="block">
                            <i class=" cursor-pointer fab fa-google-plus-square text-5xl mx-4 text-green-400"></i>
                        </a>
                    </div>
                </div>
                <div className="col-span-2">
                    <h1 className="text-active font-semibold text-3xl text-center py-5">Edit my profile</h1>
                    <form
                        onSubmit={handleEdit}
                        className="py-5 px-10"
                    >
                        <div className="w-full mb-8">
                            <input
                                type="text"
                                name="taiKhoan"
                                placeholder="Account"
                                className="input px-5 text-base py-4 text-txtPri w-full rounded border-boder border"
                                disabled
                                value={formik.values.taiKhoan}
                            />
                        </div>
                        <div className="w-full mb-8">
                            <input
                                type="password"
                                name="matKhau"
                                placeholder="Password"
                                className="input px-5 text-base py-4 text-txtPri w-full rounded border-boder border"
                                value={formik.values.matKhau}
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
                                className="input px-5 text-base py-4 text-txtPri w-full rounded border-boder border"
                                value={formik.values.hoTen}
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
                                className="input px-5 text-base py-4 text-txtPri w-full rounded border-boder border"
                                value={formik.values.soDT}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.soDt && <p className="text-red-600 ml-1 text-base mt-2 font-medium">{formik.errors.soDT}</p>}
                        </div>
                        <div className="w-full mb-8">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="input px-5 text-base py-4 text-txtPri w-full rounded border-boder border"
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && <p className="text-red-600 ml-1 text-base mt-2 font-medium">{formik.errors.email}</p>}
                        </div>
                        <div className="w-full">
                            <button
                                type="submit"
                                className="text-center py-3 text-txtThi text-base bg-active rounded w-full"
                            >
                                EDIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="py-10">
                <h1 className="text-3xl text-active text-center pb-10 font-semibold">History booked</h1>
                <div className="grid grid-cols-4 gap-5">
                    {userInfo.thongTinDatVe?.map(item => (
                        <div key={item.maVe}>
                            <img
                                src={item.hinhAnh}
                                alt="IMAGE"
                                style={{ width: "200px", height: "300px", margin: "0 auto" }}
                                className="rounded"
                            />
                            <h1 className="text-center text-xl font-medium py-4">{item.tenPhim}</h1>
                            <p className="text-txtSec py-1">
                                Booking date: <span className="text-txtFiv font-medium">
                                    {moment(item.ngayDat).format("hh:mm - DD/MM/YY")}
                                </span>
                            </p>
                            <p className="text-txtSec py-1">
                                Theater name: <span className="text-txtFiv font-medium">
                                    {item.danhSachGhe[0].maHeThongRap}
                                </span>
                            </p>
                            <p className="text-txtSec py-1">
                                Number seat: <span className="text-txtFiv font-medium">
                                    {item.danhSachGhe.map(seat => `${seat.tenGhe} `)}
                                </span> - 1x{item.giaVe}đ
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile
