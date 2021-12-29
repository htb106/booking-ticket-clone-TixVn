import moment from 'moment';
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getInfoProfileAction } from 'redux/action/ManageUserAction';

const HistoryBooking = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoProfileAction())
    }, [dispatch])

    const { userInfo } = useSelector(state => state.userReducer);
    return (
        <div className="w-4/5" style={{ margin: "0 auto" }}>
            <div className="grid grid-cols-2 gap-10">
                {userInfo.thongTinDatVe?.map((item) => (
                    <div key={item.maVe} className="grid grid-cols-2">
                        <img
                            src={item.hinhAnh}
                            alt="Image"
                            style={{ width: "200px", height: "300px" }}
                            className="rounded"
                        />
                        <div>
                            <h1 className="text-center text-2xl font-medium border-b border-txtSec pb-2">{item.tenPhim}</h1>
                            <p className="my-2 text-txtSec">Ticket code:  <span className="font-medium text-txtPri">
                                    {item.maVe}
                                </span>
                            </p>
                            <p className="my-2 text-txtSec">
                                Booking date:  <span className="text-txtPri font-medium">
                                    {moment(item.ngayDat).format("hh:mm - DD/MM/YY")}
                                </span>
                            </p>
                            <p className="my-2 text-txtSec">
                                Group theater:  <span className="text-txtPri font-medium">
                                    {item.danhSachGhe[0].maHeThongRap}
                                </span>
                            </p>
                            <p className="my-2 text-txtSec">
                                Name theater:  <span className="text-txtPri font-medium">
                                    {item.danhSachGhe[0].tenHeThongRap}
                                </span>
                            </p>
                            <p className="my-2 text-txtSec">
                                Number theater:  <span className="text-txtPri font-medium">
                                    {item.danhSachGhe[0].tenRap}
                                </span>
                            </p>
                            <p className="my-2 text-txtSec">
                                Seat:  <span className="text-txtPri font-medium">
                                    {item
                                        .danhSachGhe
                                        .map(seat => `${seat.tenGhe} `)
                                    }
                                    | Price: 1 x {item.giaVe}đ
                                </span>
                            </p>
                            <p className="my-2 text-txtSec">
                                Total:  <span className="text-txtPri font-medium">
                                    {+item.danhSachGhe.length * item.giaVe}đ
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HistoryBooking
