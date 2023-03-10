import React, { useEffect, useState } from 'react'
import MainModal from './MainModal'
import { Input } from "../UsedInput"
import { HiPlusCircle } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryAction, updateCategoryAction } from '../../Redux/Actions/categoryAction';
import { toast } from 'react-hot-toast';


function CategoryModal({ modalOpen, setModalOpen, category }) {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch();

    const {isSuccess, isLoading, isError} = useSelector(state => state.adminAddCategory)
    const {isSuccess: updateSuccess, isLoading: updateLoading, isError: updateIsError} = useSelector(state => state.adminUpdateCategory)

    const createCategoryHandler = (e) => {
        e.preventDefault();
        if (title) {
            if (category) {
                dispatch(updateCategoryAction(category._id, { title: title}))
                setModalOpen(!modalOpen)
            } else {
                dispatch(addCategoryAction({ title: title }))
                setTitle("")
                setModalOpen(false)
            }
        } else {
            toast.error("Please Enter Category")
        }
        
      
    }

    useEffect(()=>{
        if(isError || updateIsError){
            toast.error(isError || updateIsError)
            dispatch({type: isError ? "ADD_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET" })
        }
        if (isSuccess || updateSuccess) {
            dispatch({ type: isSuccess ? "ADD_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET" })
            // toast.success("Category added successfully")
        }

        if(category) {
            setTitle(category?.title)
        }
        
        if (modalOpen === false) {
            setTitle("")
        }
        

    },[isError, isSuccess, updateIsError, updateSuccess, category, modalOpen])
    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full rounded-md align-middle p-10 overflow-y-auto h-full bg-main text-white '>
                <h2 className='text-3xl font-bold'>
                    {category ? "Update" : "Create"}</h2>
                <form className='flex flex-col gap-4 text-left mt-6' onSubmit={createCategoryHandler} >
                    <Input
                        label="Category Name"
                        placeholder={"Action"}
                        type="text"
                        bg={true}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button 
                    disabled={isLoading || updateLoading}
                    type='submit'
                    className='w-full flex flex-row justify-center items-center gap-4 py-3 text-lg hover:bg-dry border-2 border-subMain rounded bg-subMain text-white'>
                    {
                        isLoading || updateLoading ? "Loading...": category ? "Update": "Create"
                    }
                    </button>
                </form>
            </div>
        </MainModal>
    )
}

export default CategoryModal