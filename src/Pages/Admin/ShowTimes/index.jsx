import { useFormik } from 'formik';
import { values } from 'lodash';
import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createShowTimeAction, getInfoShowTimesAction } from 'redux/action/ManageMovieAction';
import { getTheaterGroupAction, getTheaterSystemAction } from 'redux/action/ManageTheaterAction';

const ShowTimes = (props) => {
    const { id } = props.match.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoShowTimesAction(id));

        dispatch(getTheaterSystemAction());
    }, [dispatch]);

    const { infoShowTimes } = useSelector(state => state.movieListReducer);
    const { theaterSystem, theaterGroup } = useSelector(state => state.theaterReducer);

    const formik = useFormik({
        initialValues: {
            maPhim: id,
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: 0,
        },
    });

    const handleSelectedTheaterSystem = e => {
        dispatch(getTheaterGroupAction(e.target.value));
    };

    const handleSelectedTheaterGroup = e => {
        formik.setFieldValue("maRap", e.target.value);
    };

    const handleChangeDate = (newValue) => {
        let ngayChieuGioChieu = moment(newValue).format("DD/MM/yyyy");
        formik.setFieldValue("ngayChieuGioChieu", ngayChieuGioChieu);
    };

    const handleCreateShowTimes = (e) => {
        e.preventDefault();
        dispatch(createShowTimeAction(values))
    }

    return (
        <div className="pl-60">
            <div className="px-10 py-10" style={{ background: "#f0f2f5" }}>
                <h1 className="text-center font-semibold text-3xl text-active tracking-widest my-10">CREATE SHOWTIMES</h1>

                <div className="grid grid-cols-4">
                    <div className="col-span-1">
                        <h1 className="text-2xl font-medium my-6">
                            {infoShowTimes.tenPhim}
                        </h1>
                        <img src={infoShowTimes.hinhAnh} alt="IMAGE" style={{ height: "300px", width: "200px" }} />
                    </div>

                    <form
                        onSubmit={handleCreateShowTimes}
                        className="py-10 w-2/3 col-span-3" style={{ margin: "0 10%" }}
                    >
                        <div className="w-full mb-6 flex justify-start items-center">
                            <label className="text-xl w-2/5" htmlFor="theaterSystem">Selected theater systerm:</label>
                            <select
                                id="theaterSystem"
                                className="w-3/5 h-12 rounded-md input px-6"
                                onChange={handleSelectedTheaterSystem}
                            >
                                <option value=""></option>
                                {theaterSystem.map((theater, i) => (
                                    <option
                                        key={i}
                                        value={theater.maHeThongRap}
                                        className="py-4 px-6"
                                    >
                                        {theater.maHeThongRap}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full mb-6 flex justify-start items-center">
                            <label className="text-xl w-2/5" htmlFor="theaterGroup">Selected theater group:</label>
                            <select
                                id="theaterGroup"
                                className="w-3/5 h-12 rounded-md input px-6"
                                onChange={handleSelectedTheaterGroup}
                            >
                                {theaterGroup?.map((theater, i) => (
                                    <option
                                        key={i}
                                        value={theater.maCumRap}
                                        className="py-4 px-6"
                                    >
                                        {theater.tenCumRap}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full mb-6 flex justify-start items-center">
                            <label className="text-xl w-2/5">Selected show date:</label>
                            <input
                                type="date"
                                name="ngayKhoiChieu"
                                className="input px-5 text-base py-3 text-txtPri w-3/5 rounded border-boder border"
                                onBlur={formik.handleBlur}
                                onChange={handleChangeDate}
                            />
                        </div>
                        <div className="w-full mb-6 flex justify-start items-center">
                            <label className="text-xl w-2/5">Selected price:</label>
                            <input
                                type="text"
                                name="giaVe"
                                className="input px-5 text-base py-3 text-txtPri w-3/5 rounded border-boder border"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="w-full">
                            <button
                                type="submit"
                                className="text-center py-3 text-txtThi text-base bg-active rounded w-full"
                            >
                                CREATE
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default ShowTimes
