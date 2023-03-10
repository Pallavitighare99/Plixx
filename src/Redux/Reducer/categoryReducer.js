import * as categoryConstans from "../constants/categoryConstants"

export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case categoryConstans.GET_CATEGORIES_REQUEST:
            return { ...state, isLoading: true }
        case categoryConstans.GET_CATEGORIES_SUCCESS:
            return { isLoading: false, categories: action.payload, isSuccess: true }
        case categoryConstans.GET_CATEGORIES_FAIL:
            return { isLoading: false, isError: action.payload }
        case categoryConstans.GET_CATEGORIES_RESET:
            return { categories: [] }
        default:
            return state
    }
}

export const categoryUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case categoryConstans.UPDATE_CATEGORY_REQUEST:
            return { isLoading: true }
        case categoryConstans.UPDATE_CATEGORY_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case categoryConstans.UPDATE_CATEGORY_FAIL:
            return { isLoading: false, isError: action.payload }
        case categoryConstans.UPDATE_CATEGORY_RESET:
            return {}
        default:
            return state
    }
}

export const categoryDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case categoryConstans.DELETE_CATEGORY_REQUEST:
            return { isLoading: true }
        case categoryConstans.DELETE_CATEGORY_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case categoryConstans.DELETE_CATEGORY_FAIL:
            return { isLoading: false, isError: action.payload }
        case categoryConstans.DELETE_CATEGORY_RESET:
            return {}
        default:
            return state
    }
}

export const categoryAddReducer = (state = {}, action) => {
    switch (action.type) {
        case categoryConstans.ADD_CATEGORY_REQUEST:
            return { isLoading: true }
        case categoryConstans.ADD_CATEGORY_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case categoryConstans.ADD_CATEGORY_FAIL:
            return { isLoading: false, isError: action.payload }
        case categoryConstans.ADD_CATEGORY_RESET:
            return {}
        default:
            return state
    }
}