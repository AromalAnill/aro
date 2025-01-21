// import React, { useState } from 'react'
// import { registeration } from '../../../services/userServices'
// import {useNavigate} from "react-router-dom"

// const Register = () => {

//   const navigate = useNavigate()
//   const [formData, setData]= useState({

//          email:"",
//          username: "",
//          phone: "",
//          address: "",
//          password: "",

//   })
  

//   const handleChange =(e)=>{
//     const { name,value}=e.target
//     setData((prevData)=>({
//       ...prevData,
//       [name]:value
//     }))
//   }

//   const handleSubmit = async(e)=>{
//     e.preventDefault()

    
       
//       registeration(formData)
//       .then((data) => {
//         console.log("Success:", data);
//       })
//       .catch((error) => {
//         console.log("Error:",  error.response.data );
//       });
    
//   }
//   return (
   

//       <div className='register' > 
//          <form action="POST" onSubmit={handleSubmit}  className='reg'>

//        <h1> Create your account</h1>

// <input 
//      type="email" 
//      name="email" 
//      id="email" 
//      placeholder='Email' 
//      required
//      value={formData.email}
//      onChange={handleChange}
//      /> 
     
//     <br /><br />

// <input 
//     type="text" 
//     name="username" 
//     id="username" 
//     placeholder='Username'
//     required
//     value={formData.username}
//     onChange={handleChange}
//     /> 
//     <br /><br />

// <input 
//    type="tel" 
//    name="phone" 
//    id="phone" 
//    placeholder='Phone'
//    pattern="[0-9]{10}"
//    required
//    value={formData.phone}
//    onChange={handleChange}
   
//    /> 
//    <br /><br />

// <input
//     type="text" 
//     name="address"
//     id="address"
//     placeholder='Address' 
//     required
//     value={formData.address}
//     onChange={handleChange}
//     />
//     <br /><br />

// <input
//    type="password" 
//    name="password" 
//    id="password" 
//    placeholder='Password'
//    required
//    value={formData.password}
//    onChange={handleChange}
//    />
//     <br /><br />



// <button> Register</button><br />
// <p>Have an account <a href="./Log">Sign Up</a></p>

// </form>


// </div>
    
//   )
// }

// export default Register

import React from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registeration } from '../../../services/userServices';

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  address: Yup.string()
    .required('Address is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    username: "",
    phone: "",
    address: "",
    password: "",
  };

  const handleSubmit = (values) => {
    registeration(values)
      .then((data) => {
        console.log("Success:", data);
        // Add any navigation or success logic here
        navigate('/Log'); // Redirect to login or success page
      })
      .catch((error) => {
        console.log("Error:", error.response.data);
      });
  };

  return (
    <div className="register">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} // Add Yup validation schema
        onSubmit={handleSubmit}
      >

          <Form className="reg">
            <h1>Create your account</h1>

            <div>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="form-input"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error"
              />
            </div>

            <div>
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="form-input"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error"
              />
            </div>

            <div>
              <Field
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                pattern="[0-9]{10}"
                className="form-input"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="error"
              />
            </div>

            <div>
              <Field
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="form-input"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="error"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="form-input"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error"
              />
            </div>
            <br />

            <button type="submit">Register</button>

            <br />
         
            <p  >
              Have an account? <button className='reglog'onClick={()=>navigate('/log')} > Sign up</button>
            </p>
              
          </Form>
  
      </Formik>
    </div>
  );
};

export default Register;
