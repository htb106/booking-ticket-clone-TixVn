const { SET_THEATER_SYSTEM, SET_THEATER_GRUOP, SET_THEATER_INFO } = require("redux/type/ManageTheaterType");
const { manageTheaterService } = require("service/MangeTheaterService");

export const getTheaterSystemAction = () => (
    async dispatch => {
        try{
            const result = await manageTheaterService.getTheaterSystem();

            dispatch({
                type: SET_THEATER_SYSTEM,
                payload: result.data.content,
            })
        }
        catch(err){
            console.log(err)
        }
    }
);

export const getTheaterGroupAction = theaterSystemCode => (
    async dispatch => {
        try{
            const result = await manageTheaterService.getTheaterGroup(theaterSystemCode);

            dispatch({
                type: SET_THEATER_GRUOP,
                payload: result.data.content,
            })
        }
        catch(err){
            console.log(err)
        }
    }
);

export const getTheaterInfoAction = theaterSystemCode => (
    async dispatch => {
        try{
            const result = await manageTheaterService.getTheaterInfo(theaterSystemCode);
            dispatch({
                type: SET_THEATER_INFO,
                payload: result.data.content,
            })
        }
        catch(err){
            console.log(err)
        }
    }
);