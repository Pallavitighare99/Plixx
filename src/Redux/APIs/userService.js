import { useNavigate } from "react-router-dom";
import Axios from "./Axios";

//register new user API call
export const registerService = async (user) => {
    const {data} = await Axios.post("/users/register",user);
    if(data){
        localStorage.setItem("userInfo",JSON.stringify(data));
    }
    return data;
};


export const logoutService= ()=>{
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    return null
}
//login user API call
export const loginService = async (user) => {
    const {data} = await Axios.post("/users/login",user);
    if(data){
        localStorage.setItem("userInfo",JSON.stringify(data));
    }
    return data;
}

//update Profile
export const updateProfileService = async (user, token) => {
    const {data} = await Axios.put("/users/profile",user, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if(data){
        localStorage.setItem("userInfo",JSON.stringify(data));
    }
    return data;
}

//delete Profile
export const deleteUserService = async ( token) => {
    const {data} = await Axios.delete(`/users/delete`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if(data){
        localStorage.removeItem("userInfo");
    }
    return data;
}

//change password
export const changePasswordService = async (passwords, token) => {
    const {data} = await Axios.put("/users/changePassword",passwords, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

//get all favourite movies
export const getFavouriteMoviesService = async (token) => {
    const {data} = await Axios.get("/users/likedMovies", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

//delete all favourite movies
export const deleteFavouriteMoviesService = async (token) => {
    const {data} = await Axios.delete("/users/likedMovies", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

//add favourite movie
export const likeMovieService = async (movieId, token) => {
    const {data} = await Axios.post(`/users/likedMovies`,movieId, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

//delete favourite movie
export const deleteFavouriteMovieService = async (movieID, token) => {
    const {data} = await Axios.delete(`/users/removeFav`, movieID, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

//like movie
// export const likeMovieService = async (movieID, token) => {
//     const {data} = await Axios.post(`/users/likedMovies/${movieID}`, "", {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     console.log(data)
//     return data;
// }

//admin get all user
export const getAllUserService = async (token) => {
    const {data} = await Axios.get("/users/users", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(data)
    return data;
}

//admin delete user
export const deleteUserAdminService = async (id, token) => {
    const { data } = await Axios.delete(`/users/users/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}







