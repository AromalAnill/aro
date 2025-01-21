

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login_API } from '../../../services/userServices';
import Cookies from "js-cookie"
import { useDispatch } from 'react-redux';
import { loginAction } from '../Redux/slice';
import { jwtDecode } from 'jwt-decode';
import Usernav from '../User/Usernav';



// Yup Validation Schema
const validationSchema = Yup.object({
  email:Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Log = () => {
  const navigate = useNavigate();
 const dispatch = useDispatch()
 

  // Handle form submission
  const handleSubmit = (values) => {
    login_API(values)
      .then((data) => {
        console.log(data);
        
        console.log('Success:', data.message,);
        // console.log(data.token);
        
        
        const token = data.token
             
         Cookies.set('userData',token,{expires:2,secure:false})
         
         const gettoken =Cookies.get('userData')
      
      
        

        if (gettoken) {
         const userData = gettoken;
         
         const decodedData=jwtDecode(userData)
        //  console.log("from login",userData);
         console.log("from login",decodedData);
         
         dispatch(loginAction(decodedData))
        }

    
        // Redirect to dashboard or any other page on success
        // navigate('/');
      })
      // .catch((error) => {
      //   console.log('Error:',error.response.data)
      //   // console.log('Error:',error.response.data);
      // });
      .catch((error) => {
        console.log('Error message:', error.response.data);
      });
      
  };


  return (
   <div>
     <Usernav/>
     <div className='login'>
    
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className='lo'>
          <h1>Sign In</h1>
           <h4>password:     aromal</h4>
          <div>
            <Field
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              className='form-input' 
            />
            <ErrorMessage name='email' component='div' className='error' />
          </div>

          <div>
            <Field
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              className='form-input'
            />
            <ErrorMessage
              name='password'
              component='div'
              className='error'
            />
          </div>
          <br />

          <button type='submit'>Login</button>

          <p>
            Don't have an account? <a href='./Register'>Register</a>
          </p>
        </Form>
      )}
    </Formik>
  </div>
   </div>
  );
};

export default Log;
