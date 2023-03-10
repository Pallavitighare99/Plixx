import { logoutAction } from "./Actions/userAction";

export const ErrorAction = (error, dispatch, action) => {
    const message =
     error.response && error.response.data.message
      ? error.response.data.message : error.message;
    if(message === "Not authorized, token failed"){
    //we are going to logout if token fail
        dispatch(logoutAction());
    }
    return dispatch({type:action, payload:message})
}

export const tokenProtection = (getState) => {
    const {
        userLogin: {userInfo}
    } = getState()
    if(!userInfo?.token){
        throw new Error("Not authorized, token failed")
    }
    else {
        return userInfo?.token
    }
}