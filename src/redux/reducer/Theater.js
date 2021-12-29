const { SET_THEATER_SYSTEM, SET_THEATER_GRUOP, SET_THEATER_INFO } = require("redux/type/ManageTheaterType");

const initialState = {
    theaterSystem: [],
    theaterGroup: [],
    theaterInfo: [],
};

const theaterReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SET_THEATER_SYSTEM:
        state.theaterSystem = payload;
        break;

        case SET_THEATER_GRUOP:
        state.theaterGroup = [];
        state.theaterGroup = payload;
        break;

        case SET_THEATER_INFO:
        state.theaterInfo = [];
        state.theaterInfo = payload;
        break

        default:
        break;
    }
    return {...state};
};

export default theaterReducer;