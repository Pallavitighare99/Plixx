import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../components/UsedInput'
import Layout from '../layout/Layout'
import { FiLogIn } from 'react-icons/fi'
import GoogleButton from 'react-google-button'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginAction, registerAction } from '../Redux/Actions/userAction'
import { toast } from 'react-hot-toast'
import { LoginValidation, RegisterValidation } from '../components/Validation/UserValidation'
import { InlineError } from '../components/Notifications/Error'
import { useForm } from 'react-hook-form'
import HalfLayout from '../layout/HalfLayout'
import { SignInWithGoogle } from '../firebase/config'

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isError, userInfo, isSuccess } = useSelector((state) => state.userRegister);

    //validate user
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
        resolver: yupResolver(RegisterValidation)
    })

    //on Submit
    const onSubmit = (data) => {
        dispatch(registerAction(data))
    }

    useEffect(() => {
        if (userInfo?.isAdmin || googleInfo?.isAdmin) {
            navigate("/dashboard");
        }
        else if (userInfo || googleInfo) {
            navigate("/profile");
        }
        if (isSuccess) {
            toast.success(`Welcome ${userInfo.name}`);
            dispatch({ type: "USER_REGISTER_RESET" })
        }
        if (isError) {
            toast.error(isError)
            dispatch({ type: "USER_REGISTER_RESET" })

        }
    }, [isSuccess, isError, userInfo, navigate, dispatch]);
    return (
        <HalfLayout>
            <div className='container mx-auto px-2 my-24 flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full 2xl:w-2/5 gap-6 p-8 sm:p-14 md:w-3/5 flex flex-col justify-center items-center bg-dry rounded-lg border border-border '>
                    <img
                        src='../../images/lloogo.png'
                        alt='logo'
                        className='w-full h-12 mb-5 object-contain'
                    />
                    <div className='w-full'>
                        <Input
                            label="FullName"
                            placeholder="Enter your Full Name"
                            type="name"
                            name="name"
                            register={register("name")}
                            bg={true}
                        />
                        {
                            errors.name && <InlineError
                                text={errors.name.message} />

                        }
                    </div>
                    <div className='w-full'>
                        <Input
                            label="Email"
                            placeholder="plixx@gmail.com"
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
                            type="password"
                            name="password"
                            register={register("password")}
                            bg={true}
                        />
                        {
                            errors.password && <InlineError
                                text={errors.password.message} />

                        }
                    </div>
                    <button type= "submit" disabled={isLoading}
                        className='bg-subMain transitions hover:bg-main flex flex-row justify-center items-center gap-4 text-white p-4 rounded-lg w-full'>
                        {
                            isLoading ? "Loading..." : (
                                <>
                                    <FiLogIn />
                                    Sign Up
                                </>
                            )
                        }
                    </button>
                    <button
                        onClick={handleGoogleSignIn}
                        className='bg-white flex flex-row justify-center items-center gap-4 text-black p-4 rounded-lg w-full'>
                        <img
                            src='/images/google.png'
                            alt='google'
                            className='w-6 h-6 object-contain'
                        />
                        Sign In with Google
                    </button>
                    <p className='text-center text-border'>
                        Already have an account?{" "}
                        <Link to="/login" className='text-dryGray font-semibold ml-2'>
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </HalfLayout>
    )
}

export default Register