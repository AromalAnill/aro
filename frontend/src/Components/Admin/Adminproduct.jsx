import React, { useEffect, useState } from 'react'
import Adminnav from './Adminnav'
import axios from 'axios';
import { BASE_URL } from '../../../utils/url';
import { adminDeleteproduct, adminViewproduct } from '../../../services/adminService';


const Adminproduct = () => {

 
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
      fetchProduct();
    }, [product]);

    const fetchProduct = () => {
      adminViewproduct()
        .then((data) => {
          setProduct(data); 
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };
  
    // const fetchProduct = async () => {
    //   try {
    //     const product = await axios.get(`${BASE_URL}/user/allProducts`);
    //     setProduct(product.data); // Assuming product.data contains the product list
    //   } catch (error) {
    //     console.error("Error fetching products:", error);
    //   }
    // };

    
const deleteProduct = (_id)=>{
  adminDeleteproduct(_id).then(()=>{
    console.log("Product deleted sussesfully");     
  })
  .catch((error)=>console.log(error))
}

// const deleteProduct = async(_id)=>{
  // try{
  //  await axios.delete(`${BASE_URL}/admin/deleteProduct`,{data:{_id}})
  
  //   fetchProduct()
  // }
  // catch (error){    
  //   console.log("user not deleted due to error ",error);
    
  // }
  // }


  return (
    <div>
      <Adminnav/>
    <div className='productpage'>
      
     <div className='pro'>
     
      <div className="container">

   {

    product?.map((data)=>(
    
   <div key={data._id} className="box">
    
   <div className='pimg'>
   <img src=" https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180" alt="" />

   </div>
   <div className='product-name'>
   <h2>{data.product_name}</h2>
   </div>

<div className='description'>

<p>{data.product_description}</p>


 </div>  

  <div className='price'>
  <h3>{data.price +"$"}</h3>
  
  </div>
  <div className='product-remove'>
   <button onClick={()=>{deleteProduct(data._id)}}>Remove</button>
  </div>

  </div>
    ))
   }


 </div>
      </div>
      </div>

    </div>
  )
}

export default Adminproduct

