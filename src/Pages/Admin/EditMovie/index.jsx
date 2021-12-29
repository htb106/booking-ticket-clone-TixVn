import { useFormik } from 'formik';
import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editMovieAction } from 'redux/action/ManageMovieAction';
import { useEffect } from 'react';
import * as yup from 'yup';
import { getMovieDetailAction } from 'redux/action/ManageMovieAction';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
    tenPhim: yup.string().required("Movie name is required!"),
    trailer: yup.string().required("Trailer is required!"),
    danhGia: yup.string().required("Rating is required!").min(1, "Rating must have 1 characters"),
    moTa: yup.string().required("Desciption is required!"),
    ngayKhoiChieu: yup.string().required("Show date code is required!"),
    hinhAnh: yup.string().required("Image is required"),
});

const EditMovie = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const { id } = props.match.params;

        dispatch(getMovieDetailAction(id))
    }, [dispatch])

    const { movieDetail } = useSelector(state => state.movieListReducer);

    const [value, setValue] = useState(new Date());
    const [imgSrc, setImgSrc] = useState("");

    const formik = useFormik({
        initialValues: {
            maPhim: "",
            tenPhim: "",
            trailer: "",
            hinhAnh: "",
            ngayKhoiChieu: "",
            moTa: "",
            danhGia: 0,
            sapChieu: false,
            dangChieu: false,
            hot: false,
        },
        validationSchema: schema,
        validateOnMount: true,
    });

    useEffect(() => {
        if(movieDetail){
            formik.setFieldValue("maPhim", movieDetail.maPhim);
            formik.setFieldValue("tenPhim", movieDetail.tenPhim);
            formik.setFieldValue("trailer", movieDetail.trailer);
            formik.setFieldValue("moTa", movieDetail.moTa);
            formik.setFieldValue("hinhAnh", movieDetail.hinhAnh);
            formik.setFieldValue("danhGia", movieDetail.danhGia);
            formik.setFieldValue("ngayKhoiChieu", movieDetail.ngayKhoiChieu);
            formik.setFieldValue("hot", movieDetail.hot);
            formik.setFieldValue("dangChieu", movieDetail.dangChieu);
            formik.setFieldValue("sapChieu", movieDetail.sapChieu);
        }
    }, [movieDetail]);

    const handleChangeSwitch = (name) => {
        return (e) => {
            formik.setFieldValue(name, e.target.checked);
        };
    };

    const handleChangeDate = (newValue) => {
        setValue(newValue);
        let ngayKhoiChieu = moment(newValue).format("DD/MM/yyyy");
        formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
    };

    const handleChangeFile = async (e) => {
        let file = e.target.files[0];
        if (
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/gif" ||
            file.type === "image/png"
        ) {
            await formik.setFieldValue("hinhAnh", file);

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result);
            };
        }
    };

    const handleAddMovie = (e) => {
        e.preventDefault();

        formik.setTouched({
            maPhim: true,
            tenPhim: true,
            trailer: true,
            hinhAnh: true,
            ngayKhoiChieu: true,
            moTa: true,
            danhGia: true,
            hinhAnh: true,
        });

        let formData = new FormData();

        for (let key in formik.values) {
            if (key !== "hinhAnh") {
                formData.append(key, formik.values[key]);
            } else {
                formData.append("File", formik.values.hinhAnh, formik.values.hinhAnh.name);
            }
        }

        dispatch(editMovieAction(formData));
    }

    return (
        <div className="pl-60">
            <div className="px-10 py-10" style={{ background: "#f0f2f5" }}>
                <h1 className="text-center font-semibold text-3xl text-active tracking-widest">ADD MOVIE</h1>
                <form
                    onSubmit={handleAddMovie}
                    className="py-10 w-2/3" style={{ margin: "0 10%" }}
                >
                    <div className="w-full mb-6">
                        <div className=" flex justify-between items-center">
                            <label className="text-xl">Movie code:</label>
                            <input
                                type="text"
                                name="maPhim"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                value={formik.values.maPhim}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="w-full mb-6">
                        <div className=" flex justify-between items-center">
                            <label className="text-xl">Movie name:</label>
                            <input
                                type="text"
                                name="tenPhim"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                value={formik.values.tenPhim}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.tenPhim && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.tenPhim}</p>}
                    </div>
                    <div className="w-full mb-6">
                        <div className=" flex justify-between items-center">
                            <label className="text-xl">Trailer:</label>
                            <input
                                type="text"
                                name="trailer"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                value={formik.values.trailer}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.trailer && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.trailer}</p>}
                    </div>
                    <div className="w-full mb-6">
                        <div className="flex justify-between items-center">
                            <label className="text-xl">Description:</label>
                            <textarea
                                type="text"
                                name="moTa"
                                rows="5"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                value={formik.values.moTa}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.moTa && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.moTa}</p>}
                    </div>
                    <div className="w-full mb-6">
                        <div className=" flex justify-between items-center">
                            <label className="text-xl">Rating:</label>
                            <input
                                type="number"
                                name="danhGia"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                value={formik.values.danhGia}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.touched.danhGia && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.danhGia}</p>}
                    </div>
                    <div className="w-full mb-6">
                        <div className=" flex justify-between items-center">
                            <label className="text-xl">Show date:</label>
                            <input
                                type="date"
                                name="ngayKhoiChieu"
                                className="input px-5 text-base py-3 text-txtPri w-4/5 rounded border-boder border"
                                value={moment(formik.values.ngayKhoiChieu, "DD/MM/yyyy")}
                                onBlur={formik.handleBlur}
                                onChange={handleChangeDate}
                            />
                        </div>
                        {formik.touched.ngayKhoiChieu && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.ngayKhoiChieu}</p>}
                    </div>
                    <div className="w-full mb-6 flex justify-center items-center">
                        <div className="mx-5 flex items-center">
                            <label htmlFor="hot">Hot:</label>
                            <input
                                type="checkbox"
                                name="hot"
                                id="hot"
                                className="mx-2 w-5 h-5"
                                checked={formik.values.hot}
                                onChange={handleChangeSwitch("hot")}
                            />
                        </div>
                        <div className="mx-5 flex items-center">
                            <label htmlFor="sapChieu">Comming soon:</label>
                            <input
                                type="checkbox"
                                name="sapChieu"
                                id="sapChieu"
                                className="mx-2 w-5 h-5"
                                checked={formik.values.sapChieu}
                                onChange={handleChangeSwitch("sapChieu")}
                            />
                        </div>
                        <div className="mx-5 flex items-center">
                            <label htmlFor="dangChieu">Now showing:</label>
                            <input
                                type="checkbox"
                                name="dangChieu"
                                id="dangChieu"
                                className="mx-2 w-5 h-5"
                                checked={formik.values.dangChieu}
                                onChange={handleChangeSwitch("dangChieu")}
                            />
                        </div>
                    </div>
                    <div className="w-full mb-6">
                        <div className="flex items-center justify-between">
                            <label className="text-xl">Selected image:</label>
                            <input
                                type="file"
                                name="hinhAnh"
                                onChange={handleChangeFile}
                            />
                            <img className="mr-20" src={imgSrc === "" ? movieDetail.hinhAnh : imgSrc} alt="IMAGE" style={{ width: "100px", height: "180px" }} />
                        </div>
                        {formik.touched.hinhAnh && <p className="text-red-600 ml-40 text-base mt-2 font-medium">{formik.errors.hinhAnh}</p>}
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
    )
}

export default EditMovie


