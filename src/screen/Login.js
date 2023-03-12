import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../components/UsedInput'
import Layout from '../layout/Layout'
import { FiLogIn } from 'react-icons/fi'
import GoogleButton from 'react-google-button'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { LoginValidation } from "../components/Validation/UserValidation"
import { yupResolver } from '@hookform/resolvers/yup'
import { InlineError } from '../components/Notifications/Error'
import { loginAction } from '../Redux/Actions/userAction'
import  toast  from 'react-hot-toast'
import HalfLayout from '../layout/HalfLayout'
import { SignInWithGoogle } from '../firebase/config'
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isError, userInfo, isSuccess } = useSelector((state) => state.userLogin);

    // create a function to handle Sign in with Google and get the user data from local storage
    const handleGoogleSignIn = () => {
        SignInWithGoogle()
    }
    
    let googleInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(googleInfo)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginValidation)
    })

    //on Submit
    const onSubmit = (data) => {
        dispatch(loginAction(data))
    }

    useEffect(() => {
        

        if (userInfo?.isAdmin || googleInfo?.isAdmin) {
            navigate("/dashboard");
        }
        else if (userInfo || googleInfo) {
            navigate("/profile");
        }
        if (isSuccess) {
            toast.success(`Welcome Back ${userInfo.name}`
            )
        }
        if (isError) {
            toast.error(isError)
            dispatch({ type: "USER_LOGIN_RESET" })

        }
    }, [isSuccess, isError, userInfo, navigate, dispatch, googleInfo])


    return (
        <HalfLayout>
            <div className='container mx-auto px-2 my-24 flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full 2xl:w-2/5 gap-8 p-8 sm:p-14 md:w-3/5 flex flex-col justify-center items-center bg-dry rounded-lg border border-border '>
                    <img
                        src='../../images/lloogo.png'
                        alt='logo'
                        className='w-full h-12 mb-8 object-contain'
                    />
                    <div className='w-full'>
                        <Input
                            label="Email"
                            placeholder="plix@gmail.com"
                            type="email"
                            name="email"
                            register={register("email")}
                            bg={true}
                        />
                        {
                            errors.email && <InlineError
                                text={errors.email.message} />

                        }
                    </div>
                    <div className='w-full'>
                        <Input
                            label="Password"
                            placeholder="**********"
                            type='password'
                            name="password"
                            register={register("password")}
                            bg={true}
                        />
                        {
                            errors.password && <InlineError
                                text={errors.password.message} />

                        }
                    </div>

                    <button
                        type='submit'
                        disabled={isLoading}
                        className='bg-subMain transitions hover:bg-main flex flex-row justify-center items-center gap-4 text-white p-4 rounded-lg w-full'>

                        {
                            isLoading ? "Loading..." : (
                                <>
                                    <FiLogIn />
                                    Sign In
                                </>
                            )
                        }
                    </button>
                    <GoogleButton
                        onClick={handleGoogleSignIn}

                    />
                    <p className='text-center text-border'>
                        Don't have an account?{" "}
                        <Link to="/register" className='text-dryGray font-semibold ml-2'>
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </HalfLayout>
    )
}

export default Login