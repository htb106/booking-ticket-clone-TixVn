import { LOGIN, REGISTER, SET_INFO_PROFILE } from "redux/type/MangeUserType";
import { manageUserService } from "service/MangeUserService";
import { notifiError } from "util/toastify/toastify";

export const loginAction = (data, callback) => (
    async dispatch => {
        try{
            const resulte = await manageUserService.login(data);

            dispatch({
                type: LOGIN,
                payload: resulte.data.content,
            });

            if(callback){
                callback()
            }
        }
        catch(err){
            notifiError("User account or password incorrect!");
            console.log(err);
        }
    }
);

export const registerAction = (data, callback) => (
    async dispatch => {
        try{
            const resulte = await manageUserService.register(data);
            dispatch({
                type: REGISTER,
                payload: resulte.data.content,
            })
            if(callback){
                callback()
            }
        }
        catch(err){
            const errObject = {...err}
            const errMess = errObject.response.data.content
            notifiError(errMess)
            
        }
    }
)

export const getInfoProfileAction = () => (
    async (dispatch) => {
        try{
            const resulte = await manageUserService.getInfoProfile();
            dispatch({
                type: SET_INFO_PROFILE,
                payload: resulte.data.content,
            })
        } catch(err){
            console.log(err)
        }
    }
)

export const editUserProfileAction = (data, callBack) => (
    async (dispatch) => {
        try{
            const resulte = await manageUserService.editUserProfile(data);

            console.log(resulte.data)

            if(callBack){
                callBack();
            }
        }
        catch(err){
            console.log(err)
        }
    }
);