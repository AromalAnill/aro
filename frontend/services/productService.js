import axios from "axios";
import { BASE_URL } from "../utils/url";


export const allProduct = async()=>{
    const response = await axios.get(`${BASE_URL}/user/allProducts`)
    return response.data
}

export const viewProduct = async(_id)=>{

    const responce = await axios.get(`${BASE_URL}/user/selectedproduct/${_id}`)
    return responce.data
}

