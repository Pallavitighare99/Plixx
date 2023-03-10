import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Input } from '../../components/UsedInput'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PasswordUpdateValidation } from '../../components/Validation/UserValidation';
import { changePasswordAction } from '../../Redux/Actions/userAction';
import { InlineError } from '../../components/Notifications/Error';
import { toast } from 'react-hot-toast';


function Password() {
    const dispatch = useDispatch();
    const { isLoading, isError, isSuccess } = useSelector((state) => state.userChangePassword);
    //validate 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(PasswordUpdateValidation)
    })

    //on Submit
    const onSubmit = (data) => {
        console.log(data)
        dispatch(changePasswordAction(data))
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch({ type: "USER_CHANGE_PASSWORD_RESET" })
            reset()
        }
        if (isError) {
            console.log(isError)
            toast.error(isError)
            dispatch({ type: "USER_CHANGE_PASSWORD_RESET" })
        }
        
    }, [isSuccess, isError, dispatch, reset ]);

    return (
        <Sidebar>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Change Password</h2>
                <div className='w-full'>
                    <Input
                        label="Previous Password"
                        placeholder="*******"
                        type="password"
                        name="oldPassword"
                        register={register("oldPassword")}
                        bg={true}
                    />
                    {
                        errors.oldPassword && <InlineError
                            text={errors.oldPassword.message} />

                    }
                </div>
                <div className='w-full'>
                    <Input
                        label="New Password"
                        placeholder="*******"
                        type="password"
                        name="newPassword"
                        register={register("newPassword")}
                        bg={true}
                    />
                    {
                        errors.newPassword && <InlineError
                            text={errors.newPassword.message} />

                    }
                </div>
                <div className='w-full'>
                    <Input
                        label="Confirm Password"
                        placeholder="*******"
                        type="password"
                        name="confirmPassword"
                        register={register("confirmPassword")}
                        bg={true}
                    />
                    {
                        errors.confirmPassword && <InlineError
                            text={errors.confirmPassword.message} />

                    }
                </div>
                <div
                    disabled={isLoading}
                    type='submit'
                    className='flex justify-end items-center my-4'>
                    <button className='bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                        {
                            isLoading ? "Changing..." : "Change Password"
                        }
                    </button>
                </div>
            </form>
        </Sidebar>
    )
}

export default Password