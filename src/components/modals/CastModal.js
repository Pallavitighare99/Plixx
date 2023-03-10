import React, { useEffect, useState } from 'react'
import MainModal from './MainModal'
import { Input } from "../UsedInput"
import { HiPlusCircle } from 'react-icons/hi'
import Uploader from '../Uploader'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { addCastAction, updateCastAction } from '../../Redux/Actions/MovieAction'
import { InlineError } from '../Notifications/Error'
import { ImagePreview } from '../imagePreview'
import { toast } from 'react-hot-toast'


function CastModal({ modalOpen, setModalOpen, cast }) {
    const dispatch = useDispatch();
    const [castImage,setCastImage] = useState("");
    const generateId = Math.floor(Math.random() * 100000000);
    const image = castImage ? castImage :  cast?.image ;

    // validate cast
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(
            yup.object().shape({
                name: yup.string().required('Cast name is required'),
            }
        ))
    });


    //on Submit
    const onSubmit = (data) => {
        if(cast) {
            //if cast is not null then update cast
            dispatch(
                updateCastAction({
                    ...data,
                    image: image,
                    id: cast.id,
                })
            );
        } else {
            //if cast is null then add cast
            dispatch(
                addCastAction({
                    ...data,
                    image: image,
                    id: generateId,
                })
            )
        }
        reset();
        setCastImage("")
        setModalOpen(false);
    }

    useEffect(()=>{
        if(cast) {
            setValue("name",cast?.name)
        }
    },[cast, setValue])
    


    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full rounded-md align-middle p-10 overflow-y-auto h-full bg-main text-white '>
                <h2 className='text-3xl font-bold'>
                    {cast ? "Update Cast" : "Create Cast"}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 text-left mt-6'>
                <div className='w-full'>
                        <Input
                            label="Cast Name"
                            placeholder={cast ? cast?.name : "John Doe"}
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
                      <div className='flex flex-col gap-2'>
                        <p className='text-border font-semibold text-sm'>
                            Cast Image
                        </p>
                        <Uploader setImageUrl={setCastImage} />
                        <ImagePreview image={ image? image: "images/user2.png"} name="castImage" />
                    </div>
                    <button 
                    type='submit'
                    className='w-full flex flex-row justify-center items-center gap-4 py-3 text-lg hover:bg-dry border-2 border-subMain rounded bg-subMain text-white'>
                    {cast ? "Update" : "Add"}
                    </button>
                </form>
            </div>
        </MainModal>
    )
}

export default CastModal