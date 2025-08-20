import React from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const ProductForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/products");
    toast.success("Success");
  };

  return (
    <div className="product-form-container">
      <div className="product-form-title">
        <h2>Product Form</h2>
      </div>
      <div className="product-form-section">
        <div className="product-form-field">
          <label className="product-form-label">Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="product-form-input"
          />
        </div>
        <div className="product-form-field">
          <label className="product-form-label">Product Quantity</label>
          <input
            type="text"
            placeholder="Enter the quantity"
            className="product-form-input"
          />
        </div>
        <div className="product-form-field">
          <label className="product-form-label">Product Price</label>
          <input
            type="text"
            placeholder="Enter the price"
            className="product-form-input"
          />
        </div>
        <div className="product-form-field">
          <label className="product-form-label">Product Type</label>
          <select className="product-form-input">
            <option>Paint</option>
            <option>Pipes</option>
            <option>Fittings</option>
          </select>
        </div>
        <div className="product-form-field">
          <label className="product-form-label">Added Date</label>
          <input
            type="date"
            className="product-form-input"
          />
        </div>
        <div className="product-form-field">
          <button className="product-form-btn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductForm
