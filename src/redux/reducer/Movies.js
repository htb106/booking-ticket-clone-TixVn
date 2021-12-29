const { SET_MOVIE, SET_MOVIE_DETAIL, SET_INFO_SHOWTIMES } = require("redux/type/ManageMovieType");

const initialState = {
    movieList: [],
    movieDetail: {},
    infoShowTimes: {},
};

const movieListReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SET_MOVIE:
          state.movieList = payload;
          break
        
        case SET_MOVIE_DETAIL:
          state.movieDetail = {};
          state.movieDetail = payload;
          break

        case SET_INFO_SHOWTIMES:
            state.infoShowTimes = {};
            state.infoShowTimes = payload;
            break

        default:
            break
    }
    return {...state};
};

export default movieListReducer;