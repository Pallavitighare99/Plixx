import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Layout from '../layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { Movies } from '../data/MoviesData'
import { BiArrowBack } from 'react-icons/bi';
import { FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { movieDetailsAction } from '../Redux/Actions/MovieAction';
import Loader from '../components/Notifications/Loader';
import { RiMovie2Line } from 'react-icons/ri';
import { DownloadVideo, LikeMovie, MovieLiked } from '../context/Functionalities';
import FileSaver from 'file-saver';
import { SidebarContext } from '../context/DrawerContext';


function WatchPage() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const [play, setPlay] = useState(false)

    const { progress, setProgress } = useContext(SidebarContext)

    const sameClass = 'w-full gap-6 flex flex-col justify-center items-center min-h-screen';
    //movie like
    const { isLoading: likeLoading } = useSelector((state) => state.userLikeMovie)

    const { userInfo } = useSelector((state) => state.userLogin)

    //if liked movie
    const isLiked = (movie) => {
        return MovieLiked(movie)
    }

    const { isLoading, isError, movie } = useSelector((state) => state.getMovieByID)

    useEffect(() => {
        dispatch(movieDetailsAction(id))
    }, [dispatch, id])

    //download movie
    const downloadMovie = async (videoUrl, name) => {
        await DownloadVideo(videoUrl, setProgress).then((data) => {
            setProgress(0);
            FileSaver.saveAs(data, name);
        });
    }

    return (
        <Layout>
            <div className='container mx-auto b-dry py-6 mb-12'>
                {
                    !isError &&
                    <div className='flex justify-between items-center flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
                        <Link to={`/movie/${movie?._id}`}
                            className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
                            <BiArrowBack /> {movie?.name}
                        </Link>
                        <div className=' flex justify-between items-center sm:w-auto w-full gap-5'>
                            <button
                                onClick={() => LikeMovie(movie, dispatch, userInfo)}
                                disabled={isLiked(movie) || likeLoading}
                                className={`bg-white hover:text-subMain
                                ${isLiked(movie) ? "text-subMain" : "text-white"}
                                transitions bg-opacity-30  rounded px-4 py-3 text-sm`}>
                                <FaHeart />
                            </button>
                            <button 
                             disabled = {progress > 0 && progress < 100}
                             onClick={() => downloadMovie(movie?.video, movie?.name)}
                            className='bg-subMain flex flex-row justify-center items-center gap-2 hover:text-main transitions text-white rounded px-8 font-medium py-3 text-sm'>
                                <FaCloudDownloadAlt />Download
                            </button>
                        </div>
                    </div>
                }


                {/* Watch Video */}
                {
                    play ? (
                        <video controls autoplay={play} className='w-full h-screen rounded'>
                            <source src={movie?.video} type="video/mp4"
                                title={movie?.name} />
                        </video>
                     
                          
                    ) : (
                        <div className='w-full h-screen rounded-lg overflow-hidden relative'>
                            {
                                isLoading ? <div className={sameClass}>
                                    <Loader />
                                </div>
                                    :
                                    isError ?
                                        <div className={sameClass}>
                                            <div className='flex flex-col justify-center items-center w-24 h-24 p-5 mb-4 rounded-full bg-main text-subMain text-4xl'>
                                                <RiMovie2Line />
                                            </div>
                                            <p className='text-border text-sm'>
                                                {isError}
                                            </p>
                                        </div>
                                        :
                                        (
                                            <>
                                                <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex flex-col justify-center items-center'>
                                                    <button onClick={() => setPlay(true)} className='bg-subMain flex flex-col justify-center items-center border border-subMain rounded-full w-20 h-20 font-medium text-xl'>
                                                        <FaPlay />
                                                    </button>
                                                </div>
                                                <img src={
                                                    movie?.image
                                                        ? `${movie?.image}`
                                                        : '/images/user.png'
                                                } alt={movie?.name} className='w-full h-full object-cover rounded-lg' />
                                            </>

                                        )
                            }

                        </div>
                    )
                }
            </div>
        </Layout>
    )
}

export default WatchPage