import React, { useState } from 'react'
import { BsBookmarkStarFill, BsCaretLeft, BsCaretLeftFill, BsCaretRight, BsCaretRightFill } from 'react-icons/bs'
import { Movies } from '../../data/MoviesData'
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from '../Title'
import { Autoplay, Navigation } from 'swiper'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Rating from '../Stars'
import Loader from '../Notifications/Loader'
import Empty from '../Notifications/Empty'
import { useDispatch, useSelector } from 'react-redux'
import { LikeMovie, MovieLiked } from '../../context/Functionalities'

const SwiperTop = ({prevEl, nextEl, movies}) => {
  const { isLoading } = useSelector((state) => state.userLikeMovie)
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)

  //if liked movie
  const isLiked = (movie) =>{
    return MovieLiked(movie)
  }
  return (
    <Swiper
      navigation={{ nextEl, prevEl }}
      autoplay={true}
      speed={1000}
      loop={true}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }}>
      {
        movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
              <img src={movie?.titleImage ? `${movie.titleImage}` : '/images/user2.png'} 
              alt={movie.titleImage} className='w-full h-full object-cover rounded-lg' />
              <div className='px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0 pt-40'>
                <button 
                onClick={() => LikeMovie(movie, dispatch, userInfo)}
                disabled = {isLiked(movie) || isLoading}
                className={`w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full
                 ${isLiked(movie) ? 'bg-subMain' : 'bg-white bg-opacity-30'}
                  text-white pl-4`}>
                  <FaHeart />
                </button>
                <Link className='font-semibold text-xl trancuted line-clamp-2' to={`/movie/${movie?._id}`}>
                  {movie?.name}
                </Link>
                <div className='flex gap-2 text-star justify-center'>
                  <Rating value={movie?.rate} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

function TopRated({ movies, isLoading }) {
  const [nextEl, setNextEl] = useState(null)
  const [prevEl, setPrevEl] = useState(null)
  const classNames = "hover:bg-dry transitions text-sm rounded w-8 h-8 flex flex-col justify-center items-center bg-subMain text-white";
  return (
    <div className='my-16'>
      <Title title='Top Rated' Icon={BsBookmarkStarFill} />
      <div className='mt-10'>
        {
          isLoading ? <Loader />
            :
            movies?.length > 0 ?
              <SwiperTop nextEl={nextEl} prevEl={prevEl} movies={movies} />
              :
              <Empty message='No movies found' />

        }
        <div className='w-full px-1 flex flex-row justify-center items-center gap-6 pt-12 items-center'>
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>

        </div>
      </div>
    </div >
  )
}

export default TopRated