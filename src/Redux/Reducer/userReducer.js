import { Switch } from '@headlessui/react';
import { Action } from '@remix-run/router';
import { act } from 'react-dom/test-utils';
import * as userConstants from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_LOGIN_REQUEST:
            return { isLoading: true }
        case userConstants.USER_LOGIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true }
        case userConstants.USER_LOGIN_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_LOGIN_RESET:
            return {};
        case userConstants.USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_REGISTER_REQUEST:
            return { isLoading: true }
        case userConstants.USER_REGISTER_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true }
        case userConstants.USER_REGISTER_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_REGISTER_RESET:
            return {};
        default:
            return state
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_UPDATE_PROFILE_REQUEST:
            return { isLoading: true }
        case userConstants.USER_UPDATE_PROFILE_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true }
        case userConstants.USER_UPDATE_PROFILE_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state

    }
}

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_DELETE_REQUEST:
            return { isLoading: true }
        case userConstants.USER_DELETE_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case userConstants.USER_DELETE_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_DELETE_RESET:
            return {};
        default:
            return state
    }
}

export const userChangePasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_CHANGE_PASSWORD_REQUEST:
            return { isLoading: true }
        case userConstants.USER_CHANGE_PASSWORD_SUCCESS:
            return { isLoading: false, isSuccess: true, }
        case userConstants.USER_CHANGE_PASSWORD_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_CHANGE_PASSWORD_RESET:
            return {};
        default:
            return state
    }
}

export const userGetFavouriteMoviesReducer = (state = { likedMovies: [] }, action) => {
    switch (action.type) {
        case userConstants.USER_GET_FAVOURITE_MOVIE_REQUEST:
            return { isLoading: true }
        case userConstants.USER_GET_FAVOURITE_MOVIE_SUCCESS:
            return { isLoading: false, likedMovies: action.payload }
        case userConstants.USER_GET_FAVOURITE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_GET_FAVOURITE_MOVIE_RESET:
            return {};
        default:
            return state
    }
}

export const userAddFavouriteMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_ADD_FAVOURITE_MOVIE_REQUEST:
            return { isLoading: true }
        case userConstants.USER_ADD_FAVOURITE_MOVIE_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case userConstants.USER_ADD_FAVOURITE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_ADD_FAVOURITE_MOVIE_RESET:
            return {};
        default:
            return state
    }
}

export const userRemoveFavouriteMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_REMOVE_FAVOURITE_MOVIE_REQUEST:
            return { isLoading: true }
        case userConstants.USER_REMOVE_FAVOURITE_MOVIE_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case userConstants.USER_REMOVE_FAVOURITE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_REMOVE_FAVOURITE_MOVIE_RESET:
            return {};
        default:
            return state
    }
}

export const userDeleteFavouriteMoviesReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_DELETE_FAVOURITE_MOVIES_REQUEST:
            return { isLoading: true }
        case userConstants.USER_DELETE_FAVOURITE_MOVIES_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case userConstants.USER_DELETE_FAVOURITE_MOVIES_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_DELETE_FAVOURITE_MOVIES_RESET:
            return {};
        default:
            return state
    }
}

export const adminGetAllUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case userConstants.GET_ALL_USERS_REQUEST:
            return { isLoading: true }
        case userConstants.GET_ALL_USERS_SUCCESS:
            return { isLoading: false, users: action.payload }
        case userConstants.GET_ALL_USERS_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.GET_ALL_USERS_RESET:
            return { users: [] };
        default:
            return state;
    }
}

export const adminDeleteUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case userConstants.ADMIN_DELETE_USER_REQUEST:
            return { isLoading: true }
        case userConstants.ADMIN_DELETE_USER_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case userConstants.ADMIN_DELETE_USER_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.ADMIN_DELETE_USER_RESET:
            return {};
        default:
            return state;
    }
}

export const userLikeMovieReducer = (state = {}, action) => {
    switch(action.type) {
        case userConstants.USER_LIKE_MOVIE_REQUEST:
            return { isLoading: true }
        case userConstants.USER_LIKE_MOVIE_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case userConstants.USER_LIKE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_LIKE_MOVIE_RESET:
            return {};
        default:
            return state;
    }
}




