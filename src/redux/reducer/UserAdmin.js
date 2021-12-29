import { SET_INFO_USER, SET_USER_LIST } from '../type/ManageUserAdminType';
const initialState = {
    userList : [],
    infoUserEdit : {},
};

const userAdminReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SET_USER_LIST:
            state.userList = payload;
            break;

        case SET_INFO_USER:
            state.infoUserEdit = {};
            state.infoUserEdit = payload;
            break;

        default:
            break;
    }
    return {...state};
};

export default userAdminReducer;