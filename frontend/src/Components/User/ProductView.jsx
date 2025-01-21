import React, { useEffect, useState } from 'react'
import Usernav from './Usernav'
import { viewProduct } from '../../../services/productService'
import { useNavigate, useParams } from 'react-router-dom'
import { placeOrder_API, } from '../../../services/userServices'
import { useSelector } from 'react-redux'


const ProductsView = () => {
  const userId=useSelector((state)=>state.user.user?.id)
  console.log("useID from product view",userId);
  
  const {_id}= useParams()
  const [details ,setdetails] = useState([])


  const navigate = useNavigate()

  const handleChange=()=>{
    navigate("/Payment")
  }
  const addOrder=(productId)=>{
    console.log(productId);
    placeOrder_API(userId,productId)
    
  }
  useEffect(()=>{
    fetchProducts(_id)
  },[])


  const fetchProducts=(_id)=>{
    viewProduct(_id).then((data)=>{
      setdetails(data)
      // console.log(data);
      

    })
    .catch((err)=>console.log(err))


  }
  return (
    <div>
    <Usernav/>
    <div className='viewProduct'>
    <div className=' product_heading' >
             <h1 >product details</h1>
             </div>
    <div className='viewProduct_container'>


            <div className='product_img_container'>
              
              <div className='view_image'>

              <img
                    src="https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180"
                    alt=""
                  />
                
              </div>
              
              </div> 


              <div >

              <div className="product_data_container">

            <div className="product_details">
            
              <div className="product_name"> Name : {details.product_name}</div>
              <div className="product_price"> Price: {details.price} </div>
              <div className="product_description">  <strong>Discription: </strong>{details.product_description} </div> 
              <div className="product_category">
                <strong>Category:</strong> {details.category}
              </div>
              <div className="product_category">
                <strong>Category:</strong> {details._id}
                <strong>Category:</strong> {details.brand}
              </div>
              <div className="product_availability">
                <strong>Availability:</strong> {details.stock}
              </div>
              <div className='direct_buy'> 
                <button className="direct_buy-btn" onClick={handleChange} >Make payment</button>  
                <button className="direct_buy-btn" onClick={()=>addOrder(details._id)}  >Proceed to Buy</button>  
                </div>
            </div>
            </div>

              </div>

              </div>

    </div>
      
     
    
    </div>
  )
}

export default ProductsView
