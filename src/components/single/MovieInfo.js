import React, { useEffect, useRef, useState } from 'react'
import { FaPlay, FaShare, FaShareAlt } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import FlexMovieItem from '../FlexMovieItem'
import Rating from '../Stars'

function MovieInfo({ movie, setModalOpen, downloadMovie, progress }) {
//     const videoEl = useRef(null);
   const [autoPlay, setAutoplay] = useState(false)

   useEffect(() => {
    if(movie?.trailer) {
        setAutoplay(true)
    }
    }, [movie])


    return (
        <div className='w-full xl:h-screen relative text-white'>
            {/* <img src={movie?.image ? `${movie.image}` : '/images/user2.png'}
                alt={movie?.name}
                className="w-full hidden xl:inline-block h-full object-cover" /> */}
            <video loop autoPlay={autoPlay} muted className="w-full hidden xl:inline-block h-full object-cover">
                <source src={movie?.trailer} type="video/mp4"
                    title={movie?.name} />
            </video>
            <div className='xl:bg-main bg-dry flex flex-col justify-center items-center xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
                <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex flex-col justify-center items-center py-10 lg:py-20 gap-8'>
                    <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden'>
                        <img src={movie?.titleImage ? `${movie.titleImage}` : '/images/user2.png'}
                            alt={movie?.name}
                            className="w-full h-full object-cover" />

                    </div>
                    <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
                        <div className='col-span-3 flex flex-col gap-10'>
                            {/*Title*/}
                            <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
                                {movie?.name}
                            </h1>
                            {/* flex item */}
                            <div className='flex items-center gap-4 font-medium text-dryGray'>
                                <div className='flex flex-col justify-center items-center bg-subMain text-xs px-2 py-1'>
                                    HD 4k
                                </div>
                                <FlexMovieItem movie={movie && movie} />
                            </div>
                            {/* description */}
                            <p className='text-text text-sm leading-7'>{movie?.desc}</p>
                            <div className='grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg'>
                                {/* Share */}
                                <div className='col-span-1 flex flex-col justify-center items-center border-r border-border'>
                                    <button
                                        onClick={() => setModalOpen(true)}
                                        className='w-10 h-10 flex flex-col justify-center items-center rounded-lg bg-white bg-opacity-20'>
                                        <FaShareAlt />
                                    </button>
                                    {/* language */}
                                </div>
                                <div className='col-span-2 flex flex-col justify-center items-center font-medium text-sm'>
                                    <p>Language:{' '}<span className='ml-2 truncate'>{movie?.language}</span></p>
                                </div>
                                {/* Watch Button */}
                                <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                                    <Link to={`/watch/${movie?._id}`} className='bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex flex-row justify-center items-center gap-4 w-full sm:py-3'>
                                        <FaPlay className='w-3 h-3' />Watch
                                    </Link>
                                </div>
                            </div>
                            {/* ratings */}
                            <div className='flex mb-6 text-lg gap-2 text-star'>
                                <Rating value={movie?.rate} />
                            </div>
                        </div>
                        <div className='col-span-2 md:mt-0 flex justify-end'>
                            <button 
                            disabled = {progress}
                            onClick={() => downloadMovie(movie?.video, movie?.name)}
                            className='md:w-1/4 w-full relative flex flex-col justify-center items-center bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium'>
                                <div className='flex flex-row justify-center items-center gap-6 text-md upperacase tracking-widest absolute md:rotate-90'>
                                    Download<FiLogIn className='w-6 h-6' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default MovieInfo