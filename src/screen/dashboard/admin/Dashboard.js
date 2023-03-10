import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { FaRegListAlt, FaUserFriends } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import Empty from '../../../components/Notifications/Empty'
import Loader from '../../../components/Notifications/Loader'
import Table from '../../../components/Table'
import { Movies } from '../../../data/MoviesData'
import { getCategoryAction } from '../../../Redux/Actions/categoryAction'
import { movieDeleteAction, moviesListAction } from '../../../Redux/Actions/MovieAction'
import { getAllUserAction } from '../../../Redux/Actions/userAction'
import Sidebar from '../Sidebar'

function Dashboard() {
  const dispatch = useDispatch()

  const { isLoading: catLoading, isError: catError, categories } = useSelector((state) => state.getCategory);

  const { isLoading: userLoading, isError: userError, user } = useSelector((state) => state.adminGetAllUser);

  const { isLoading, isError, movies, totalMovies } = useSelector((state) => state.movieList);

  const { isLoading: deleteLoading, isError: deleteError } = useSelector((state) => state.deleteMovie);

  const { userInfo } = useSelector((state) => state.userLogin);

  //delete movie handler
  const deleteMovieHandler = (id) => {
    window.confirm("Are you sure you want to delete this movie?") &&
      dispatch(movieDeleteAction(id))
  }

  useEffect(() => {
    dispatch(getAllUserAction());

    if (isError || catError || userError || deleteError) {
      toast.error("Something went wrong")
    }
  }, [dispatch, isError, catError || userError, deleteError])


  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movies",
      total: isLoading ? "Loading..." : totalMovies || 0
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Categories",
      total: catLoading ? "Loading..." : categories?.length || 0
    },
    {
      bg: "bg-green-700",
      icon: FaUserFriends,
      title: "Total Users",
      total: userLoading ? "Loading..." : user?.length || 0
    }
  ]
  return (
    <Sidebar>
      <h2 className='text-xl font-bold'>Dashboard</h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {
          DashboardData.map((data, index) => (
            <div key={index} className='p-4 rounded bg-main border-border grid grid-cols-4 gap-2'>
              <div className={`col-span-1 rounded-full h-12 w-12 flex flex-col justify-center items-center ${data.bg}`}>
                <data.icon />
              </div>
              <div className='col-span-3'>
                <h2>{data.title}</h2>
                <p className='mt-2 font-bold'>{data.total}</p>
              </div>
            </div>
          ))
        }
      </div>
      <h3 className='text-md font-medium my-6 text-border'>Recent Movies</h3>
      {
        isLoading || deleteLoading ? (
          <Loader />
        ) :
          movies?.length > 0 ? (
            <Table data={movies} admin={userInfo?.isAdmin} onDeleteHandler={deleteMovieHandler} />
          ): (
              <Empty message="No Movie Found" />
            )
      }
    </Sidebar>
  )
}

export default Dashboard