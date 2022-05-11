import * as yup from 'yup';

export const userValidation = yup.object().shape({
  user: yup.string().required('User is required'),
  password: yup.string().required('Password is required').min(4, 'Password must be at least 4 characters'),
  
});

