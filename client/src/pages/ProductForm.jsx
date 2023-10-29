import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
  
  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3001/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/products', {
        name: productName,
        category: selectedCategory,
        subCategory:subCategory,
      });

      console.log('Product created:', response.data);
    } catch (error) {
      console.error('Error creating product:', error);
      
    }
  }

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
         <input
          type="text"
          placeholder="Subcategory Name"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {Array.isArray(categories) && categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
