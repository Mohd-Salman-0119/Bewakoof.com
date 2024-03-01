const { mongoose } = require("../imports/modules.imports")
const productSchema = new mongoose.Schema({
     image: {
          type: String,
          required: true
     },
     name: {
          type: String, required: true
     },
     discounted_price: {
          type: Number,
          required: true
     },
     original_price: {
          type: Number,
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
     size: {
          type: String,
          required: true
     },
     brand: {
          type: String,
          required: true
     },
     color: {
          type: String,
          required: true
     },
     design: {
          type: String,
          required: true
     },
     rating: {
          type: Number,
          required: true
     }
});

const ProductModel = mongoose.model('products', productSchema)

module.exports = { ProductModel }