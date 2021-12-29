import React from 'react'
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import screen from 'assets/image/screen.png'
import "./styles.css";
import { getInfoBookingRoomAction, handleDeletedSeatAction, handleSelectedSeatAction } from 'redux/action/ManageBookingTicketAction';
import { useEffect } from 'react';


const BookingTicket = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoBookingRoomAction(id.id))
    }, [dispatch])

    const { seatList, selectedList } = useSelector(state => state.bookingTicketReducer);

    const { userLogin } = useSelector(state => state.userReducer);

    const handleSelectedSeat = (seat) => {
        const cloneSelectedList = [...selectedList];

        const foundIndex = cloneSelectedList.findIndex(item => item.maGhe === seat.maGhe);

        if(foundIndex !== -1){
            dispatch(handleDeletedSeatAction(foundIndex))

        } else{
            dispatch(handleSelectedSeatAction(seat))
        };
    }

    return (
        <Fragment>
            <div className="grid-cols-5 gap-10 grid">
                <div className="col-span-1  text-center">
                    <button className="normal text-base px-1 py-1 rounded-md">
                        <i className="fas fa-couch text-txtThi"></i>
                    </button>
                    <p className="text-txtSec my-2">Normal</p>
                </div>
                <div className="col-span-1  text-center">
                    <button className="vip text-base px-1 py-1 rounded-md">
                        <i className="fas fa-couch text-txtThi"></i>
                    </button>
                    <p className="text-txtSec my-2">Vip</p>
                </div>
                <div className="col-span-1  text-center">
                    <button className="selecting text-base px-1 py-1 rounded-md">
                        <i className="fas fa-couch text-txtThi"></i>
                    </button>
                    <p className="text-txtSec my-2">Selecting</p>
                </div>
                <div className="col-span-1  text-center">
                    <button className="yourBooked text-base px-1 py-1 rounded-md">
                        <i className="fas fa-couch text-txtThi"></i>
                    </button>
                    <p className="text-txtSec my-2">Your booked</p>
                </div>
                <div className="col-span-1  text-center">
                    <button className="booked text-base px-1 py-1 rounded-md">
                        <i className="fas fa-couch text-txtThi"></i>
                    </button>
                    <p className="text-txtSec my-2">Booked</p>
                </div>

            </div>
            <div className="my-8">
                <img src={screen} alt="Screen" className="w-full" />
                <div className="grid grid-cols-10 mt-16 gap-4">
                    {seatList.map(seat => {
                        let normal = (!seat.daDat && seat.loaiGhe !== "Vip") ? "normal" : "";

                        let booked = seat.daDat ? "booked" : "";

                        let vip = seat.loaiGhe === "Vip" ? "vip" : "";

                        let indexSelecting = selectedList.findIndex(item => item.maGhe === seat.maGhe);

                        let selecting = (indexSelecting !== -1) ? "selecting" : "";

                        let yourBooked = ""

                        if(userLogin.taiKhoan === seat.taiKhoanNguoiDat){
                            yourBooked = "yourBooked"
                        }

                        return (
                            <div
                                key={seat.sst}
                                className="relative col-span-1 bg-gray-100 p-8 rounded bg-p"
                                onClick={() => {
                                    if(!seat.daDat){
                                        handleSelectedSeat(seat)
                                    }
                                }}
                            >
                                {seat.daDat ?
                                    (<p
                                        className="text-base text-txtSec font-medium"
                                        style={{
                                            position: "absolute",
                                            top: "10%",
                                            left: "10%",
                                        }}
                                    >
                                        X
                                    </p>) :
                                    (<p
                                        className="text-sm text-btnPri"
                                        style={{
                                            position: "absolute",
                                            top: "10%",
                                            left: "10%",
                                        }}
                                    >
                                        {seat.stt}
                                    </p>)
                                }
                                <button
                                    className={`text-txtThi text-base  ${yourBooked}  ${selecting} ${booked} ${vip} ${normal} px-1 py-1 rounded-md`}
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-15%, -15%)",
                                    }}
                                >
                                    <i
                                        className="fas fa-couch"></i>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default BookingTicket
