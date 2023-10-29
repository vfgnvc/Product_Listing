
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
 category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
 subCategory: { type: String },
  
 
// category:{type:String}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
