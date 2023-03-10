import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Movies } from '../../data/MoviesData'
import FlexMovieItem from '../FlexMovieItem'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { RiMovie2Line } from 'react-icons/ri'
import Loader from '../Notifications/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { LikeMovie, MovieLiked } from '../../context/Functionalities'



const Swipper = ({ sameClass, movies }) => {
    const { isLoading } = useSelector((state) => state.userLikeMovie)
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.userLogin)

    const [autoPlay, setAutoplay] = useState(false)

    useEffect(() => {
        if (movies) {
            setAutoplay(true)
        }
    }, [movies])

    //if liked movie
    const isLiked = (movie) => {
        return MovieLiked(movie)
    }

    return (
        <Swiper
            direction='vertical'
            slidesPerView={1}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false
            }}
            className={sameClass}
        >
            {
                movies.slice(0, 6).map((movie, index) => (
                    <SwiperSlide key={index} className='relative rounded overflow-hidden'>
                        <video loop autoPlay={autoPlay} muted className='w-full h-full object-cover'>
                            <source src={movie?.trailer} type="video/mp4"
                                title={movie?.name} />
                        </video>
                        {/* <img src={movie?.image ? `${movie.image}` : '/images/user2.png'}
                            alt={movie?.name}
                            className='w-full h-full object-cover' /> */}
                        <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                            <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>{movie.name}</h1>
                            <div className='flex gap-5 items-center text-dryGray'>
                                <FlexMovieItem movie={movie} />
                            </div>
                            <div className='flex gap-5 items-center '>
                                <Link to={`/movie/${movie?._id}`} className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs" >
                                    Watch
                                </Link>
                                <button
                                    onClick={() => LikeMovie(movie, dispatch, userInfo)}
                                    disabled={isLiked(movie) || isLoading}
                                    className={`bg-white 
                                ${isLiked(movie) ? 'text-subMain' : 'text-white'}
                                hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30`}>
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

function Banner({ movies, isLoading }) {
    const sameClass = 'w-full flex flex-col justify-center items-center xl:h-96 bg-dry lg:h-64 h-48'
    return (
        <div className='relative w-full'>
            {
                isLoading ? (
                    <div className={sameClass}>
                        <Loader />
                    </div>
                ) :
                    movies?.length > 0 ? (
                        <Swipper sameClass={sameClass} movies={movies} />
                    )
                        : (
                            <div className={sameClass}>
                                <div className='flex flex-col justify-center items-center w-24 h-24 p-5 mb-4 rounded-full bg-dry text-subMain text-4xl'>
                                    <RiMovie2Line />
                                </div>
                                <p className='text-border text-sm'>
                                    No Movies Found
                                </p>
                            </div>
                        )
            }
        </div>
    )
}

export default Banner