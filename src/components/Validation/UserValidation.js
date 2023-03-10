import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(6, 'Too Short!').max(25, 'Too Long!').required('Required').matches(/(?=.*[0-9])/, `Password must contain a number.`),

});

export const RegisterValidation = Yup.object().shape({  
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(6, 'Too Short!').max(25, 'Too Long!').required('Required').matches(/(?=.*[0-9])/, `Password must contain a number.`),
    name: Yup.string().required("Name is Required"),
    
});

export const ProfileUpdateValidation = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email('Invalid email').required('Email is Required'),
});

export const PasswordUpdateValidation = Yup.object().shape({
    oldPassword: Yup.string().min(6, 'Too Short!').max(25, 'Too Long!').required('Required').matches(/(?=.*[0-9])/, `Password must contain a number.`),
    newPassword: Yup.string().min(6, 'Too Short!').max(25, 'Too Long!').required('Required').matches(/(?=.*[0-9])/, `Password must contain a number.`),
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required('Required').oneOf([Yup.ref("newPassword"), null], "Password must match")
});