const mongoose= require("mongoose")

const postSchema= new mongoose.Schema(
    {
        post:{
            required:true,
            
        },
      image: {
        required:true,
        trim:true
      },
      caption:{
         trim:true,
         required:true,

         },

         user:{
            type
         },
         location:{
              type:String
      },
      tag:{
        type

      },
      created:{
            type:Date
      }
      
    }
)

const Post = mongoose.Model("Post",postSchema)

module.exports = Post