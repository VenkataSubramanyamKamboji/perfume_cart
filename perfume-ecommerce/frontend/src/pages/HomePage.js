import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/api';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getFeaturedProducts();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load products. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="homepage">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">Discover Your</span>
            <span className="hero-title-sub">Signature Scent</span>
          </h1>
          <p className="hero-description">
            Immerse yourself in a world of luxury fragrances, 
            crafted to perfection for those who appreciate the finer things in life.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn primary">Explore Collection</button>
            <button className="hero-btn secondary">New Arrivals</button>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 5v10M5 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section" id="collections">
        <div className="section-header">
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle">Curated selections of our most exquisite fragrances</p>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading fragrances...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
            <button onClick={fetchProducts} className="retry-btn">Retry</button>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Premium Quality</h3>
            <p className="feature-description">Each fragrance is crafted with the finest ingredients from around the world</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Expert Guidance</h3>
            <p className="feature-description">Our perfume specialists are here to help you find your perfect match</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="feature-title">Worldwide Shipping</h3>
            <p className="feature-description">Fast and secure delivery to your doorstep, anywhere in the world</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Join Our Exclusive Circle</h2>
          <p className="newsletter-description">
            Be the first to discover new fragrances and receive special offers
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
