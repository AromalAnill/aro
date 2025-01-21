
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './admin.css';
import Adminnav from './Adminnav';
import { addProduct } from '../../../services/adminService';

const Addproduct = () => {
  const initialValues = {
    product_name: '',
    product_description: '',
    price: '',
    category: '',
    brand: '',
    stock: '',
    // image: null,
  };

  const validationSchema = Yup.object({
    product_name: Yup.string().required('Name is required'),
    product_description: Yup.string().required('Description is required'),
    price: Yup.number()
      .typeError('Price must be a number')
      .positive('Price must be positive')
      .required('Price is required'),
    category: Yup.string().required('Category is required'),
    brand: Yup.string().required('Brand is required'),
    stock: Yup.number()
      .typeError('Stock must be a number')
      .integer('Stock must be an integer')
      .positive('Stock must be positive')
      .required('Stock is required'),
    // image: Yup.mixed().required('Image is required'),
  });

  const handleSubmit = (values,{resetForm}) => {
    
    addProduct(values)
    .then((data) => {
      resetForm()
      console.log('Product added successfully:', data);
    })
    .catch((error)=>{
      console.log("Error",error.response.data)
    })
    console.log("values enterd",values);
  };

  return (
    <div>
      <Adminnav />
      <div className="addproduct">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="add">
              <h1>Add New Product</h1>

              <div>
                <Field type="text" name="product_name" placeholder="Name" />
                <ErrorMessage name="product_name" component="div" className="error" />
              </div>

              <div>
                <Field
                  type="text"
                  name="product_description"
                  placeholder="Description"
                />
                <ErrorMessage
                  name="product_description"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                {/* <input
                  type="file"
                  onChange={(event) =>
                    setFieldValue('image', event.target.files[0])
                  }
                />
                <ErrorMessage name="image" component="div" className="error" /> */}
              </div>

              <div>
                <Field type="text" name="price" placeholder="Price" />
                <ErrorMessage name="price" component="div" className="error" />
              </div>

              <div>
                <Field type="text" name="category" placeholder="Category" />
                <ErrorMessage
                  name="category"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <Field type="text" name="brand" placeholder="Brand" />
                <ErrorMessage name="brand" component="div" className="error" />
              </div>

              <div>
                <Field type="text" name="stock" placeholder="Stock" />
                <ErrorMessage name="stock" component="div" className="error" />
              </div>

             <div className='add_btn'>
             <button type="submit">Add</button>
             </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Addproduct;



// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import './admin.css';
// import Adminnav from './Adminnav';
// import { addProduct } from '../../../services/adminService';

// const Addproduct = () => {
//   const initialValues = {
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     brand: '',
//     stock: '',
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required('Name is required'),
//     description: Yup.string().required('Description is required'),
//     price: Yup.number()
//       .typeError('Price must be a number')
//       .positive('Price must be positive')
//       .required('Price is required'),
//     category: Yup.string().required('Category is required'),
//     brand: Yup.string().required('Brand is required'),
//     stock: Yup.number()
//       .typeError('Stock must be a number')
//       .integer('Stock must be an integer')
//       .positive('Stock must be positive')
//       .required('Stock is required'),
//   });

//   const handleSubmit = (values) => {
//     console.log('Form values before submission:', values);

//     addProduct(values)
    
//     .then((data) => {
//       console.log('Product added successfully:', data);
//         alert('Product added successfully!');
//       })
//       .catch((error) => {
//         console.error('Error:', error.response?.data || error.message);
//         console.log(values);
//         // alert(`Failed to add product: ${error.response?.data?.message || error.message}`);
//       });
//   };

//   return (
//     <div>
//       <Adminnav />
//       <div className="addproduct">
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {() => (
//             <Form className="add">
//               <h1>Add New Product</h1>

//               <div>
//                 <Field type="text" name="name" placeholder="Name" />
//                 <ErrorMessage name="name" component="div" className="error" />
//               </div>

//               <div>
//                 <Field type="text" name="description" placeholder="Description" />
//                 <ErrorMessage name="description" component="div" className="error" />
//               </div>

//               <div>
//                 <Field type="text" name="price" placeholder="Price" />
//                 <ErrorMessage name="price" component="div" className="error" />
//               </div>

//               <div>
//                 <Field type="text" name="category" placeholder="Category" />
//                 <ErrorMessage name="category" component="div" className="error" />
//               </div>

//               <div>
//                 <Field type="text" name="brand" placeholder="Brand" />
//                 <ErrorMessage name="brand" component="div" className="error" />
//               </div>

//               <div>
//                 <Field type="text" name="stock" placeholder="Stock" />
//                 <ErrorMessage name="stock" component="div" className="error" />
//               </div>

//               <div className="add_btn">
//                 <button type="submit">Add</button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Addproduct;


