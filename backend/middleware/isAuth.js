const jwt = require("jsonwebtoken")
require("dotenv").config()



const isAuth = (req,res,next)=>{
    // const {token} = req.cookies
 
    const token = req.headers['authorization']?.split(' ')[1];

    


    if(!token){
        throw new Error("Token does't Exist ")
    }

    const decoded = jwt.decode (token,process.env.JWT_SCRETE_KEY)

 

    
 
    req.user = {
        id:decoded._id,
        email:decoded.email
    }

   
    
next()
}
module.exports=isAuth

// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const isAuth = (req, res, next) => {
//     const { token } = req.cookies;

//     console.log("token =",token);
    

//     if (!token) {
//       throw new  Error( "Token doesn't exist" )
//     }

//     try {
//         // Use jwt.verify instead of jwt.decode to validate the token
//         const decoded = jwt.decode
//         (token, process.env.JWT_SECRET_KEY); // Corrected key name to JWT_SECRET_KEY
//         console.log("Decoded =", decoded);

//         req.user = {
//             email: decoded.email,
//             id: decoded._id // Use the field name you used when signing the token
//         };
//              console.log(req.user);
             
//         next();
//     } catch (error) {
//         // Handle invalid token or expired token error
//         throw new  Error( "Token is not valid or has expired" )
     
//     }
// };

// module.exports = isAuth;
