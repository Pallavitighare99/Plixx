import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/home/Banner'
import PopularMovies from '../components/home/PopularMovies'
import Promos from '../components/home/Promos'
import TopRated from '../components/home/TopRated'
import Layout from '../layout/Layout'
import { moviesListAction, moviesRandomAction, moviesTopRatedAction } from '../Redux/Actions/MovieAction'

function Homescreen() {
  const dispatch = useDispatch()

  const { isLoading: randomLoading, isError: randomError, movies: randomMovies } = useSelector((state) => state.getRandomMovies);

  const { isLoading: topLoading, isError: topError, movies: topMovies } = useSelector((state) => state.getTopRatedMovie);

  const { isLoading, isError, movies } = useSelector((state) => state.movieList);

  useEffect(() => {
    dispatch(moviesRandomAction());
    dispatch(moviesListAction({}));
    dispatch(moviesTopRatedAction());
    if (isError || randomError || topError) {
      toast.error("Something went wrong")
    }
  }, [dispatch, isError, randomError, topError])

  return (
    <Layout>
      <div className='container mx-auto main-h-screen px-2 mb-6'>
        <Banner movies={movies} isLoading={isLoading} />
        <PopularMovies movies={randomMovies} isLoading={randomLoading}/>
        <Promos />
        <TopRated movies={topMovies} isLoading={topLoading}/>
      </div>

    </Layout>
  )
}

export default Homescreen