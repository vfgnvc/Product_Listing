
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
