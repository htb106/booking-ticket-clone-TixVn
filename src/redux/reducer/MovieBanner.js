const { SET_BANNER } = require("redux/type/ManageMovieType");

const initialState = {
    arrBanner: [],
};

const movieBannerReducer = (state = initialState, {type, action}) => {
    switch(type){
        case SET_BANNER:
        state.arrBanner = action;
        break

        default:
        break
    }
    return {...state}
}

export default movieBannerReducer;