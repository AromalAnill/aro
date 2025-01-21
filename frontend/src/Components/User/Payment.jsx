import React from 'react'
import Usernav from './Usernav'

const Payment = () => {
  return (
    <div className='pay'>

     
      <div className='atmcard'> 
      {/* <h1>pay</h1> <br /><br /> */}


        <form action="" >
        <div className='atm'>
         <label htmlFor="">Cardholder Name</label><br />
        <input type="text" placeholder=' Name' required />
        </div>

        <div className='atm'>
         <label htmlFor="">Card Number</label><br />
         <input type="text" placeholder=' ---- ---- ---- ----' required />
         </div>

         <div className='atm'>
         <label htmlFor="">Expiration (mm/yy)</label><br />
         <input type="text" placeholder='Expiration (mm/yy)' required />
         </div>

         <div className='atm'>
         <label htmlFor="">Security Code</label><br />
         <input type="text" placeholder='CVV' required />
         </div> <br />
         <div className='atmpay'>
         <button>Pay</button>

         </div>
         
         
         </form>

       
      </div>
    </div>
  )
}

export default Payment
