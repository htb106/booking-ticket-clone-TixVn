import {
  SET_INFO_SHOWTIMES,
  SET_MOVIE,
  SET_MOVIE_DETAIL,
} from "redux/type/ManageMovieType";
import { manageMovieService } from "service/MangeMovieService";
import { notifiError, notifiSuccess } from "util/toastify/toastify";

export const getMovieListAction = () => async (dispatch) => {
  try {
    const result = await manageMovieService.getMovieList();

    dispatch({
      type: SET_MOVIE,
      payload: result.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMovieDetailAction = (id) => async (dispatch) => {
  try {
    const result = await manageMovieService.getMovieDetail(id);

    dispatch({
      type: SET_MOVIE_DETAIL,
      payload: result.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addMovieAction = (formData, callBack) => async (dispatch) => {
  try {
    await manageMovieService.addMovie(formData);
    notifiSuccess("Add movie successfully !");

    if (callBack) {
      callBack();
    }
  } catch (err) {
    console.log(err);
    notifiError("Add movie failed");
  }
};

export const deleteMovieAction = (id) => async (dispatch) => {
  try {
    await manageMovieService.deleteMovie(id);

    notifiSuccess("Delete movie successfully");

    dispatch(getMovieListAction());
  } catch (err) {
    console.log(err);
    notifiError("Delete movie failed");
  }
};

export const editMovieAction = (formData, callBack) => async (dispatch) => {
  try {
    await manageMovieService.editMovie(formData);

    notifiSuccess("Edit movie successfully");
    if (callBack) {
      callBack();
    }
  } catch (err) {
    console.log(err);
    notifiError("Edit movie failed");
  }
};

export const getInfoShowTimesAction = (id) => async (dispatch) => {
  try {
    const result = await manageMovieService.getInfoShowTimes(id);
    dispatch({
      type: SET_INFO_SHOWTIMES,
      payload: result.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createShowTimeAction = (data) => async (dispatch) => {
  try {
    await manageMovieService.createShowTimes(data);
    notifiSuccess("Successly!");
    
  } catch (err) {
    console.log(err);
  }
};
