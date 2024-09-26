import React from 'react'

const Register = () => {
  return (
   
    // <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
      <div className='register' > 
         <form action=""  className='reg'>

       <h1> Create your account</h1>
<input type="Email" name="" id="" placeholder='Email'  required/> <br /><br />
<input type="text" name="" id="" placeholder='Username' required/> <br /><br />
<input type="tel" name="" id="" placeholder='Phone' pattern="[0-9]{10}" required/> <br /><br />
<input type="text" name="" id="" placeholder='Address' required/><br /><br />
<input type="password" name="" id="" placeholder='Password'/> <br /><br />


<button> Register</button><br />
<p>Have an account <a href="./Log">Sign Up</a></p>
</form>


</div>
    
  )
}

export default Register
