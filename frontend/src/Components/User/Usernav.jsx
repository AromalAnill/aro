import React from 'react'

const Usernav = () => {
  return (
    <div>
     <nav>
       <div className='navbar'>
        <ul className='ul'>
          
       <a href='/User'>Admin page</a>
      <a href="./">Home</a>
      <a href="./Products">Product</a>
      <a href="./Order">Order</a>
      <a href="./Cart">Cart</a>
      <a href="./Contact">Contact</a>
      <a href="./Log">Login</a>
      {/* <button>Logout</button> */}

          
                 
        </ul>
       </div>
       </nav>
    </div>
  )
}

export default Usernav
