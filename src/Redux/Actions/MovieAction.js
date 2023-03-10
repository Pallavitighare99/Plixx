import * as MoviesConstant from '../constants/MoviesConstant'
import { ErrorAction, tokenProtection } from '../Protection';
import * as MoviesServices from '../APIs/MoviesServices'



export const moviesListAction = ({category="", time="", language="", rate="", year="", search="", pageNumber=""}) => async(dispatch) =>{
    try {
        dispatch({ type: MoviesConstant.MOVIES_LIST_REQUEST });
        const response = await MoviesServices.getAllMoviesService(category, time, language, rate, year, search, pageNumber)
        dispatch({ type: MoviesConstant.MOVIES_LIST_SUCCESS, payload: response });
    } catch (error) {
        ErrorAction(error, dispatch, MoviesConstant.MOVIES_LIST_FAIL)
    }
}

export const moviesRandomAction = () => async(dispatch) =>{
    try {
        dispatch({ type: MoviesConstant.MOVIES_RANDOM_REQUEST });
        const response = await MoviesServices.getRandomMoviesService()
        dispatch({ type: MoviesConstant.MOVIES_RANDOM_SUCCESS, payload: response });
    } catch (error) {
        ErrorAction(error, dispatch, MoviesConstant.MOVIES_RANDOM_FAIL)
    }
}

export const moviesTopRatedAction = () => async(dispatch) =>{
    try {
        dispatch({ type: MoviesConstant.MOVIES_TOP_RATED_REQUEST });
        const response = await MoviesServices.getTopRatedMoviesService()
        dispatch({ type: MoviesConstant.MOVIES_TOP_RATED_SUCCESS, payload: response });
    } catch (error) {
        ErrorAction(error, dispatch, MoviesConstant.MOVIES_TOP_RATED_FAIL)
    }
}

export const movieDetailsAction = (id) => async(dispatch) =>{
    try {
        dispatch({ type: MoviesConstant.MOVIE_DETAILS_REQUEST });
        const response = await MoviesServices.getMovieByIdService(id)
        dispatch({ type: MoviesConstant.MOVIE_DETAILS_SUCCESS, payload: response });
    } catch (error) {
        ErrorAction(error, dispatch, MoviesConstant.MOVIE_DETAILS_FAIL)
    }
}

export const movieReviewAction = ({id, review}) => async(dispatch, getState) =>{
    try {
        dispatch({ type: MoviesConstant.MOVIE_REVIEW_REQUEST });
        const response = await MoviesServices.reviewMovieService(tokenProtection(getState), id, review)
        dispatch({ type: MoviesConstant.MOVIE_REVIEW_SUCCESS, payload: response });
        dispatch({type: MoviesConstant.MOVIE_REVIEW_RESET})
        dispatch(movieDetailsAction(id))
    } catch (error) {
        ErrorAction(error, dispatch, MoviesConstant.MOVIE_REVIEW_FAIL)
    }
}

export const movieDeleteAction = (id) => async(dispatch, getState) =>{
    try {
        dispatch({ type: MoviesConstant.MOVIE_DELETE_REQUEST });
        const response = await MoviesServices.deleteMovieService(tokenProtection(getState), id)
        dispatch({ type: MoviesConstant.MOVIE_DELETE_SUCCESS, payload: response });
        dispatch({type: MoviesConstant.MOVIE_DELETE_RESET})
        dispatch(moviesListAction({}))
    } catch (error) {
        ErrorAction(error, dispatch, MoviesConstant.MOVIE_DELETE_FAIL)
    }
}

export const movieCreateAction = (movie) => async(dispatch, getState) =>{
    try {
        dispatch({ type: MoviesConstant.MOVIE_CREATE_REQUEST });
        const response = await MoviesServices.createMovieService(tokenProtection(getState), movie)
        dispatch({ type: MoviesConstant.MOVIE_CREATE_SUCCESS, payload: response });
        dispatch({type: MoviesConstant.MOVIE_CREATE_RESET})
        dispatch(deleteAllCastAction())
    } catch (error) {
        ErrorAction(error, dispatch, MoviesConstant.MOVIE_CREATE_FAIL)
    }
}

export const movieUpdateAction = (id,movie) => async(dispatch, getState) =>{
    try {
        dispatch({ type: MoviesConstant.MOVIE_UPDATE_REQUEST });
        const response = await MoviesServices.updateMovieService(tokenProtection(getState),id, movie)
        dispatch({ type: MoviesConstant.MOVIE_UPDATE_SUCCESS, payload: response });
        dispatch({type: MoviesConstant.MOVIE_UPDATE_RESET})
        dispatch(movieDetailsAction(id))
        dispatch(deleteAllCastAction())
    } catch (error) {
        ErrorAction(error, dispatch, MoviesConstant.MOVIE_UPDATE_FAIL)
    }
}

//CAST

export const addCastAction = (cast) => async (dispatch, getState) =>{
    dispatch({ type: MoviesConstant.ADD_CASTS, payload: cast });
    localStorage.setItem('casts', JSON.stringify(getState().casts.casts));
}

export const removeCastAction = (id) => async (dispatch, getState) =>{
    dispatch({ type: MoviesConstant.DELETE_CASTS, payload: id });
    localStorage.setItem('casts', JSON.stringify(getState().casts.casts));
}

export const updateCastAction = (cast) => async (dispatch, getState) =>{
    dispatch({ type: MoviesConstant.EDIT_CASTS, payload:cast });
    localStorage.setItem('casts', JSON.stringify(getState().casts.casts));
}

export const deleteAllCastAction = () => async (dispatch) =>{
    dispatch({ type: MoviesConstant.RESET_CASTS });
    localStorage.removeItem('casts');
}

