import axios from "axios";
import { BASE_URL } from "../utils/url";
import { getToken } from "../utils/cookieHandiler";




export const registeration= async(data)=>{

  const response =  await axios.post(`${BASE_URL}/user/register`,data)
    return response.data
}



export const login_API = async(data)=>{
    const response = await axios.post(`${BASE_URL}/user/login`,data)
    // console.log(data);
    
    return response.data
    
}


export const userCart_API = async(userId)=>{
  const token=getToken()
  const responce = await axios.get(`${BASE_URL}/user/userCart/${userId}`,{
   headers:{
    authorization:`Bearer ${token}`
  }
})
   console.log("all carts",responce.data);
   
  return responce.data

  
}


export const addCart_API =async(userId,productId)=>{
  const token=getToken()
  const responce = await axios.post(`${BASE_URL}/user/addcart/${userId}`,{productId},{
    headers:{
      authorization:`Bearer ${token}`
    }
  })
  console.log(responce.data);
  return responce.data

}

export const removeCart_API = async(cart_id)=>{
  // console.log("remove from service",cart_id);
  
  const response = await axios.delete(`${BASE_URL}/user/deleteCart`,{data:{cart_id}})
    console.log(response);
    
   return response.data

}



export const userOrder_APL = async(userId)=>{
  console.log("from service order",userId);
  const token =getToken()
 const response = await axios.get(`${BASE_URL}/user/userOrder/${userId}`,{
   headers:{
     authorization:`Bearer ${token}`
   }
 })
 console.log(response.data);
 
 return response.data
}
export const placeOrder_API = async(userId,productId)=>{
  console.log("productid from service for place order",productId);
  console.log("Userid from service for place order",userId);
  
   const token =getToken()
  const response = await axios.post(`${BASE_URL}/user/placeOrder/${userId}`,{productId},{
    headers:{
      authorization:`Bearer ${token}`
    }
  })
  console.log(response.data);
  
  return response.data
}

export const removeOrder_API = async(orderId)=>{
  // console.log("remove from service",cart_id);
  
  const response = await axios.delete(`${BASE_URL}/user/removeOrder`,{data:{orderId}})
    console.log(response);
    
   return response.data

}


export const placeOrder_inCart_API = async(userId,cartData)=>{
  console.log("cartData from service for place order",cartData)

  
   const token =getToken()
  const response = await axios.post(`${BASE_URL}/user/buy_cart_Order/${userId}`,{cartData},{
    headers:{
      authorization:`Bearer ${token}`
    }
  })
  console.log(response.data);
  
  return response.data
}



