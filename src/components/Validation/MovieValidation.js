import * as yup from "yup"

export const ReviewValidation = yup.object().shape({
    comment : yup
        .string()
        .required('Comment is required')
        .max(50, 'Comment must be at least 50 characters'),
        rate: yup.number().required("Select a rating")
});

export const MovieValidation = yup.object().shape({
    name : yup.string().required('Name is required'),
    desc : yup.string().required('Please enter movie description'),
    category : yup.string().required('Please select movie category'),
    time : yup.number().required('Please enter movie duration'),
    language : yup.string().required('Language is required'),
    year: yup.number().required('Please enter year of release'),
})


