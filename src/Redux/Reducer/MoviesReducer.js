import * as moviesConstant from '../constants/MoviesConstant'

export const moviesListReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case moviesConstant.MOVIES_LIST_REQUEST:
            return { ...state, isLoading: true }
        case moviesConstant.MOVIES_LIST_SUCCESS:
            return { isLoading: false, movies: action.payload.movies, pages: action.payload.pages, page: action.payload.page, totalMovies: action.payload.totalMovies }
        case moviesConstant.MOVIES_LIST_FAIL:
            return { isLoading: false, isError: action.payload }
        case moviesConstant.MOVIES_LIST_RESET:
            return { movies: [] }
        default:
            return state
    }
}

export const moviesRandomReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case moviesConstant.MOVIES_RANDOM_REQUEST:
            return { ...state, isLoading: true }
        case moviesConstant.MOVIES_RANDOM_SUCCESS:
            return { isLoading: false, movies: action.payload }
        case moviesConstant.MOVIES_RANDOM_FAIL:
            return { isLoading: false, isError: action.payload }
        case moviesConstant.MOVIES_RANDOM_RESET:
            return { movies: [] }
        default:
            return state
    }
}

export const moviesTopRatedReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case moviesConstant.MOVIES_TOP_RATED_REQUEST:
            return { ...state, isLoading: true }
        case moviesConstant.MOVIES_TOP_RATED_SUCCESS:
            return { isLoading: false, movies: action.payload }
        case moviesConstant.MOVIES_TOP_RATED_FAIL:
            return { isLoading: false, isError: action.payload }
        case moviesConstant.MOVIES_TOP_RATED_RESET:
            return { movies: [] }
        default:
            return state
    }
}

export const movieDetailsReducer = (state = { movie: {} }, action) => {
    switch (action.type) {
        case moviesConstant.MOVIE_DETAILS_REQUEST:
            return { ...state, isLoading: true }
        case moviesConstant.MOVIE_DETAILS_SUCCESS:
            return { isLoading: false, movie: action.payload }
        case moviesConstant.MOVIE_DETAILS_FAIL:
            return { isLoading: false, isError: action.payload }
        case moviesConstant.MOVIE_DETAILS_RESET:
            return { movie: {} }
        default:
            return state
    }
}

export const movieReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case moviesConstant.MOVIE_REVIEW_REQUEST:
            return { ...state, isLoading: true }
        case moviesConstant.MOVIE_REVIEW_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case moviesConstant.MOVIE_REVIEW_FAIL:
            return { isLoading: false, isError: action.payload }
        case moviesConstant.MOVIE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}

export const movieDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case moviesConstant.MOVIE_DELETE_REQUEST:
            return { ...state, isLoading: true }
        case moviesConstant.MOVIE_DELETE_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case moviesConstant.MOVIE_DELETE_FAIL:
            return { isLoading: false, isError: action.payload }
        case moviesConstant.MOVIE_DELETE_RESET:
            return {}
        default:
            return state
    }
}

export const movieCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case moviesConstant.MOVIE_CREATE_REQUEST:
            return { ...state, isLoading: true }
        case moviesConstant.MOVIE_CREATE_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case moviesConstant.MOVIE_CREATE_FAIL:
            return { isLoading: false, isError: action.payload }
        case moviesConstant.MOVIE_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const movieUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case moviesConstant.MOVIE_UPDATE_REQUEST:
            return { ...state, isLoading: true }
        case moviesConstant.MOVIE_UPDATE_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case moviesConstant.MOVIE_UPDATE_FAIL:
            return { isLoading: false, isError: action.payload }
        case moviesConstant.MOVIE_UPDATE_RESET:
            return {}
        default:
            return state
    }
}

//casts
export const movieCastsReducer = (state = { casts: [] }, action) => {
    switch(action.type) {
        case moviesConstant.ADD_CASTS:
            return {casts: [...state.casts, action.payload] }
        case moviesConstant.EDIT_CASTS:
            const updatedCasts = state.casts.map((cast)=>
            cast.id === action.payload.id ? action.payload : cast
            );
            return { casts: updatedCasts }
        case moviesConstant.DELETE_CASTS:
            return { 
                ...state,
                casts: state.casts.filter((cast) => cast.id !== action.payload)
            }
        case moviesConstant.RESET_CASTS:
            return { casts: [] }
        default:
            return state
    }
}


