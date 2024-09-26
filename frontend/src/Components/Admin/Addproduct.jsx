import React from 'react'
import './admin.css'
import Adminnav from './Adminnav'
const Addproduct = () => {
  return (
    <div>
      <Adminnav/>
       <div className='addproduct' > 
         <form action=""  className='add'>

       <h1> Add New Product</h1>

<input type="Email" name="" id="" placeholder='Name'  required/> <br /><br />
<input type="text" name="" id="" placeholder='Discription' required/> <br /><br />
<input type="file" /><br /><br />
<input type="text" name="" id="" placeholder='Price'/> <br /><br />


<button> Add</button><br />

</form>



</div>
      
    </div>
  )
}

export default Addproduct
