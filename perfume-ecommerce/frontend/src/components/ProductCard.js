import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product._id}`);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < Math.round(rating) ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image-container">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image"
        />
        <div className="product-overlay">
          <button className="quick-view-btn">View Details</button>
        </div>
        {product.featured && (
          <span className="featured-badge">Featured</span>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.shortDescription}</p>
        
        <div className="product-rating">
          {renderStars(product.averageRating)}
          <span className="rating-count">({product.reviews.length})</span>
        </div>
        
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <div className="product-sizes">
            {product.sizes.slice(0, 2).map((size, index) => (
              <span key={index} className="size-badge">{size}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
