import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ProductListing from './pages/ProductListing';
import CreateCategory from './pages/CreateCategory';
import ProductForm from './pages/ProductForm';


function App() {
  return (
   
    <Router>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
      
    </Router>
   
  );
}

export default App;
