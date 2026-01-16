import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productService } from '../services/api';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    userName: '',
    rating: 5,
    comment: ''
  });

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await productService.getProductById(id);
      setProduct(data);
      setSelectedSize(data.sizes[0]);
      setLoading(false);
    } catch (err) {
      setError('Failed to load product details.');
      setLoading(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = await productService.addReview(id, reviewData);
      setProduct(updatedProduct);
      setReviewData({ userName: '', rating: 5, comment: '' });
      setShowReviewForm(false);
    } catch (err) {
      alert('Failed to submit review. Please try again.');
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out ${product.name} - ${product.shortDescription}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const renderStars = (rating, interactive = false, onSelect = null) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''} ${interactive ? 'interactive' : ''}`}
        onClick={() => interactive && onSelect && onSelect(index + 1)}
      >
        ★
      </span>
    ));
  };

  if (loading) {
    return (
      <div className="product-page loading">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-page error">
        <h2>Product Not Found</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/')} className="back-btn">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="product-page">
      <button onClick={() => navigate('/')} className="back-link">
        ← Back to Collection
      </button>

      <div className="product-container">
        {/* Image Gallery */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-gallery">
            {product.images.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="product-details">
          <div className="product-header">
            <span className="product-brand">{product.brand}</span>
            {product.featured && <span className="featured-badge">Featured</span>}
          </div>
          
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-rating-section">
            <div className="stars-display">
              {renderStars(product.averageRating)}
            </div>
            <span className="rating-text">
              {product.averageRating.toFixed(1)} ({product.reviews.length} reviews)
            </span>
          </div>

          <p className="product-description-full">{product.description}</p>

          <div className="product-price-section">
            <span className="price">${product.price}</span>
            <span className="price-note">Free shipping on orders over $100</span>
          </div>

          {/* Size Selection */}
          <div className="size-selection">
            <label className="selection-label">Select Size:</label>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Fragrance Notes */}
          <div className="fragrance-notes">
            <h3 className="notes-title">Fragrance Notes</h3>
            <div className="notes-grid">
              <div className="note-category">
                <span className="note-label">Top Notes</span>
                <p className="note-list">{product.notes.top.join(', ')}</p>
              </div>
              <div className="note-category">
                <span className="note-label">Middle Notes</span>
                <p className="note-list">{product.notes.middle.join(', ')}</p>
              </div>
              <div className="note-category">
                <span className="note-label">Base Notes</span>
                <p className="note-list">{product.notes.base.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="product-actions">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="wishlist-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Share Section */}
          <div className="share-section">
            <span className="share-label">Share:</span>
            <div className="share-buttons">
              <button onClick={() => handleShare('facebook')} className="share-btn facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </button>
              <button onClick={() => handleShare('twitter')} className="share-btn twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </button>
              <button onClick={() => handleShare('whatsapp')} className="share-btn whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
              <button onClick={() => handleShare('pinterest')} className="share-btn pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.88-.18-2.26 0-3.24l1.34-5.65s-.34-.68-.34-1.68c0-1.58.92-2.76 2.06-2.76.97 0 1.44.73 1.44 1.6 0 .98-.62 2.44-.95 3.8-.27 1.14.57 2.07 1.7 2.07 2.04 0 3.61-2.15 3.61-5.25 0-2.75-1.97-4.67-4.79-4.67-3.26 0-5.18 2.45-5.18 4.98 0 .99.38 2.05.85 2.62a.36.36 0 0 1 .08.35c-.09.38-.3 1.23-.34 1.4-.05.22-.18.27-.4.16-1.42-.66-2.31-2.73-2.31-4.39 0-3.58 2.6-6.87 7.51-6.87 3.95 0 7.01 2.81 7.01 6.57 0 3.92-2.47 7.07-5.9 7.07-1.15 0-2.24-.6-2.61-1.3l-.71 2.71c-.26.99-.96 2.23-1.43 2.99A12 12 0 1 0 12 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <div className="reviews-header">
          <h2 className="reviews-title">Customer Reviews</h2>
          <button 
            className="write-review-btn"
            onClick={() => setShowReviewForm(!showReviewForm)}
          >
            Write a Review
          </button>
        </div>

        {showReviewForm && (
          <form className="review-form" onSubmit={handleReviewSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                value={reviewData.userName}
                onChange={(e) => setReviewData({ ...reviewData, userName: e.target.value })}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Rating</label>
              <div className="rating-input">
                {renderStars(reviewData.rating, true, (rating) => 
                  setReviewData({ ...reviewData, rating })
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Your Review</label>
              <textarea
                rows="5"
                value={reviewData.comment}
                onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-review-btn">Submit Review</button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setShowReviewForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="reviews-list">
          {product.reviews.length === 0 ? (
            <p className="no-reviews">No reviews yet. Be the first to review this product!</p>
          ) : (
            product.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <span className="reviewer-name">{review.userName}</span>
                    <span className="review-date">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
