


import React, { useEffect, useState } from 'react';

import Usernav from './Usernav';
import { allProduct } from '../../../services/productService';
import { useNavigate } from 'react-router-dom';
import { addCart_API } from '../../../services/userServices';
import { useSelector } from 'react-redux';

const Products = () => {
  const userId = useSelector((state) => state.user.user?.id);
  // console.log("from product userid",userId);
  

  const navigate = useNavigate()

  const handilsubmit=(_id)=>{
    navigate(`/productView/${_id}`)
  }
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
   allProduct().then((data)=>{
    setProduct(data)
   })
   .catch((err)=>console.log(err))
  };
  
  const addCart=(productId)=>{
    addCart_API(userId,productId)
   
  }
  
  return (
    <div>
      <Usernav />
      <div className="productpage">
        <div className="pro">
          <div className="container">
            {product?.map((element) => (
              <div key={element._id} className="box">
                <div className="pimg">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180"
                    alt=""
                  />
                </div>
                <div className="product-name">
                  <h2>{element.product_name}</h2>
                </div>
                {/* <div className="description"> */}
                  {/* <p>{element.product_description}</p> */}
                  <p>{element._id}</p>
                {/* </div> */}
                <br />
                <div className="price">
                  <h3>{element.price +"$"}</h3>
                </div>
                <div className="buy-cart">
                  <button className="buy" onClick={()=>handilsubmit(element._id)} >Buy</button>
                  <button className="add-cart" onClick={()=>addCart(element._id)}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;



