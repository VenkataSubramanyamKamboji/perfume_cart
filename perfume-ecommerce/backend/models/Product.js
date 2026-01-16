const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  sizes: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  notes: {
    top: [String],
    middle: [String],
    base: [String]
  },
  reviews: [reviewSchema],
  averageRating: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Method to calculate average rating
productSchema.methods.calculateAverageRating = function() {
  if (this.reviews.length === 0) {
    this.averageRating = 0;
  } else {
    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    this.averageRating = sum / this.reviews.length;
  }
};

module.exports = mongoose.model('Product', productSchema);
