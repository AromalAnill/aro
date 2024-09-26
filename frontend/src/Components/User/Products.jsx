import React from 'react'
import Usernav from './Usernav'

const Products = () => {
  const product =[
    { id:"1", product_name:"product name1", discription:" discription",price:"100$" },
    { id:"2", product_name:"product name2", discription:" discription",price:"100$" },
    { id:"3", product_name:"product name3", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name3", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name4", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name5", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name6", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name7", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name8", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name9", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name10", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name11", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name12", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name13", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name14", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name15", discription:" discripvgvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvdf bvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbtion",price:"100$" },
    { id:"4", product_name:"product name16", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name17", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name18", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name19", discription:" discription",price:"100$" },
    { id:"4", product_name:"product name20", discription:" discription",price:"100$" },
    
  ]
  return (
    <div>
    <Usernav/>
    <div className='productpage'>
      
      {/* <h1>product</h1> */}
     <div className='pro'>
      {/* <div className='p-cont'> */}
      <div class="container">

   {/* ------------------------------------------------------------- */}
{/*    
   <div class="box">
    
    <div className='pimg'>
    <img src=" https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180" alt="" />

    </div>
    <div className='product-name'>
    <h2>Name</h2>
    </div>

<div className='description'>

<p>keeipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium officia, vero eligendi perferendis, explicabo fuga architecto voluptas, ab adipisci minima sit quos quia repellendus libero sequi. Voluptatum, doloremque qui helooo.</p>

  </div>   


   <div className='price'>
   <h3>Price</h3>
   </div>

   </div> */}


   {/* ----------------------------------------------------------- */}
   
    { product.map((element)=>( 
   <div key={element.id} class="box">
    
    <div className='pimg'>
    <img src=" https://tse4.mm.bing.net/th?id=OIP.HW9o-gKESImEapaUq7WbIgHaJQ&pid=Api&P=0&h=180" alt="" />

    </div>
    <div className='product-name'>
    <h2>{element.product_name}</h2>
    </div>

<div className='description'>

<p>{element.discription}</p>

  </div>   

  <br />
   <div className='price'>
   <h3>{element.price}</h3>
   </div>

   <div className='buy-cart'>
    <button className='buy'>Buy</button>
    <button className='add-cart'>Add to cart</button>
   </div>

   </div>


))}

   {/* <div class="box">
    
    <div className='pimg'>
    <img src="" alt="" />
    </div>
    <div className='product-name'>
    <h2>Name</h2>
    </div>

<div className='description'>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium officia, vero eligendi perferendis, explicabo fuga architecto voluptas, ab adipisci minima sit quos quia repellendus libero sequi. Voluptatum, doloremque qui.</p>

  </div>   

  <br />
   <div className='price'>
   <h3>Price</h3>
   </div>

   </div>
   


   <div class="box">
    
    <div className='pimg'>
     <img src="" alt="" />
    </div>
    <div className='product-name'>
    <h2>Name</h2>
    </div>

<div className='description'>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium officia, vero eligendi perferendis, explicabo fuga architecto voluptas, ab adipisci minima sit quos quia repellendus libero sequi. Voluptatum, doloremque qui.</p>

  </div>   
  <br />

   <div className='price'>
   <h3>Price</h3>
   </div>

   </div>



 */}




   {/* --------------------------------------------------------------- */}
   


 
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
 </div>
      </div>
      </div>

    
    </div>
  )
}

export default Products
