import React, { useContext, useEffect } from 'react'
import Table from '../../components/Table'
import Sidebar from './Sidebar'
import { Movies } from '../../data/MoviesData'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllLikedMoviesAction, getFavouriteMoviesAction } from '../../Redux/Actions/userAction';
import { toast } from 'react-hot-toast';
import Loader from '../../components/Notifications/Loader'
import Empty from '../../components/Notifications/Empty';
import { DownloadVideo } from '../../context/Functionalities';
import FileSaver from 'file-saver';
import { SidebarContext } from '../../context/DrawerContext';



function FavouriteMovie() {
  const dispatch = useDispatch();
  const { progress, setProgress } = useContext(SidebarContext)

  const {
    isLoading,
    isError,
    likedMovies
  } = useSelector((state) => state.userFavMovies)

  const {
    isLoading: delLoading,
    isError: delError,
    isSuccess
  } = useSelector((state) => state.userDeleteAllFavs)

  const deleteFavsHandler = () => {
    window.confirm("Are you sure you want to delete all your favourite movies?") &&
      dispatch(deleteAllLikedMoviesAction())
  }

  useEffect(() => {
    // dispatch(getFavouriteMoviesAction())
    if (isError || delError) {
      toast.error(isError || delError)
      dispatch({ type: isError ? "USER_GET_FAVOURITE_MOVIE_RESET" : "USER_DELETE_FAVOURITE_MOVIES_RESET" })
    }

  }, [dispatch, isError, delError,isSuccess])

  //download movie
  const downloadMovie = async (videoUrl, name) => {
    await DownloadVideo(videoUrl, setProgress).then((data) => {
        setProgress(0);
        FileSaver.saveAs(data, name);
    });
}

  return (
    <Sidebar>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between items-center gap-2'>
          <h2 className='text-xl font-bold'>Favourite Movies</h2>
          {
            likedMovies?.length > 0 && <button disabled={delLoading} onClick={deleteFavsHandler} className=' bg-main font-medium transitions hover:bg-subMain border-2 border-subMain text-white py-3 px-6 rounded'>
              {
                delLoading ? "Deleting..." : "Delete All"
              }
            </button>
          }
        </div>
        {
          isLoading ?
            <Loader /> :
            likedMovies?.length > 0 ?
              <Table data={likedMovies} admin={false} downloadMovie={downloadMovie} progress={progress} /> : <Empty message="No favourite movie found"/>
        }

      </div>
    </Sidebar>
  )
}

export default FavouriteMovie