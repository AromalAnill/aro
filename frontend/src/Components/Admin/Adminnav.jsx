import React from 'react'

const Adminnav = () => {
  return (
    <div>
        <nav>
       <div className='navbar'>
        <ul className='ul'>
          

      {/* <a href="./">Home</a> */}
      <a href="./Addproduct">AddProduct</a>
      <a href="./Adminproduct">Adminproduct</a>
      <a href="./Viewuser">Viewuserss</a>
      <a href='/Test'>test</a>
      <a href='/'>Home</a>
      {/* <button>Logout</button> */}

          
                 
        </ul>
       </div>
       </nav>

    </div>
  )
}

export default Adminnav
