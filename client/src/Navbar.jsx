import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">Product Listing</Link>
      </div>
      <div className="right">
        <Link to="/create-category">Create Category</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </nav>
  );
};

export default Navbar;

