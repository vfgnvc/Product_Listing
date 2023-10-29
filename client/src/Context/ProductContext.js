
import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  return (
    <ProductContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

