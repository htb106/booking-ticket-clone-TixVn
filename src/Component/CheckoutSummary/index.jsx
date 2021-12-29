import React from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInfoBookingRoomAction, handleDeletedSeatAction, selectedSeatAction } from 'redux/action/ManageBookingTicketAction';

const CheckoutSummary = (id) => {

    const dispatch = useDispatch();

    const { infoMovie, selectedList } = useSelector(state => state.bookingTicketReducer);

    const { userLogin } = useSelector(state => state.userReducer)

    let data = {
        maLichChieu: infoMovie.maLichChieu,
        danhSachVe: selectedList.map(seat => {
            return {
                "giaVe": seat.giaVe,
                "maGhe": seat.maGhe,
            }
        })
    };

    const handleDeletedSeat = (seat) => {
        const cloneSelectedList = [...selectedList];

        const foundIndex = cloneSelectedList.findIndex(item => item.maGhe === seat.maGhe);

        if (foundIndex !== -1) {
            dispatch(handleDeletedSeatAction(foundIndex))
        }
    }

    return (
        <Fragment>
            <div className="text-left grid grid-cols-2">
                <h1 className="text-txtPri text-sm my-1 font-medium col-span-1">Theater group name:</h1>
                <span className="font-normal col-span-1 text-sm my-1">{infoMovie.tenCumRap}</span>
                <h1 className="text-txtPri text-sm my-1 font-medium col-span-1">Address:</h1>
                <span className="font-normal col-span-1 text-sm my-1">{infoMovie.diaChi}</span>
                <h1 className="text-txtPri text-sm my-1 font-medium col-span-1">Theater name:</h1>
                <span className="font-normal col-span-1 text-sm my-1">{infoMovie.tenRap}</span>
            </div>
            <div className="my-8">
                <h1 className="text-center text-txtPri text-2xl font-semibold mb-4">{infoMovie.tenPhim}</h1>
                <div className="flex justify-between">
                    <p className="text-txtSec">Day: {infoMovie.ngayChieu}</p>
                    <p className="text-txtSec">Time: {infoMovie.gioChieu}</p>
                </div>
                <table className="w-full mt-6">
                    <thead className="">
                        <tr className=" border-b border-border">
                            <th className="text-center font-normal text-txtFiv text-2xl pb-4">Number</th>
                            <th className="text-center font-normal text-txtFiv text-2xl pb-4">Price</th>
                            <th className="text-center font-normal text-txtFiv text-2xl pb-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="border-b border-border">
                        {selectedList.map((seat) => (
                            <tr key={seat.stt}>
                                <td className="py-2 text-center font-semibold text-xl text-txtFiv">
                                    {seat.tenGhe}{seat.loaiGhe === "Vip" ? `(${seat.loaiGhe})` : ""}
                                </td>
                                <td className="py-2 text-center font-semibold text-xl text-txtFiv">{seat.giaVe}</td>
                                <td className="text-center">
                                    <button
                                        className="border-2  border-active px-6 py-1 text-active rounded hover:bg-purple-100"
                                        onClick={() => handleDeletedSeat(seat)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                {selectedList.length > 0 ?
                    <Fragment>
                        <div className="grid grid-cols-2 w-full">
                            <div className="text-2xl text-center text-txtSec font-semibold py-4">Total:</div>
                            <div className="text-2xl text-center text-txtSec font-semibold py-4">
                                {selectedList.reduce(
                                    (initial, current) => {
                                        return initial = initial + current.giaVe
                                    }, 0)}
                            </div>
                        </div>
                        <div className="grid-cols-2 grid gap-2 py-1 w-2/3">
                            <h1 className="text-txtPri text-xl">Account:</h1>
                            <h1 className="text-txtPri text-xl">{userLogin.taiKhoan}</h1>
                            <h1 className="text-txtPri text-xl">Email:</h1>
                            <h1 className="text-txtPri text-xl">{userLogin.email}</h1>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button 
                                className="text-txtThi text-xl py-3 px-5 bg-active rounded-md"
                                onClick = {() => {
                                    dispatch(selectedSeatAction(data))
                                    dispatch(getInfoBookingRoomAction(id.id))
                                }}
                            >
                                Booking ticket
                            </button>
                        </div>
                    </Fragment> :
                    <div></div>}
            </div>
        </Fragment>
    )
}

export default CheckoutSummary
