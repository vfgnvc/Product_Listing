
import React, { useState} from 'react';
import axios from 'axios';




const CreateCategory = () => {
  
  const [categoryName, setCategoryName] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/categories', {
        name: categoryName,
      });

      console.log('Category created:', response.data);
      
    } catch (error) {
      console.error('Error creating category:', error);
      
    }
  }

  return (
    <div>
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button type="submit">Create Category</button>
      </form>
    
    </div>
  );
};

export default CreateCategory;
