import { TOKEN, USER_LOGIN } from "util/settings/config";

const { LOGIN, REGISTER, SET_INFO_PROFILE } = require("redux/type/MangeUserType")

let user = {};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
};

const initialState = {
    userLogin: user,
    userRegister: {},
    userInfo: {},
}
const userReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case LOGIN:
        localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
        localStorage.setItem(TOKEN, payload.accessToken);
        state.userLogin = payload;
        break;

        case REGISTER:
        state.userRegister = payload;
        break;

        case SET_INFO_PROFILE:
        state.userInfo = payload;
        break;

        default:
        break
    };
    return {...state};
}

export default userReducer;