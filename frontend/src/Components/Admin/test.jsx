import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userCart_API } from '../../../services/userServices';
import Cookies from "js-cookie"

export const Cart = () => {
  // Access user data from Redux state
  const user = useSelector((state) => state.user.user); // Get the user data
  const userId = user?.id; // Access user id (or fallback to undefined)


  const token =Cookies.get('token')

  console.log(token);
  

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchCart(); // Fetch cart only if user is logged in (userId is present)
    }
  }, [userId]); // Re-fetch when userId changes

  const fetchCart = () => {
    if (!userId) {
      console.error('User ID is missing, cannot fetch cart');
      return;
    }

    userCart_API(userId)
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.error('Error fetching cart:', error);
      });
  };

  // if (!userId) {
  //   return <div>Please log in to view your cart.</div>;
  // }

  return (
    <div>

      <center>
        <h1>Your Cart</h1>
      </center>

      {/* Displaying the user data */}
      <div className="cart-container">
        <div className="cartbox">
          <h1>User ID: {userId}</h1> {/* This will display the user ID */}
          <h1>Email: {token}</h1> {/* Display user email */}

          {/* Cart items */}
          {cart.map((data) => (
            <div key={data._id} className="cart">
              <div className="cart-image">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180"
                  alt="Product"
                />
              </div>
              <div className="cart-details">
                <div className="name">Product Name 2</div>
                <div className="price">$100</div>
                <span className="quantity">
                  <button className="quantity-btn">-</button>
                  <input type="number" />
                  <button className="quantity-btn">+</button>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="cart-summarybox">
          <div className="cart-summary">
            <center>
              <h2>Cart Summary</h2>
            </center>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>$99</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-item">
              <span>Total:</span>
              <span>$99</span>
            </div>
            <button className="checkout-btn">Checkout</button>
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
