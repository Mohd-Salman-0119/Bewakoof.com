const { mongoose } = require("../imports/modules.imports")
const productSchema = new mongoose.Schema({
     name: {
          type: String, required: true
     },
     discounted_price: {
          type: Number,
          required: true
     },
     currency: {
          type: String,
          required: true
     },
     price: {
          type: String,
          required: true
     },
     offer: {
          type: String,
          required: true
     },
     category: {
          type: String,
          required: true
     },
     rating: {
          type: String,
          required: true
     },
     design: {
          type: String,
          required: true
     },
     avatar: {
          type: String, // Array of image URLs
          required: true
     },
     color: {
          type: String,
          required: true
     },
     size :{
          type: String,
          required: true
     },
     brand: {
          type: String,
          required: true
     }
});

const ProductModel = mongoose.model('products', productSchema)

module.exports = { ProductModel }