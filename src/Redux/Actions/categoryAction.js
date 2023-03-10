import * as categoryConstants from "../constants/categoryConstants"
import * as categoryServices from "../APIs/CategoryService"
import { toast } from "react-hot-toast";
import { ErrorAction, tokenProtection } from '../Protection';

export const getCategoryAction = () => async (dispatch) => {

    try {
        dispatch({ type: categoryConstants.GET_CATEGORIES_REQUEST });
        const response = await categoryServices.getAllCategoriesService()
        dispatch({ type: categoryConstants.GET_CATEGORIES_SUCCESS, payload: response });
    } catch (error) {
        ErrorAction(error, dispatch, categoryConstants.GET_CATEGORIES_FAIL)
    }
}

export const updateCategoryAction = (id, title) => async (dispatch, getState) => {
    try {
        dispatch({ type: categoryConstants.UPDATE_CATEGORY_REQUEST });
        const response = await categoryServices.updateCategoryService(id, title, tokenProtection(getState));
        dispatch({ type: categoryConstants.UPDATE_CATEGORY_SUCCESS, payload: response });
        toast.success("Category Updated Successfully")
        dispatch(getCategoryAction())
    } catch (error) {
        ErrorAction(error, dispatch, categoryConstants.UPDATE_CATEGORY_FAIL)
    }
}

export const deleteCategoryAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: categoryConstants.DELETE_CATEGORY_REQUEST });
        await categoryServices.deleteCategoryService(id, tokenProtection(getState));
        dispatch({ type: categoryConstants.DELETE_CATEGORY_SUCCESS });
        dispatch(getCategoryAction())
    } catch (error) {
        ErrorAction(error, dispatch, categoryConstants.DELETE_CATEGORY_FAIL)
    }
}

export const addCategoryAction = (datas) => async (dispatch, getState) => {
    try {
        dispatch({ type: categoryConstants.ADD_CATEGORY_REQUEST });
        const response = await categoryServices.addCategoryService(datas, tokenProtection(getState));
        dispatch({ type: categoryConstants.ADD_CATEGORY_SUCCESS, payload: response });
        toast.success("Category Added Successfully")
        dispatch(getCategoryAction())
    } catch (error) {
        ErrorAction(error, dispatch, categoryConstants.ADD_CATEGORY_FAIL)
    }
}


