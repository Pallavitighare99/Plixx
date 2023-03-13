import React, { useEffect, useState } from "react";
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
  // const [popup, setPopup] = useState(false);

  // const handlePopup = () => {
  //   setPopup(!popup);
  // }

  // if(!userInfo){  
  //   setTimeout(() => {
  //     setPopup(true); 
  //     <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex flex-col justify-center items-center'>
  //     <div className='bg-white w-11/12 md:w-1/2 lg:w-1/3 h-96 rounded-lg shadow-lg flex flex-col justify-center items-center'>
  //         <div className='w-full h-1/2 flex flex-col justify-center items-center'>
  //             <h1 className='text-2xl font-bold text-center'>Login With Google</h1>
  //             <p className='text-sm text-center'>Login with your google account to access all the features of Plixx</p>
  //         </div>
  //         <div className='w-full h-1/2 flex flex-col justify-center items-center'>
  //             <button className='bg-red-500 w-1/2 h-12 rounded-lg text-white font-bold text-lg'>Login</button>
  //             <button onClick={handlePopup} className='text-red-500 w-1/2 h-12 rounded-lg text-lg'>Cancel</button>
  //         </div>
  //     </div>
  // </div>
  //   }, 1000);
  // }

  


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

