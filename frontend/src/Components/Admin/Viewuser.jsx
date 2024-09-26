import React from 'react'
import Adminnav from './Adminnav'

const Viewuser = () => {
  return (
    <div>
      <Adminnav/>
     <center> <h1>User Details</h1></center>
    <div className='view-user'>

    <div className='view-user-container'>

      <div className='user-container'>

        <div className='user-data'> Username</div>

        <div className='user-data'>Email</div>

        <div className='user-data'>Address</div>

        <div className='user-delt'><button>Remove</button></div>

      </div>

      <div className='user-container'>

      <div className='user-data'> Username</div>

        <div className='user-data'>Email</div>

        <div className='user-data'>Address</div>

        <div className='user-delt'><button>Remove</button></div>


      </div>


      <div className='user-container'>

<div className='user-data'> Username</div>

  <div className='user-data'>Email</div>

  <div className='user-data'>Address</div>

  <div className='user-delt'><button>Remove</button></div>


</div>


    </div>

  </div>
  </div>
  )
}

export default Viewuser


