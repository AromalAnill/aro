

import React from 'react'

const Log = () => {
  return (
    // <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
   <div className='login'>
    <form action="" className='lo'>

       <h1>Sign Up</h1>
      <input type="text" name="" id="" placeholder='Username' required /> <br />
      {/* <input type="Email" name="" id="" placeholder='Email' /> <br /> */}
      <input type="password" name="" id="" placeholder='Password'/> <br />
      {/* <a href="">Forget password</a> <br /><br /> */}
      <button> Login</button>
      <p>Don't have an account  <a href="./Register">Register</a> </p>
      
      </form>


   
      
    </div>
  )
}

export default Log
