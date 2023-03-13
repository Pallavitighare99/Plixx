// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import Axios from "../Redux/APIs/Axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyBzMPN0JitsvN7EeHP7PXOktk0IlhBjut8",
  authDomain: "plixx-72d54.firebaseapp.com",
  projectId: "plixx-72d54",
  storageBucket: "plixx-72d54.appspot.com",
  messagingSenderId: "749368615439",
  appId: "1:749368615439:web:5c4fa72b219eaf7833397a"
})

// Initialize Firebase
const auth = getAuth();
export const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        Axios.post("/users/google", {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL
        })
        .then(async (res) => {
          localStorage.setItem("userInfo", JSON.stringify(res.data))
          toast.success("Login Success")
        //  navigate to home page using window.location
          window.location.href = "/"
        })
    })    
    .catch((error) => {
      console.log(error.stack)
        toast.error(error.message)
    })
}

