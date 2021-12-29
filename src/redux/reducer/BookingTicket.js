import {
  SET_CLEAR_SEAT_LIST,
  SET_DELETED_SEAT,
  SET_INFO_BOOKING_ROOM,
  SET_SELECTED_SEAT,
} from "redux/type/ManageBookingTiketType";

const initialState = {
  seatList: [],
  infoMovie: [],
  selectedList: [],
};

const bookingTicketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INFO_BOOKING_ROOM:
      state.seatList = payload.danhSachGhe;
      state.infoMovie = payload.thongTinPhim;
      break;
    case SET_SELECTED_SEAT:
      state.selectedList.push(payload);
      break;

    case SET_DELETED_SEAT:
      state.selectedList.splice(payload, 1);
      break;

    case SET_CLEAR_SEAT_LIST:
      state.selectedList = [];
      break;

    default:
      break;
  }
  return { ...state };
};

export default bookingTicketReducer;
