import React, { useEffect, useState } from 'react'
import Uploader from '../../components/Uploader'
import Sidebar from './Sidebar'
import { Input } from '../../components/UsedInput'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProfileUpdateValidation } from '../../components/Validation/UserValidation';
import { deleteProfileAction, logoutAction, updateProfileAction } from '../../Redux/Actions/userAction';
import { toast } from 'react-hot-toast';
import { InlineError } from '../../components/Notifications/Error';
import { ImagePreview } from '../../components/imagePreview';


function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.userLogin);
    const [imageUrl, setImageUrl] = useState(userInfo ? userInfo.image : " ")
    const { isLoading, isError, isSuccess } = useSelector((state) => state.userProfileUpdate);
    const { isLoading: deleteLoading, isError: delErr, } = useSelector((state) => state.userDelete);

    //validate user

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(ProfileUpdateValidation)
    })
    //on Submit
    const onSubmit = (data) => {
        dispatch(updateProfileAction({ ...data, image: imageUrl }))
    }

    const onDelete = () => {
        window.confirm("Are you sure you want to delete your account?") &&
        dispatch(deleteProfileAction())
        dispatch(logoutAction())
        navigate("/login")
    }

    useEffect(() => {
        if (userInfo) {
            setValue("name", userInfo.name)
            setValue("email", userInfo.email)
        }
        if (isSuccess) {
            dispatch({ type: "USER_PROFILE_UPDATE_RESET" })
        }
        if (isError || delErr) {
            toast.error(isError || delErr)
            dispatch({ type: "USER_PROFILE_UPDATE_RESET" })
            dispatch({ type: "USER_DELETE_RESET" })
            
        }

    }, [userInfo, setValue, isSuccess, dispatch, isError,delErr]);
    return (
        <Sidebar>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Profile</h2>
                <div className='w-full grid lg:grid-cols-12 gap-6'>
                    <div className='col-span-10'>
                        <Uploader setImageUrl={setImageUrl} />
                    </div>
                    <div className='col-span-2'>
                        <ImagePreview image={imageUrl} name={
                            userInfo ? userInfo.name : "User"
                        } />
                    </div>
                </div>

                <div className='w-full'>
                    <Input
                        label="Full Name"
                        placeholder="Enter your Full Name"
                        type="text"
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
                        placeholder="Plix@gmail.com"
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
                <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4 '>
                    <button
                    onClick={onDelete}
                        disabled={deleteLoading || isLoading}
                        className='bg-subMain transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                        {
                            deleteLoading ? "Deleting..." : "Delete Account"
                        }
                    </button>
                    <button
                        disabled={deleteLoading || isLoading}
                        className='bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                        {
                            isLoading ? "Updating..." : "Update Profile"
                        }
                    </button>
                </div>
            </form>
        </Sidebar>
    )
}

export default Profile