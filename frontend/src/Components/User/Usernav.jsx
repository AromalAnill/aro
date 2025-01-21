import React from 'react'
import { useNavigate } from 'react-router-dom'

const Usernav = () => {
const navigate = useNavigate()
const handleNavigation =(path)=>{
  navigate(path)
}
 
  return (
    <div>
     <nav>
       <div className='navbar'>
        <ul className='ul'>
          
       <a onClick={()=>handleNavigation('/')}>Home </a>
       <a onClick={()=>handleNavigation('/User')}>Admin page</a>
       <a onClick={()=>handleNavigation('/Products')}>Product</a>
       <a onClick={()=>handleNavigation('/Order')}>Order </a>
       <a onClick={()=>handleNavigation('/Cart')}>Cart</a>
       <a onClick={()=>handleNavigation('/Contact')}>Contact</a>
       <a onClick={()=>handleNavigation('/Log')}>Login</a>
     
      {/* <a href="/productView">View Product</a> */}
      {/* <a href="/Order">Order</a>
      <a href="/Cart">Cart</a>
      <a href="/Contact">Contact</a>
      <a href="/Log">Login</a> */}
      {/* <button>Logout</button> */}

          
                 
        </ul>
       </div>
       </nav>
    </div>
  )
}

export default Usernav
