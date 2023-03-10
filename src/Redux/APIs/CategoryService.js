import Axios from "./Axios"

//get all categories
export const getAllCategoriesService = async () => {
    const {data} = await Axios.get("/categories");
    return data;
}

//add category
export const addCategoryService = async (category, token) => {
    const {data} = await Axios.post("/categories", category, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

// update category
export const updateCategoryService = async (id, category, token) => {
    const {data} = await Axios.put(`/categories/${id}`, category, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

//delete category
export const deleteCategoryService = async (id, token) => {
    const {data} = await Axios.delete(`/categories/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}