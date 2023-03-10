import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import Uploader from '../../../components/Uploader'
import { Input, Message, Select } from '../../../components/UsedInput'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { ImUpload } from 'react-icons/im'
import CastModal from '../../../components/modals/CastModal'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MovieValidation } from '../../../components/Validation/MovieValidation'
import { movieCreateAction, removeCastAction } from '../../../Redux/Actions/MovieAction'
import { toast } from 'react-hot-toast'
import { InlineError } from '../../../components/Notifications/Error'
import { ImagePreview } from '../../../components/imagePreview'
import Trailer from '../../../components/Trailer'

function AddMovie() {
    const [modalOpen, setModalOpen] = useState(false)
    const [cast, setCast] = useState(null);
    const [imageWithoutTitle, setImageWithoutTitle] = useState("")
    const [imageTitle, setImageTitle] = useState("")
    const [videoUrl, setVideoUrl] = useState("")
    const [trailer, setTrailer] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // get all categories
    const { categories } = useSelector((state) => state.getCategory)
    const { isLoading, isSuccess, isError } = useSelector((state) => state.createMovie)
    const { casts } = useSelector((state) => state.casts)
    const isPaidOptions = [
        {
            _id: '1',
            title: 'true',
        },
        {
            _id: '2',
            title: 'false',
        },]

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(MovieValidation)
    })


    //on Submit
    const onSubmit = (data) => {
        dispatch(movieCreateAction({
                ...data,
                image:imageWithoutTitle,
                titleImage:imageTitle,
                video:videoUrl,
                trailer:trailer,
                casts,
                isPaid: data.isPaid === 'true' ? true : false
    
            }))
    }

    //delete cast handler
    const deleteCastHandler = (id) => {
        dispatch(removeCastAction(id))
    }

    useEffect(() => {
        if (modalOpen === false) {
            setCast();
        }
        if (isSuccess) {
            reset({
                name: "",
                desc: "",
                time: 0,
                language: "",
                year: 0,
                isPaid: 'false',
                category: "",
            })
            setImageTitle("");
            setImageWithoutTitle("");
            setVideoUrl("");
            setTrailer("");
            navigate('/addMovie')
            dispatch({ type: 'MOVIE_CREATE_RESET' })
        }
        if (isError) {
            toast.error('Something went wrong')
            dispatch({ type: 'MOVIE_CREATE_RESET' })
        }
    }, [modalOpen, isSuccess, isError, dispatch, reset, navigate])

    return (
        <Sidebar>
            <CastModal modalOpen={modalOpen} setModalOpen={setModalOpen} cast={cast} />
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Create Movie</h2>
                <div className='w-full grid md:grid-cols-2 gap-6'>
                    <div className='w-full'>
                        <Input
                            label="Movie Title"
                            placeholder="Game of Throne"
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
                            label="Hours"
                            placeholder="2HRS"
                            type="number"
                            name="time"
                            register={register("time")}
                            bg={true}
                        />
                        {
                            errors.time && <InlineError
                                text={errors.time.message} />

                        }
                    </div>
                </div>
                <div className='w-full grid md:grid-cols-2 gap-6'>
                    <div className='w-full'>
                        <Input
                            label="Language Used"
                            placeholder="Language"
                            type="text"
                            name="language"
                            register={register("language")}
                            bg={true}
                        />
                        {
                            errors.language && <InlineError
                                text={errors.language.message} />

                        }
                    </div>
                    <div className='w-full'>
                        <Input
                            label="Year of Release"
                            placeholder="Year"
                            type="number"
                            name="year"
                            register={register("year")}
                            bg={true}
                        />
                        {
                            errors.year && <InlineError
                                text={errors.year.message} />

                        }
                    </div>

                </div>

                {/* Image */}
                <div className='w-full grid md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-border font-semibold text-sm'>
                            Image Without Title
                        </p>
                        <Uploader setImageUrl={setImageWithoutTitle} />
                        <ImagePreview image={imageWithoutTitle} name="imageWithoutTitle" />
                    </div>
                    {/* image with title*/}
                    <div className='flex flex-col gap-2'>
                        <p className='text-border font-semibold text-sm'>
                            Image
                        </p>
                        <Uploader setImageUrl={setImageTitle} />
                        <ImagePreview image={imageTitle} name="imageTitle" />
                    </div>
                </div>

                {/* Description */}
                <div className='w-full'>
                    <Message
                        label=" Movie Description"
                        placeholder="Make it short and sweet"
                        name="desc"
                        register={{ ...register("desc") }}
                    />
                    {
                        errors.desc && <InlineError
                            text={errors.desc.message} />

                    }
                </div>

                {/* Category */}
                <div className='text-sm w-full'>
                    <Select label="Movie Category"
                        options={categories?.length > 0 ? categories : []}
                        name="category"
                        register={{ ...register("category") }}
                    />
                    {
                        errors.category && <InlineError
                            text={errors.category.message} />

                    }
                </div>
                {/* isPaid */}
                <div className='text-sm w-full'>
                    <Select label="Is Paid" options={isPaidOptions}
                        name="isPaid"
                        register={{ ...register("isPaid") }}
                    />
                    {
                        errors.isPaid && <InlineError
                            text={errors.isPaid.message} />

                    }
                </div>

                {/* Movie Video */}
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-border font-semibold text-sm'>
                        Movie
                    </label>
                    <div className={`w-full grid ${videoUrl && "md:grid-cols-2"} gap-6`}>
                        {
                            videoUrl && (
                                <div className='w-full bg-main text-sm text-subMain py-4 border border-border rounded flex flex-col justify-center items-center'>
                                    Video Uploaded!!!
                                </div>
                            )
                        }

                    </div>
                    <Uploader setImageUrl={setVideoUrl} />
                </div>

                {/* Trailer Video */}
                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-border font-semibold text-sm'>
                        Trailer
                    </label>
                    <div className={`w-full grid ${trailer && "md:grid-cols-2"} gap-6`}>
                        {
                            trailer && (
                                <div className='w-full bg-main text-sm text-subMain py-4 border border-border rounded flex flex-col justify-center items-center'>
                                    Trailer Uploaded!!!
                                </div>
                            )
                        }

                    </div>
                    <Trailer setImageUrl={setTrailer} />
                </div>

                {/* Casts */}
                <div className='w-full grid lg:grid-cols-2 gap-6 items-start'>
                    <button
                        onClick={() => setModalOpen(true)}
                        className='w-full py-4 bg-main border border-subMain border-dashed text-white rounded'>
                        Add Cast
                    </button>
                    <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-col-2 gap-4'>
                        {
                            casts?.length > 0 && casts?.map((user) => (
                                <div key={user.id} className='p-2 italic text-xs text-text rounded flex flex-col justify-center items-center bg-main border border-border'>
                                    <img
                                        src={`${user?.image ? user.image : '/images/user2.png'}`}
                                        alt={user.name} className='w-full h-24 object-cover rounded mb-4' />
                                    <p>{user.name}</p>
                                    <div className='flex flex-row justify-center items-center mt-2 w-full gap-2'>
                                        <button onClick={() => deleteCastHandler(user?.id)} className='w-8 h-6 bg-dry flex flex-col justify-center items-center border border-border text-subMain rounded'>
                                            <MdDelete />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setCast(user);
                                                setModalOpen(true)
                                            }}
                                            className='w-8 h-6 bg-dry flex flex-col justify-center items-center border border-border text-green-600 rounded'>
                                            <FaEdit />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/*Submit */}
                <div  className='flex justify-end items-center my-4'>
                    <button
                    disabled={isLoading}
                    onClick={handleSubmit(onSubmit)}
                    className='bg-subMain w-full flex flex-row justify-center items-center gap-6 font-medium text-white py-4 rounded '>
                        {
                            isLoading ? ( 
                                "Please Wait..."
                            ) :(
                                <><ImUpload /> Publish Movie</>
                            )
                                
                        }
                    </button>
                </div>
            </div>
        </Sidebar>
    )
}

export default AddMovie