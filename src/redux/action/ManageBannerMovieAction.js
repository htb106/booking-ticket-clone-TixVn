import { SET_BANNER } from "redux/type/ManageMovieType";
import { manageMovieService } from "service/MangeMovieService"

export const getBanerAction = () => (
    async (dispatch) => {
        try{
            const result = await manageMovieService.getBanner();
            dispatch({
                type: SET_BANNER,
                action: result.data.content,
            })
        }
        catch(err){
            console.log(err)
        }
    }
)