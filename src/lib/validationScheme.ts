import * as yup from 'yup';

const email = yup.string().email('Email is required')


const stringValidation = (name: string) => {

  return yup.string().required(`${name} is required`)

}

export const userValidation = yup.object().shape({
  user: stringValidation('user'),
  password: stringValidation('password').min(4, 'Password must be at least 4 characters'),
  nationality: yup.string().required('nationality is required'),
  birthday: yup.date(),
  gender: stringValidation('Gender'),
  email
  
});

export const documentValidation = yup.object().shape({
  
  documentExpedition: yup.date(),
  documentNumber: yup.number().required('Only numbers required'),
  email
  
})

