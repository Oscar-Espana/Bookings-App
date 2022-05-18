import * as yup from 'yup';

export const userValidation = yup.object().shape({
  user: yup.string().required('User is required'),
  password: yup.string().required('Password is required').min(4, 'Password must be at least 4 characters'),
  documentNumber: yup.number().required('Only numbers required'),
  nationality: yup.string().required('nationality is required'),
  birthday: yup.date(),
  email: yup.string().email('EMAIL IS REQUIRED'),
  documentExpedition: yup.date()

          
  
});

