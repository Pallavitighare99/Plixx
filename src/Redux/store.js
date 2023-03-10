import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryAddReducer, categoryDeleteReducer, categoryListReducer, categoryUpdateReducer } from "./Reducer/categoryReducer";
import { movieCastsReducer, movieCreateReducer, movieDeleteReducer, movieDetailsReducer, movieReviewReducer, moviesDeleteAllReducer, moviesListReducer, moviesRandomReducer, moviesTopRatedReducer, movieUpdateReducer } from "./Reducer/MoviesReducer";
import { adminDeleteUserReducer, adminGetAllUsersReducer, userAddFavouriteMovieReducer, userChangePasswordReducer, userDeleteFavouriteMoviesReducer, userDeleteReducer, userGetFavouriteMoviesReducer, userLikeMovieReducer, userLoginReducer, userRegisterReducer, userRemoveFavouriteMovieReducer, userUpdateProfileReducer } from "./Reducer/userReducer";

const rootReducer = combineReducers({
    // Add your reducers here
    userLogin: userLoginReducer,
    userRegister :userRegisterReducer,
    userProfileUpdate: userUpdateProfileReducer,
    userDelete: userDeleteReducer,
    userChangePassword: userChangePasswordReducer,
    userFavMovies: userGetFavouriteMoviesReducer,
    userDeleteAllFavs: userDeleteFavouriteMoviesReducer,
    userAddFav: userAddFavouriteMovieReducer,
    userRemoveFav: userRemoveFavouriteMovieReducer,

    adminGetAllUser: adminGetAllUsersReducer,
    adminDeleteUser: adminDeleteUserReducer,
    adminAddCategory: categoryAddReducer,
    adminDeleteCategory: categoryDeleteReducer,
    adminUpdateCategory: categoryUpdateReducer,
    
    getCategory: categoryListReducer,
    movieList: moviesListReducer,
    getRandomMovies: moviesRandomReducer,
    getMovieByID: movieDetailsReducer,
    getTopRatedMovie: moviesTopRatedReducer,
    createReview: movieReviewReducer,
    userLikeMovie: userLikeMovieReducer,
    deleteMovie: movieDeleteReducer,
    createMovie:movieCreateReducer,
    casts: movieCastsReducer,
    updateMovie: movieUpdateReducer
})

//get UserInfo from localStorage
const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

//initialState
const initialState= {
    userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
});