import React from 'react'
import { useState } from 'react';
import './styles.css';
import BookingTicket from 'Component/BookingTicket';
import CheckoutSummary from 'Component/CheckoutSummary';
import HistoryBooking from 'Component/HistoryBooking';

const Checkout = (props) => {
    let { id } = props.match.params;

    const [booking, setBooking] = useState(true);

    const book = booking ? "text-active text-3xl" : "text-2xl";
    const history = !booking ? "text-active text-3xl" : "text-2xl";

    return (
        <div className="relative container w-4/5 py-20 px-0" style={{ margin: "0 auto" }}>
            <div className="pt-8 py-14 text-center">
                <a
                    className={`font-semibold mx-6 headingActive ${book}`}
                    onClick={() => setBooking(true)}
                >
                    Booking ticket
                </a>
                <a
                    className={`font-semibold mx-6 headingActive inline-block ${history}`}
                    onClick={() => setBooking(false)}
                >
                    History
                </a>
            </div>
            {booking ?
            <div className="grid grid-cols-3 gap-20 mt-4">
                <div className="col-span-2">
                    <BookingTicket id={id}/>
                </div>
                <div className="col-span-1 px-5">
                    <CheckoutSummary id={id}/>
                </div>
            </div> :
            <HistoryBooking/>}
        </div>
    )
}

export default Checkout
//
