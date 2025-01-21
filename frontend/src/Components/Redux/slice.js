// import { createSlice } from "@reduxjs/toolkit"
// import { jwtDecode } from "jwt-decode";


// const initialState = {
//     user: null, 
//     token:null
//   };
// const userSlice = createSlice({

//     name:"user",
//     initialState,
//     reducers:{

//         setUser(state,action){
//             const token=action.payload
//             state.token=token
//             state.user=jwtDecode(token)
//             console.log("from slice",state.user);
            
//         },

//         clearUser(state){
//             state.token=null
//             state.user=null

//         }
//     }

    
// })
// export const{setUser,clearUser}=userSlice.actions
// export default userSlice.reducer


import { createSlice } from '@reduxjs/toolkit'
import { userData } from '../../../utils/cookieHandiler'



 const userSlice= createSlice({
    name:"authSlice",
    initialState:{
        user:userData() || null
    },
    reducers:{
        loginAction:((state,action)=>{
            state.user = action.payload
            console.log( "from slice login Action", state.user);
        }),
        signupAction:((state,action)=>{
            state.user = action.payload
        }),
        logoutAction:((state,action)=>{
            state.user = null
        }),
        userUpdateAction:((state,action)=>{
            state.user = action.payload
        })
    }

    
})


export const {loginAction,signupAction,logoutAction, userUpdateAction} = userSlice.actions

export default userSlice.reducer