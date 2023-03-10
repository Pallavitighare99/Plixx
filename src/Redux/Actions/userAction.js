import * as userConstants from '../constants/userConstants'
import * as userServices from '../APIs/userService'
import * as categoryConstants from '../constants/categoryConstants'
import * as MoviesConstants from '../constants/MoviesConstant'
import { toast } from "react-hot-toast";
import { ErrorAction, tokenProtection } from '../Protection';


export const loginAction = (datas) => async (dispatch) => {

    try {
        dispatch({ type: userConstants.USER_LOGIN_REQUEST });
        const response = await userServices.loginService(datas);
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorAction(error, dispatch, userConstants.USER_LOGIN_FAIL)
    }
}

export const registerAction = (datas) => async (dispatch) => {
    try {
        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const response = await userServices.registerService(datas);
        dispatch({ type: userConstants.USER_REGISTER_SUCCESS, payload: response });
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response })
    } catch (error) {
        ErrorAction(error, dispatch, userConstants.USER_REGISTER_FAIL)
    }
};

export const logoutAction = () => (dispatch) => {
    userServices.logoutService();
    dispatch({ type: userConstants.USER_LOGOUT });
    dispatch({ type: userConstants.USER_LOGIN_RESET })
    dispatch({ type: userConstants.USER_REGISTER_RESET })
    dispatch({ type: userConstants.USER_UPDATE_PROFILE_RESET })
    dispatch({ type: userConstants.USER_DELETE_RESET })
    dispatch({ type: userConstants.USER_CHANGE_PASSWORD_RESET })
    dispatch({ type: userConstants.USER_GET_FAVOURITE_MOVIE_RESET })
    dispatch({ type: userConstants.USER_DELETE_FAVOURITE_MOVIES_RESET })
    dispatch({ type: userConstants.GET_ALL_USERS_RESET })
    dispatch({ type: userConstants.ADMIN_DELETE_USER_RESET })
    dispatch({ type: userConstants.USER_LIKE_MOVIE_RESET })
    dispatch({type: MoviesConstants.MOVIE_DETAILS_RESET})
    dispatch({type: MoviesConstants.MOVIE_REVIEW_RESET})
    dispatch({type: MoviesConstants.MOVIE_CREATE_RESET})
    dispatch({type: MoviesConstants.RESET_CASTS})
    dispatch({type: MoviesConstants.MOVIE_UPDATE_RESET})
    dispatch({type: categoryConstants.ADD_CATEGORY_RESET})
    dispatch({type: categoryConstants.UPDATE_CATEGORY_RESET})
    dispatch({type: categoryConstants.DELETE_CATEGORY_RESET})

    


}

export const updateProfileAction = (datas) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_UPDATE_PROFILE_REQUEST });
        const response = await userServices.updateProfileService(datas, tokenProtection(getState));
        dispatch({ type: userConstants.USER_UPDATE_PROFILE_SUCCESS, payload: response });
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
        toast.success("Profile Updated Successfully")
    } catch (error) {
        ErrorAction(error, dispatch, userConstants.USER_UPDATE_PROFILE_FAIL)
    }
}

export const deleteProfileAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_DELETE_REQUEST });
        await userServices.deleteUserService(tokenProtection(getState));
        dispatch({ type: userConstants.USER_DELETE_SUCCESS });
        toast.success("Profile Deleted Successfully")


    } catch (error) {
        ErrorAction(error, dispatch, userConstants.USER_DELETE_FAIL)

    }
}

export const changePasswordAction = (passwords) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_CHANGE_PASSWORD_REQUEST });
        await userServices.changePasswordService(passwords, tokenProtection(getState));
        dispatch({ type: userConstants.USER_CHANGE_PASSWORD_SUCCESS })
        toast.success("Password Changed Successfully")
    } catch (error) {
        ErrorAction(error, dispatch, userConstants.USER_CHANGE_PASSWORD_FAIL)
    }
}

export const getFavouriteMoviesAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_GET_FAVOURITE_MOVIE_REQUEST });
        const response = await userServices.getFavouriteMoviesService(tokenProtection(getState));
        dispatch({ type: userConstants.USER_GET_FAVOURITE_MOVIE_SUCCESS, payload: response })
    } catch (error) {
        ErrorAction(error, dispatch, userConstants.USER_GET_FAVOURITE_MOVIE_FAIL)
    }
}

export const deleteAllLikedMoviesAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_DELETE_FAVOURITE_MOVIES_REQUEST });
        await userServices.deleteFavouriteMoviesService(tokenProtection(getState));
        dispatch({ type: userConstants.USER_DELETE_FAVOURITE_MOVIES_SUCCESS })
        toast.success("Liked Movies Deleted Successfully")
    } catch (error) {
        ErrorAction(error, dispatch, userConstants.USER_DELETE_FAVOURITE_MOVIES_FAIL)
    }
}

export const getAllUserAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.GET_ALL_USERS_REQUEST });
        const response = await userServices.getAllUserService(tokenProtection(getState));
        dispatch({ type: userConstants.GET_ALL_USERS_SUCCESS, payload: response })
    } catch (error) {
        ErrorAction(error, dispatch, userConstants.GET_ALL_USERS_FAIL)
    }
}

export const deleteUserAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.ADMIN_DELETE_USER_REQUEST });
        await userServices.deleteUserAdminService(id, tokenProtection(getState));
        dispatch({ type: userConstants.ADMIN_DELETE_USER_SUCCESS });
        toast.success("User Deleted Successfully")
    } catch (error) {
        ErrorAction(error, dispatch, userConstants.ADMIN_DELETE_USER_FAIL)
    }
}

export const likeMovieAction = (movieId) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_LIKE_MOVIE_REQUEST });
        const response = await userServices.likeMovieService(movieId, tokenProtection(getState));
        dispatch({ type: userConstants.USER_LIKE_MOVIE_SUCCESS, payload: response })
        dispatch(getFavouriteMoviesAction());
    } catch (error) {
        console.log(error.toString())
        ErrorAction(error, dispatch, userConstants.USER_LIKE_MOVIE_FAIL)
    }
}