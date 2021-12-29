import { SET_CLEAR_SEAT_LIST, SET_DELETED_SEAT, SET_INFO_BOOKING_ROOM, SET_SELECTED_SEAT } from "redux/type/ManageBookingTiketType";
import { manageBookingTicketService } from "service/ManageBookingTicketService"
import { notifiSuccess } from "util/toastify/toastify";

export const getInfoBookingRoomAction = (id) => (
    async (dispatch) => {
        try{
            const resulte = await manageBookingTicketService.getInfoBookingRoom(id);
            dispatch({
                type: SET_INFO_BOOKING_ROOM,
                payload: resulte.data.content,
            })
        }
        catch(err){
            console.log(err)
        }
    }
)

export const selectedSeatAction = (data) => (
    async (dispatch) => {
        try{
            const resulte = await manageBookingTicketService.selectedSeat(data);
            console.log(resulte.data.content)
            notifiSuccess(resulte.data.content);
            
            dispatch({
                type: SET_CLEAR_SEAT_LIST,
                payload: [],
            })
        }
        catch(err){
            console.log(err)
        }
    }
)

export const handleSelectedSeatAction = (seat) => (
    dispatch => dispatch({
            type: SET_SELECTED_SEAT,
            payload: seat,
        })
);

export const handleDeletedSeatAction = (i) => (
    dispatch => dispatch({
        type: SET_DELETED_SEAT,
        payload: i,
    })
);
