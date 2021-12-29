import { SET_USER_LIST, SET_INFO_USER } from "redux/type/ManageUserAdminType";
import { manageUserAdminService } from "service/ManageUserAdminService"
import { notifiError, notifiSuccess } from "util/toastify/toastify";

export const getUserListAction = () => (
    async (dispatch) => {
        try{
            const resulte = await manageUserAdminService.getUserList();
            dispatch({
                type: SET_USER_LIST,
                payload: resulte.data.content
            })
        }
        catch(err){
            console.log(err)
        }
    } 
);

export const addUserAction = (user, callBack) => (
    async (dispatch) => {
        try{
            await manageUserAdminService.addUser(user);
            notifiSuccess("Add user successfully")

            if(callBack){
                callBack()
            }
        }
        catch(err){
            const errObject = {...err}
            const errMess = errObject.response.data.content
            notifiError(errMess)
        }
    } 
);

export const deleteUserAction = (account) => (
    async (dispatch) => {
        try{
            await manageUserAdminService.deleteUser(account);
            dispatch(getUserListAction());
            notifiSuccess("Deleted successfully")
        }
        catch(err){
            const errObject = {...err}
            const errMess = errObject.response.data.content
            notifiError(errMess)
        }
    } 
);

export const editUserAction = (user, callBack) => (
    async (dispatch) => {
        try{
            await manageUserAdminService.editUser(user);
            if(callBack){
                callBack()
            }
            notifiSuccess("Edit successfully")
        }
        catch(err){
            const errObject = {...err}
            const errMess = errObject.response.data.content
            notifiError(errMess)
        }
    } 
);

export const getInfoUserAction = (account) => (
    async (dispatch) => {
        try{
            const resulte = await manageUserAdminService.getInfoUser(account);
            dispatch({
                type: SET_INFO_USER,
                payload: resulte.data.content
            })
        }
        catch(err){
            console.log(err)
        }
    } 
);