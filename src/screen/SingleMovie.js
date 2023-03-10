import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCast from '../components/single/MovieCast'
import MovieInfo from '../components/single/MovieInfo'
import { Movies } from '../data/MoviesData'
import Layout from '../layout/Layout'
import MovieRates from '../components/single/MovieRates'
import Title from '../components/Title'
import { BsCollectionFill } from 'react-icons/bs'
import Movie from '../components/Movie'
import ShareMovieModal from '../components/modals/ShareModal'
import { useDispatch, useSelector } from 'react-redux'
import { movieDetailsAction } from '../Redux/Actions/MovieAction'
import Loader from '../components/Notifications/Loader'
import { RiMovie2Line } from 'react-icons/ri'
import { SidebarContext } from '../context/DrawerContext'
import { DownloadVideo } from '../context/Functionalities'
import FileSaver from 'file-saver'

function SingleMovie() {
  const [modalOpen, setModalOpen] = useState(false)

  const {progress, setProgress} = useContext(SidebarContext)

  const { id } = useParams();

  const sameClass = 'w-full gap-6 flex flex-col justify-center items-center min-h-screen';

  const dispatch = useDispatch();

  const { isLoading, isError, movie } = useSelector((state) => state.getMovieByID)
  const { movies } = useSelector((state) => state.movieList)

  const RelatedMovies = movies?.filter((m) => m.category === movie?.category)

  //download movie
  const downloadMovie = async (videoUrl,name) => {
    await DownloadVideo(videoUrl, setProgress).then((data)=>{
      setProgress(0);
      FileSaver.saveAs(data, name);
    });
  }




  
  useEffect(() => {
    dispatch(movieDetailsAction(id))
  }, [dispatch, id])


  return (
    <Layout>
      {
        isLoading ? <div className={sameClass}>
          <Loader />
        </div>
          :
          isError ? <div className={sameClass}>
            <div className='flex flex-col justify-center items-center w-24 h-24 p-5 mb-4 rounded-full bg-dry text-subMain text-4xl'>
              <RiMovie2Line />
            </div>
            <p className='text-border text-sm'>
              Something went wrong
            </p>
          </div>
            : (
              <>
                <ShareMovieModal modalOpen={modalOpen} setModalOpen={setModalOpen} movie={movie} />
                <MovieInfo movie={movie} setModalOpen={setModalOpen} downloadMovie={downloadMovie} progress={progress}/>
                <div className='container mx-auto min-h-screen px-2 my-6'>
                  <MovieCast movie={movie} />
                  {/* Rates */}
                  <MovieRates movie={movie} />
                  {/*Related */}
                  {
                    RelatedMovies.length > 0 &&  (
                      <div className='my-16'>
                    <Title title='Related Movies' Icon={BsCollectionFill} />
                    <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                      {
                        RelatedMovies?.map((movie) => (
                          <Movie key={movie._id} movie={movie} />
                        ))
                      }
                    </div>
                  </div>
                    )
                  }
                 
                </div>
              </>
            )

      }

    </Layout>
  )
}

export default SingleMovie