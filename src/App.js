import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import AboutUs from "./screen/AboutUs";
import Homescreen from "./screen/Homescreen";
import NotFound from "./screen/NotFound"
import ContactUs from './screen/ContactUs'
import MoviesPage from "./screen/Movies";
import SingleMovie from "./screen/SingleMovie";
import WatchPage from "./screen/WatchPage";
import Login from "./screen/Login";
import Register from "./screen/Register";
import Profile from "./screen/dashboard/Profile";
import PremiumScreen from "./screen/PremiumScreen";
import Aos from "aos";
import Password from "./screen/dashboard/Password";
import FavouriteMovie from "./screen/dashboard/FavouriteMovie";
import MovieList from "./screen/dashboard/admin/MovieList";
import Dashboard from "./screen/dashboard/admin/Dashboard";
import Categories from "./screen/dashboard/admin/Categories";
import Users from "./screen/dashboard/admin/Users";
import AddMovie from "./screen/dashboard/admin/AddMovies";
import ScrollOnTop from "./ScrollOnTop";
import DrawerContext from "./context/DrawerContext";
import ToastContainer from "./components/Notifications/toastContainer";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "./Redux/Actions/categoryAction";
import { moviesListAction } from "./Redux/Actions/MovieAction";
import { getFavouriteMoviesAction } from "./Redux/Actions/userAction";
import EditMovies from "./screen/dashboard/admin/EditMovies";

function App() {
  Aos.init();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin)

  useEffect(()=>{
    dispatch(getCategoryAction());
    dispatch(moviesListAction({}));
    if(userInfo){
      dispatch(getFavouriteMoviesAction())
    }
  },[dispatch, userInfo])
  return (
    <>
    <ToastContainer/>
    <DrawerContext>
      <ScrollOnTop>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:search" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Password />} />
          <Route path="/favourite" element={<FavouriteMovie />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/edit/:id" element={<EditMovies />} />
          <Route path="/premium" element={<PremiumScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollOnTop>
    </DrawerContext>

    </>
    


  );
}

export default App;


// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

