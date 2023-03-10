import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import Table2 from '../../../components/Table2'
import { UserData } from '../../../data/UserData'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction, getAllUserAction } from '../../../Redux/Actions/userAction';
import { toast } from 'react-hot-toast';
import Loader from '../../../components/Notifications/Loader';
import Empty from '../../../components/Notifications/Empty';

function Users() {
  const dispatch = useDispatch();

  const {
    isLoading,
    isError,
    users
  } = useSelector((state) => state.adminGetAllUser)
  console.log(users)

  const {
    isError: delError,
    isSuccess
  } = useSelector((state) => state.adminDeleteUser)

  const deleteUserHandler = (id) => {
    if(window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUserAction(id))
    }
      
  }

  useEffect(() => {
    dispatch(getAllUserAction())
    if (isError || delError) {
      toast.error(isError || delError)
      dispatch({ type: isError ? "GET_ALL_USERS_RESET" : "ADMIN_DELETE_USER_RESET" })
    }

  }, [dispatch, isError, delError,isSuccess])
  return (
    <Sidebar>
      <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold'>Users</h2>
          {
          isLoading ?
            <Loader /> :
            users ?.length > 0 ?
            <Table2 data={users} users={true} onDeleteFunction={deleteUserHandler}/> : <Empty message="No users found"/>
        }
        
      </div>
    </Sidebar>
  )
}

export default Users