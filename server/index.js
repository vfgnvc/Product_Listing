const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/abi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Category = require('./models/Category'); 
const Product = require('./models/Product');   

app.post('/api/categories', async (req, res) => {
  try {
    const { name } = req.body;

    const category = new Category({ name });

    await category.save();

    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Error creating category' });
  }
});

  
  
  app.post('/api/products', async (req, res) => {
    try {
      const { name, category,subCategory } = req.body;
      const product = new Product({ name, category,subCategory});
      await product.save();
  
      const categoryToFind = await Category.findById(category);
      categoryToFind.products.push(product._id);
      categoryToFind.subcategories.push(product._id);
      await categoryToFind.save();
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error adding product' });
    }
  });

  // app.post('/api/products', async (req, res) => {
  //   try {
  //     const { name, category } = req.body;
  
  //     // Ensure the category exists (you may need to import the Category model)
  //     const categoryDocument = await Category.findById(category);
  //     if (!categoryDocument) {
  //       return res.status(404).json({ error: 'Category not found' });
  //     }
  
  //     // Create a new product and associate it with the specified category
  //     const product = new Product({
  //       name,
  //       category: categoryDocument._id, // Associate the product with the category
        
  //     });
  
  //     await product.save();
  
  //     res.json(product);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Error creating product' });
  //   }
  // });

 

  app.get('/api/categories', async (req, res) => {
    try {
      const categories = await Category.find().populate('subcategories products');
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching categories' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });