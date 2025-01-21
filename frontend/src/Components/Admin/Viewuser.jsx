// import React, { useEffect, useState } from 'react'
// import Adminnav from './Adminnav'
// import axios from 'axios'
// import { adminDeleteuser, adminViewuser } from '../../../services/adminService'

// const Viewuser = () => {

// const [ users , setUers ] = useState([])

// useEffect(()=>{

//   fetchUser()
// },[users]) 



// const fetchUser = () => {
//   adminViewuser()
//     .then((data) => {
//       setUers(data); 
//     })
//     .catch((error) => {
//       console.error("Error fetching products:", error);
//     });
// };
  
// // const fetchUser = async()=>{
// // try{
  
// //   const response = await axios.get("http://localhost:5002/admin/viewUser")
// //   setUers(response.data)
// // }
// // catch(error){
// //   console.error("Error fetching user:", error);
// // }
// // }

// // const deleteUser = async(_id)=>{
// // try{
// //  await axios.delete("http://localhost:5002/admin/deleteUser",{data:{_id}})
// //   fetchUser()
// // }
// // catch (error){    
// //   console.log("user not deleted due to error ",error);
// // }}
// const deleteUser = (id)=>{
//   console.log("hi",id);
  
//   adminDeleteuser(id).then((data)=>{
//     console.log(data);
    
//   })
//   .catch((error)=>console.log(error))
// }

//   return (
//     <div>
//       <Adminnav/>
//      <center> <h1>User Details</h1></center>
//     <div className='view-user'>

//     <div className='view-user-container'>

//      {
//       users?.map((user)=>(

//         <div key = {user.id} className='user-container'>

//         <div className='user-data'> {user.username}</div>

//         <div className='user-data'>{user._id}</div>
//         <div className='user-data'>{user.email}</div>

//         <div className='user-data'>{user.address}</div>

//         <div className='user-delt'><button onClick={()=>deleteUser(user._id)}>Remove</button></div>

//       </div>
//       ))
//      }




//     </div>

//   </div>
//   </div>
//   )
// }

// export default Viewuser


import React, { useEffect, useState } from 'react';
import Adminnav from './Adminnav';
import { adminDeleteuser, adminViewuser } from '../../../services/adminService';

const Viewuser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []); // Avoid infinite loop by not including `users` in the dependency array.

  const fetchUser = () => {
    adminViewuser()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const deleteUser = (id) => {
    adminDeleteuser(id)
      .then(() => {
        fetchUser(); // Re-fetch users after deletion
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div>
      <Adminnav />
      <center>
        <h1>User Details</h1>
      </center>
      <div className="view-user">
        <div className="view-user-container">
          {users?.map((user) => (
            <div key={user._id} className="user-container"> {/* Changed key to user._id */}
              <div className="user-data">{user.username}</div>
              <div className="user-data">{user._id}</div>
              <div className="user-data">{user.email}</div>
              <div className="user-data">{user.address}</div>
              <div className="user-delt">
                <button onClick={() => deleteUser(user._id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Viewuser;
