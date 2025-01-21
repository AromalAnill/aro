const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  

    product_name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        maxlength: [50, "Product name cannot exceed 100 characters"],
      },

    product_description: {
        type: String,
        required: [true, "Product description is required"],
        trim: true,
        maxlength: [1000, "Description cannot exceed 1000 characters"],
      },

    // product_img: {
    //     type: [String], 
    //     required: [true, "Product image is required"],
    //   },

    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Price cannot be negative"],
      },

    category: {
        type: String,
        required: [true, "Category is required"],
        // enum: ["Electronics", "Clothing", "Books", "Furniture", "Toys", "Other"], // Example categories
      },

    brand: {
        type: String,
        required: [true, "Brand is required"],
        trim: true,
      },
      stock: {
        type: Number,
        required: [true, "Stock is required"],
        min: [0, "Stock cannot be negative"],
        default: 0,
      },

    // rating: {
    //     type: Number,
    //     required: true,
    //     min: 1,
    //     max: 5,
    //   },
},
{
    timestamps:true

})

const Product = mongoose.model("Product",productSchema)
module.exports = Product