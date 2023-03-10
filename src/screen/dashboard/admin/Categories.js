import React,{useState,useEffect} from 'react'
import Sidebar from '../Sidebar'
import { HiPlusCircle } from 'react-icons/hi'
import Table2 from '../../../components/Table2'
import CategoryModal from '../../../components/modals/CategoryModal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategoryAction, getCategoryAction } from '../../../Redux/Actions/categoryAction'
import Loader from '../../../components/Notifications/Loader'
import Empty from '../../../components/Notifications/Empty'
import { toast } from 'react-hot-toast'

function Categories() {
  const [modalOpen,setModalOpen]= useState(false)
  const [category,setCategory] = useState();

  const dispatch = useDispatch();

  const {categories, isLoading} = useSelector(state => state.getCategory)

  // delete category
  const {isSuccess, isLoading: DelLoading, isError} = useSelector(state => state.adminDeleteCategory)

  const deleteCategoryHandler = (id) => {
    window.confirm("Are you sure you want to delete this category?") &&
    dispatch(deleteCategoryAction(id))
  }


  const onEditFunction= (id) =>{
    setCategory(id);
    setModalOpen(!modalOpen);
  }

  useEffect(()=>{
    if(isError){
      toast.error(isError)
      dispatch({type: "DELETE_CATEGORY_RESET"})
    }
    if (isSuccess) {
      dispatch({ type: "DELETE_CATEGORY_RESET" })
      toast.success("Category deleted successfully")

    }
    if(modalOpen === false){
      setCategory();
    }
  },[modalOpen,  isError, isSuccess])
 
  return (
    <Sidebar>
      <CategoryModal modalOpen={modalOpen}  setModalOpen={setModalOpen} category={category}/>
    <div className='flex flex-col gap-6'>
        <div className='flex justify-between items-center gap-2'>
            <h2 className='text-xl font-bold'>Categories</h2>
            <button 
            onClick={()=>setModalOpen(true)}
            className='bg-subMain flex flex-row justify-center items-center gap-4 font-medium transitions hover:bg-subMain border-2 border-subMain text-white py-2 px-4 rounded'>
            <HiPlusCircle />Create
            </button>
        
        </div>
        {
          isLoading ? (
            <Loader />
          ) : categories?.length > 0 ? (
            <Table2 data={categories} users={false} onDeleteFunction={deleteCategoryHandler} onEditFunction={onEditFunction}/>
          ) : (
            <Empty message="No categories found" />
          ) 
        }
    </div>
</Sidebar>
  )
}

export default Categories