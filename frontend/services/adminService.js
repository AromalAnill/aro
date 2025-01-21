import axios from "axios";
import { BASE_URL } from "../utils/url";


export const adminViewuser= async()=>{
    const response = await axios.get(`${BASE_URL}/admin/viewUser`)
    return response.data
    
}


export const adminDeleteuser= async(id)=>{

    
    const response = await axios.delete(`${BASE_URL}/admin/deleteUser`,{data:{id}})
    console.log(response.data);
    
   return response.data
}

export const adminViewproduct= async()=>{
    const response = await axios.get(`${BASE_URL}/admin/adminAllproduct`)
    return response.data
    
}



export const adminDeleteproduct= async(_id)=>{
    const response = await axios.delete(`${BASE_URL}/admin/deleteProduct`,{data:{_id}})
    response.data
}


export const addProduct = async(data)=>{
    const responce = await axios.post(`${BASE_URL}/admin/addproduct`,data)

    return responce.data

    
}

