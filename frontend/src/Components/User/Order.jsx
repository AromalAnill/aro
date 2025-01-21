// import React, { useEffect, useState } from 'react'
// import Usernav from './Usernav'
// import { userOrder_APL } from '../../../services/userServices'

// const Order = () => {
  
//   const [ order,setOrder]=useState([])

//   useEffect(()=>{
//     fetchOrder()
//   },[order])

//   const fetchOrder=()=>{
//     userOrder_APL().then((data)=>{
//       setOrder(data)
//     })
//     .catch((error) => {
//       console.error("Error fetching Order:", error);
//     });
      
//   }
//   return (
//     <div>
//       <Usernav/>
      
// <center><h1>your orders</h1></center>

//       <div className="order-container">

// {/* .................................................................................. */}

// {  order?.map((data)=>(
  
//   <div className="order">

//     <div className="order-image">
//     <img src="https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180" alt="Product order-image"/>
//     </div>

//     <div className="order-details">

//       <div className="name">Product Name 2</div>
//       <div className="price">$100</div>
//       <div className="shipping">quantity</div>

//     </div>

//     <div className='order-ship-detail'>

// <div className="shipdate">shiping status</div>
// <div className="arriving ">shipping address</div>

// </div>
//     <div>
//     <button className="odr-cancel-but">cancel</button>
//     </div>
//   </div>
//   ))}

// </div>

    
//    </div>
//   )
// }

// export default Order


import React, { useEffect, useState } from "react";
import Usernav from "./Usernav";
import { removeOrder_API, userOrder_APL } from "../../../services/userServices";
import { useSelector } from "react-redux";

const Order = () => {
  const userId = useSelector((state)=>state.user.user?.id)
  console.log("from order",userId);
  
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = () => {
   userOrder_APL(userId)
         .then((data) => {
           setOrder(data);
         })
         .catch((error) => {
           console.error("Error fetching order:", error);
         });
  };


  

  const deleteOrder = (orderId) => {
    // console.log("delet order",orderId);
    
     removeOrder_API(orderId)
        .then(() => {
          fetchOrder (); // Re-fetch users after deletion
        })
        .catch((error) => console.error("Error deleting cart:", error));
    };


  return (
    <div>
      <div>
      <Usernav />
      <center>
        <h1>Your Orders</h1>
      </center>
      <div className="order-container">
        {order?.length > 0 ? (
          order.map((data) => (
            <div className="order" key={data._id}>
              <div className="order-image">
              <img src=" https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="order-details">
                <div className="name"><b>{data.product_name}</b></div>
                <div className="price">Total price ${data.price}</div>
                <div className="shipping">Quantity : {data.quantity}</div>
              </div>
              <div className="order-ship-detail">
                <div className="shipdate">{data.shiping_status}</div>
                <div className="arriving">Address :  {data.address}</div>
              </div>
              <div>
                <button className="odr-cancel-but"onClick={()=>deleteOrder(data._id)} >Cancel</button>
        </div>
              </div>
          ))
        ) : (
          <p className="empty_message">No orders found</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Order;
