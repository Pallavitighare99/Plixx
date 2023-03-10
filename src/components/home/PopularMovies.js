import React from 'react'
import Title from '../Title'
import { BsCollectionFill } from 'react-icons/bs'
import Movie from '../Movie'
import { Movies } from '../../data/MoviesData'
import Loader from '../Notifications/Loader'
import Empty from '../Notifications/Empty'

function PopularMovies({ isLoading, movies }) {
  return (
    <div className='my-16 '>
      <Title title='Popular Movies' Icon={BsCollectionFill} />
      {
        isLoading ? (
          <Loader />
        ) :
          movies?.length > 0 ? (
            <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>

              {
                movies?.slice(0, 8).map((movie, index) => (
                  <Movie key={index} movie={movie} />
                ))
              }
            </div>
          ) : (
            <div className='mt-6'>
              <Empty message="No Movies Found" />
            </div>
          )

      }

    </div>
  )
}

export default PopularMovies