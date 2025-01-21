

// import React, { useEffect, useState } from "react";
// import Usernav from "./Usernav";
// import { useSelector } from "react-redux";
// import { removeCart_API, userCart_API } from "../../../services/userServices";

// export const Cart = () => {
//   const userId = useSelector((state) => state.user.user?.id);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetchCart();
//   }, []); // Only fetch cart when the component mounts

//   const fetchCart = () => {
//     userCart_API(userId)
//       .then((data) => {
//         setCart(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching cart:", error);
//       });
//   };

//   const deleteCart = (cart_id) => {
//     removeCart_API(cart_id)
//       .then(() => {
//         fetchCart(); // Refresh cart after deletion
//       })
//       .catch((error) => console.error("Error deleting cart:", error));
//   };

//   const updateQuantity = (cart_id, newQuantity) => {
//     if (newQuantity <= 10 && newQuantity >= 1) {
//       const updatedCart = cart.map((item) => {
//         if (item._id === cart_id) {
//           return { ...item, quantity: newQuantity };
//         }
//         return item;
//       });
//       setCart(updatedCart); // Update the local state with new quantity

//       // Optionally, send this update to the backend API (if you need)
//       // updateCartQuantity_API(cart_id, newQuantity);
//     }
//   };

//   return (
//     <div>
//       <Usernav />
//       <center>
//         <h1>Your Cart</h1>
//         <h2 className="Cart_number">{cart.length}</h2>
//       </center>

//       <div className="cart-container">
//         <div className="cartbox">
//           {cart.length > 0 ? (
//             cart.map((data) => (
//               <div key={data._id} className="cart">
//                 <div className="cart-image">
//                   <img
//                     src="https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180"
//                     alt=""
//                   />
//                 </div>

//                 <div className="cart-details">
//                   <div className="name"><b>{data.product_name}</b></div>
//                   <div className="price">Price : ${data.price}</div>

//                   <span className="quantity">
//                     <button
//                       className="quantity-btn"
//                       onClick={() => {
//                         if (data.quantity > 1) {
//                           updateQuantity(data._id, data.quantity - 1);
//                         }
//                       }}
//                     >
//                       -
//                     </button>
//                  <div>{data.quantity}</div>
//                     <button
//                       className="quantity-btn"
//                       onClick={() => {
//                         if (data.quantity < 10) {
//                           updateQuantity(data._id, data.quantity + 1);
//                         }
//                       }}
//                     >
//                       +
//                     </button>
//                   </span>

//                   {/* Show a message if quantity reaches maximum limit */}
//                   {data.quantity === 10 && (
//                     <p className="quantity-message">
//                       Maximum quantity reached.
//                     </p>
//                   )}
//                 </div>

//                 <div className="ship-detail">
//                   <div className="charge">Total: ${data.price * data.quantity}</div>
//                   <div className="Address">{data.delivery_address}</div>
//                 </div>

//                 <div className="cart-but">
//                   <button className="cart-button">Buy</button>
//                   <button
//                     className="cart-button"
//                     onClick={() => deleteCart(data._id)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="empty_message">Your cart is empty!</p>
//           )}
//         </div>

//         <div className="cart-summarybox">
//           <div className="cart-summary">
//             <center>
//               <h2>Cart Summary</h2>
//             </center>
//             <div className="summary-item">
//               <span>Subtotal:</span>
//               <span>
//                 ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
//               </span>
//             </div>
//             <div className="summary-item">
//               <span>Shipping:</span>
//               <span>Free</span>
//             </div>
//             <div className="summary-item">
//               <span>Total:</span>
//               <span>
//                 ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
//               </span>
//             </div>
//             <button className="checkout-btn">Checkout</button>
//             <br />
//             <br />
//             <a href="./Payment">
//               <button className="checkout-btn">Proceed to Buy</button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useEffect, useState } from "react";
// import Usernav from "./Usernav";
// import { useSelector } from "react-redux";
// import { placeOrder_inCart_APL, removeCart_API, userCart_API } from "../../../services/userServices";

// export const Cart = () => {
//   const userId = useSelector((state) => state.user.user?.id);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetchCart();
//   }, []); // Only fetch cart when the component mounts

//   const fetchCart = () => {
//     userCart_API(userId)
//       .then((data) => {
//         setCart(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching cart:", error);
//       });
//   };
//   const buy=(cartId,quntity)=>{
//     placeOrder_inCart_APL(userId,cartId,quntity)
//     console.log(cartId);
    
//   }

//   const deleteCart = (cart_id) => {
//     removeCart_API(cart_id)
//       .then(() => {
//         fetchCart(); // Refresh cart after deletion
//       })
//       .catch((error) => console.error("Error deleting cart:", error));
//   };

//   const updateQuantity = (cart_id, newQuantity) => {
//     if (newQuantity <= 10 && newQuantity >= 1) {
//       const updatedCart = cart.map((item) => {
//         if (item._id === cart_id) {
//           return { ...item, quantity: newQuantity };
//         }
//         return item;
//       });
//       setCart(updatedCart); // Update the local state with new quantity

//       // Optionally, send this update to the backend API (if you need)
//       // updateCartQuantity_API(cart_id, newQuantity);
//     }
//   };

//   const showMaxQuantityMessage = (cart_id) => {
//     const updatedCart = cart.map((item) => {
//       if (item._id === cart_id) {
//         return { ...item, showMaxQuantityMessage: true };
//       }
//       return item;
//     });
//     setCart(updatedCart); // Update the state to show the message

//     setTimeout(() => {
//       const updatedCart = cart.map((item) => {
//         if (item._id === cart_id) {
//           return { ...item, showMaxQuantityMessage: false };
//         }
//         return item;
//       });
//       setCart(updatedCart); // Hide the message after 0.5 seconds
//     }, 500); // 0.5 second timeout
//   };

//   return (
//     <div>
//       <Usernav />
//       <center>
//         <h1>Your Cart</h1>
//         <h2 className="Cart_number">{cart.length}</h2>
//       </center>

//       <div className="cart-container">
//         <div className="cartbox">
//           {cart.length > 0 ? (
//             cart.map((data) => (
//               <div key={data._id} className="cart">
//                 <div className="cart-image">
//                   <img
//                     src="https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180"
//                     alt=""
//                   />
//                 </div>

//                 <div className="cart-details">
//                   <div className="name"><b>{data.product_name}</b></div>
//                   <div className="price">Price : ${data.price}</div>

//                   <span className="quantity">
//                     <button
//                       className="quantity-btn"
//                       onClick={() => {
//                         if (data.quantity > 1) {
//                           updateQuantity(data._id, data.quantity - 1);
//                         }
//                       }}
//                     >
//                       -
//                     </button>
//                     <div>{data.quantity}</div>
//                     <button
//                       className="quantity-btn"
//                       onClick={() => {
//                         if (data.quantity < 10) {
//                           updateQuantity(data._id, data.quantity + 1);
//                         } else {
//                           showMaxQuantityMessage(data._id); // Show message when quantity is max
//                         }
//                       }}
//                     >
//                       +
//                     </button>
//                   </span>

                 
//                 </div>

//                 <div className="ship-detail">
//                    {/* Show a message if quantity reaches maximum limit */}
//                    {data.showMaxQuantityMessage && (
//                     <p className="quantity-message">
//                       Maximum quantity reached.
//                     </p>
//                   )}
//                   <div className="charge">Total: ${data.price * data.quantity}</div>
//                   <div className="Address">{data.delivery_address}</div>
//                   <div className="Address">{data._id}</div>
//                 </div>

//                 <div className="cart-but">
//                   <button className="cart-button"  onClick={()=>buy(data._id,data.quantity)}  >Buy</button>
//                   <button
//                     className="cart-button"
//                     onClick={() => deleteCart(data._id)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="empty_message">Your cart is empty!</p>
//           )}
//         </div>

//         <div className="cart-summarybox">
//           <div className="cart-summary">
//             <center>
//               <h2>Cart Summary</h2>
//             </center>
//             <div className="summary-item">
//               <span>Subtotal:</span>
//               <span>
//                 ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
//               </span>
//             </div>
//             <div className="summary-item">
//               <span>Shipping:</span>
//               <span>Free</span>
//             </div>
//             <div className="summary-item">
//               <span>Total:</span>
//               <span>
//                 ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
//               </span>
//             </div>
//             <button className="checkout-btn">Checkout</button>
//             <br />
//             <br />
//             <a href="./Payment">
//               <button className="checkout-btn">Proceed to Buy</button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import Usernav from "./Usernav";
import { useSelector } from "react-redux";
import { placeOrder_inCart_API, removeCart_API, userCart_API } from "../../../services/userServices";

export const Cart = () => {
  const userId = useSelector((state) => state.user.user?.id);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []); // Only fetch cart when the component mounts

  const fetchCart = () => {
    userCart_API(userId)
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
      });
  };

  // cartprice function calculates the total price of a specific item in the cart
  const cartprice = (price, quantity) => {
    return price * quantity;
  };

// =================================Buy All Cartitems===============================================
  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  // const buyAll_Cart=()=>{
  //   const totalPrice = calculateTotalPrice()
  //   console.log(totalPrice);
    
  // }
  const buyAll_Cart = () => {
    // if (cart.length === 0) {
    //   console.log("No items in the cart to checkout.");
    //   return;
    // }
  
    const cartPromises = cart.map((item) => {
      const totalPrice = cartprice(item.price, item.quantity); // Price * Quantity for each item
      const cartData = {
        cartId: item._id,
        quantity: item.quantity,
        totalPrice,
      };
      return placeOrder_inCart_API(userId, cartData);
    });
  
    Promise.all(cartPromises)
      .then(() => {
        console.log("All items have been purchased.");
        fetchCart(); // Refresh the cart after checkout
      })
      .catch((error) => {
        console.error("Error purchasing items:", error);
      });
  };
  

  // ==================================================================================================


  // ========================================Buy 1 Item From Cart=======================================
  const buy = (cartId, quantity, price) => {
    // Calculate the total price based on the item being bought
    const totalPrice = cartprice(price, quantity); // Price * Quantity for the specific item
    console.log("Total Price for this item:", totalPrice);
    const cartData={cartId,quantity,totalPrice}
    console.log(cartData);
    
    placeOrder_inCart_API(userId,cartData)
    .then(() => {
      fetchCart(); // Refresh cart after deletion
    })
    
    .catch((error) => {
      console.error("Error placing order:", error);
    });
  };
  
  // ===================================================================================================


  const deleteCart = (cart_id) => {
    removeCart_API(cart_id)
      .then(() => {
        fetchCart(); // Refresh cart after deletion
      })
      .catch((error) => console.error("Error deleting cart:", error));
  };

  const updateQuantity = (cart_id, newQuantity) => {
    if (newQuantity <= 10 && newQuantity >= 1) {
      const updatedCart = cart.map((item) => {
        if (item._id === cart_id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCart(updatedCart); // Update the local state with new quantity
    }
  };

  const showMaxQuantityMessage = (cart_id) => {
    const updatedCart = cart.map((item) => {
      if (item._id === cart_id) {
        return { ...item, showMaxQuantityMessage: true };
      }
      return item;
    });
    setCart(updatedCart); // Update the state to show the message

    setTimeout(() => {
      const updatedCart = cart.map((item) => {
        if (item._id === cart_id) {
          return { ...item, showMaxQuantityMessage: false };
        }
        return item;
      });
      setCart(updatedCart); // Hide the message after 0.5 seconds
    }, 500); // 0.5 second timeout
  };

  return (
    <div>
      <Usernav />
      <center>
        <h1>Your Cart</h1>
        <h2 className="Cart_number">{cart.length}</h2>
      </center>

      <div className="cart-container">
        <div className="cartbox">
          {cart.length > 0 ? (
            cart.map((data) => (
              <div key={data._id} className="cart">
                <div className="cart-image">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180"
                    alt=""
                  />
                </div>

                <div className="cart-details">
                  <div className="name"><b>{data.product_name}</b></div>
                  <div className="price">Price : ${data.price}</div>

                  <span className="quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => {
                        if (data.quantity > 1) {
                          updateQuantity(data._id, data.quantity - 1);
                        }
                      }}
                    >
                      -
                    </button>
                    <div>{data.quantity}</div>
                    <button
                      className="quantity-btn"
                      onClick={() => {
                        if (data.quantity < 10) {
                          updateQuantity(data._id, data.quantity + 1);
                        } else {
                          showMaxQuantityMessage(data._id); // Show message when quantity is max
                        }
                      }}
                    >
                      +
                    </button>
                  </span>

                </div>

                <div className="ship-detail">
                   {/* Show a message if quantity reaches maximum limit */}
                   {data.showMaxQuantityMessage && (
                    <p className="quantity-message">
                      Maximum quantity reached.
                    </p>
                  )}
                  <div className="charge">
                    Total: ${cartprice(data.price, data.quantity)}
                  </div>
                  <div className="Address">{data.delivery_address}</div>
                  <div className="Address">{data._id}</div>
                </div>

                <div className="cart-but">
                  <button className="cart-button" onClick={() => buy(data._id, data.quantity, data.price)}>
                    Buy
                  </button>
                  <button
                    className="cart-button"
                    onClick={() => deleteCart(data._id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty_message">Your cart is empty!</p>
          )}
        </div>

        <div className="cart-summarybox">
          <div className="cart-summary">
            <center>
              <h2>Cart Summary</h2>
            </center>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${calculateTotalPrice()}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-item">
              <span>Total:</span>
              <span>${calculateTotalPrice()}</span>
            </div>
            <button className="checkout-btn" onClick={()=>buyAll_Cart()}>Checkout</button>
            <br />
            <br />
            <a href="./Payment">
              <button className="checkout-btn">Proceed to Buy</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
