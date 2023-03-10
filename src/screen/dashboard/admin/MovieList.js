import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import Empty from '../../../components/Notifications/Empty';
import Loader from '../../../components/Notifications/Loader';
import Table from '../../../components/Table'
import { Movies } from '../../../data/MoviesData'
import { deleteAllMoviesAction, movieDeleteAction, moviesListAction } from '../../../Redux/Actions/MovieAction';
import Sidebar from '../Sidebar'


function MovieList() {
  const dispatch = useDispatch();
  const sameClass = 'text-white p-2 rounded font-semibold border-2 border-subMain hover:bg-subMain';
  
  //all movies
  const { isLoading, isError, movies, isSuccess, pages, page } = useSelector((state) => state.movieList);
  
  const {userInfo} = useSelector((state) => state.userLogin);
  //delete movie
  const { isLoading:deleteLoading, isError:deleteError } = useSelector((state) => state.deleteMovie);
 
  //delete movie handler
  const deleteMovieHandler = (id) => {
    window.confirm("Are you sure you want to delete this movie?") &&
    dispatch(movieDeleteAction(id))
  }

  useEffect(() => {
    if (isError || deleteError ) {
      toast.error(isError || deleteError)
    }
    dispatch(moviesListAction({}))
  }, [dispatch, isError])

  //pagination
  const nextPageHandler = () => {
    dispatch(
      moviesListAction({
        pageNumber: page + 1
      })
    )
  }
  const prevPageHandler = () => {
    dispatch(
      moviesListAction({
        pageNumber: page - 1
      })
    )
  }

  return (
    <Sidebar>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between items-center gap-2'>
          <h1 className='text-xl font-bold'>Movies List</h1>
        </div>
        {
          isLoading || deleteLoading ? (
            <Loader />
          ) :
            movies?.length > 0 ? (
              <>
                <Table data={movies} admin={userInfo?.isAdmin} onDeleteHandler={deleteMovieHandler} />
                <div className='w-full flex flex-rows justify-center items-center gap-6 my-5 '>
                  <button onClick={prevPageHandler} disabled={page === 1} className={sameClass}>
                    <TbPlayerTrackPrev className='text-xl' />
                  </button>
                  <button onClick={nextPageHandler} disabled={page === pages} className={sameClass}>
                    <TbPlayerTrackNext className='text-xl' />
                  </button>
                </div>
              </>
            ) : (<Empty message="No favourite movie found" />
            )}

      </div>
    </Sidebar>
  )
}

export default MovieList