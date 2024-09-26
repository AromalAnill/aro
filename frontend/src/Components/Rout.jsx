import React from 'react'
import { BrowserRouter as Router, Link, Route,  Routes } from 'react-router-dom'
// import './App.css'
import Home from './User/Home'
import Contact from './User/Contact'
import Products from './User/Products'
import Order from './User/Order'
import Log from './Login/Log'
import Register from './User/Register'
import User from './Admin/User'
import Payment from './User/Payment'
import Addproduct from './Admin/Addproduct'
import Adminproduct from './Admin/Adminproduct'
import Cart from './User/Cart'
import Userprofile from './User/Userprofile'
import Viewuser from './Admin/Viewuser'

 
const Rout = () => {
  return (

          <div className='page'>
    
    <Router>
     
       {/* <nav>
       <div className='navbar'>
        <ul className='ul'>
          

        <Link to='/User'>Admin page</Link>
                    
            <Link to='/'>Home</Link>
            <Link to='/Userprofile'>Profile</Link>
           
                 
                    
          <Link to='/Products'>Products</Link>
                 
                    
          <Link to='/Order'>Orders</Link>
                 
                    
          <Link to='/Contact'>Contact</Link>
                 
          <Link to='/Cart'>Cart</Link>
                    
          <Link to='/Log'>Login</Link>
          
          


          
                 
        </ul>
       </div>
       </nav> */}


       <Routes>
        <Route path='/' element={<Home/>} > </Route>
        <Route path='/Products' element={<Products/>} > </Route>
        <Route path='/Order' element={<Order/>} > </Route>
       
        <Route path='/Contact' element={<Contact/>} > </Route>
        <Route path='/Log' element={<Log/>} > </Route>
        <Route path='/Register' element={<Register/>} > </Route>
        <Route path='/Payment' element={<Payment/>} > </Route>
        <Route path='/Userprofile' element={<Userprofile/>} > </Route>
        <Route path='/User' element={<User/>} > </Route>
        <Route path='/Addproduct' element={<Addproduct/>} > </Route>
        <Route path='/Cart' element={<Cart/>} > </Route>
        <Route path='/Adminproduct' element={<Adminproduct/>} > </Route>
        <Route path='/Viewuser' element={<Viewuser/>} > </Route>
            
       </Routes>

      
     </Router> 
     {/* --------------------------------------------------------------------------------- */}
     
     
   
     </div>
  
  )
}

export default Rout
