import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductListing.css'

const ProductListing = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3001/api/categories');
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  const renderSubcategories = (subcategories) => {
    return (
      <ul>
        {subcategories.map((subcategory) => (
          <li key={subcategory._id}>
            <button onClick={() => handleCategoryClick(subcategory)}>
              {subcategory.name}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  const renderProducts = (products) => {
    return (
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h4>Product Listing</h4>
      {currentCategory ? (
        <div>
          <button onClick={() => setCurrentCategory(null)}>Back to Categories</button>
          <h3>{currentCategory.name}</h3>
          {renderSubcategories(currentCategory.subcategories)}
          {renderProducts(currentCategory.products)}
        </div>
      ) : (
        <ul className="categories-list">
          {categories.map((category) => (
            <li key={category._id}>
              <button className="category-button" onClick={() => handleCategoryClick(category)}>
                {category.name} ({category.products.length})
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductListing;
