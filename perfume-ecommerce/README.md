# Essence - Luxury Perfume E-Commerce Website

A full-stack e-commerce application for luxury perfumes built with React, Node.js, Express, and MongoDB.

## 🌟 Features

### Homepage
- **Responsive Navigation Bar**: Elegant navbar with smooth animations
- **Hero Banner**: Eye-catching call-to-action section with gradient backgrounds and animations
- **Product Cards**: Beautiful product grid with hover effects (5 featured products)
- **Interactive Hover Effects**: Scale animations, overlay effects, and smooth transitions
- **Click-to-Navigate**: Product cards redirect to detailed product pages
- **Features Section**: Highlights premium quality, expert guidance, and worldwide shipping
- **Newsletter Section**: Email subscription form for exclusive offers

### Product Page
- **Detailed Product Information**: Complete descriptions, pricing, and available sizes
- **Image Gallery**: Multiple product images with thumbnail navigation
- **Reviews Section**: User reviews with star ratings
- **Add Review Functionality**: Customers can submit reviews with ratings
- **Share Buttons**: Social media sharing (Facebook, Twitter, WhatsApp, Pinterest)
- **Fragrance Notes**: Top, middle, and base notes displayed elegantly
- **Size Selection**: Interactive size options
- **Responsive Design**: Mobile-friendly layout

### Technical Highlights
- **Frontend**: React with React Router for navigation
- **Backend**: Node.js and Express REST API
- **Database**: MongoDB with Mongoose ODM
- **Data Flow**: All product data and reviews fetched from MongoDB (no static data)
- **Responsive Design**: Mobile-first approach with media queries
- **Luxury Aesthetic**: Distinctive design using Playfair Display, Cormorant Garamond, and Montserrat fonts
- **Smooth Animations**: CSS animations and transitions throughout

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone or Extract the Project

```bash
cd perfume-ecommerce
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start MongoDB service
# On Windows:
net start MongoDB

# On macOS (using Homebrew):
brew services start mongodb-community

# On Linux:
sudo systemctl start mongod

# Seed the database with initial data
node seed.js

# Start the backend server
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The frontend will run on `http://localhost:3000` and automatically open in your browser.

## 🗂️ Project Structure

```
perfume-ecommerce/
├── backend/
│   ├── models/
│   │   └── Product.js          # MongoDB Product model
│   ├── .env                    # Environment variables
│   ├── package.json            # Backend dependencies
│   ├── seed.js                 # Database seeding script
│   └── server.js               # Express server & API routes
│
└── frontend/
    ├── public/
    │   └── index.html          # HTML template
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js       # Navigation component
    │   │   ├── Navbar.css
    │   │   ├── ProductCard.js  # Product card component
    │   │   └── ProductCard.css
    │   ├── pages/
    │   │   ├── HomePage.js     # Homepage component
    │   │   ├── HomePage.css
    │   │   ├── ProductPage.js  # Product details page
    │   │   └── ProductPage.css
    │   ├── services/
    │   │   └── api.js          # API service layer
    │   ├── App.js              # Main App component
    │   ├── App.css             # Global styles
    │   ├── index.js            # React entry point
    │   └── index.css
    └── package.json            # Frontend dependencies
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get single product by ID
- `GET /api/products/category/:category` - Get products by category
- `GET /api/search?q=searchTerm` - Search products

### Reviews
- `POST /api/products/:id/reviews` - Add review to product

## 💾 Database Schema

### Product Model
```javascript
{
  name: String,
  description: String,
  shortDescription: String,
  price: Number,
  images: [String],
  sizes: [String],
  category: String,
  brand: String,
  notes: {
    top: [String],
    middle: [String],
    base: [String]
  },
  reviews: [{
    userName: String,
    rating: Number,
    comment: String,
    date: Date
  }],
  averageRating: Number,
  featured: Boolean
}
```

## 🎨 Design Features

### Typography
- **Playfair Display**: Display headings and prices
- **Cormorant Garamond**: Body text and descriptions
- **Montserrat**: UI elements and buttons

### Color Scheme
- Primary: #8b6f47 (Luxurious gold/brown)
- Secondary: #a68a5e (Light gold)
- Dark: #1a1a1a
- Light: #f8f8f8

### Animations
- Fade-in effects on page load
- Hover transformations on cards
- Smooth transitions on all interactive elements
- Gradient animations on hero banner

## 📱 Responsive Breakpoints

- Desktop: 1400px and above
- Tablet: 768px - 1399px
- Mobile: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Troubleshooting

### MongoDB Connection Issues
1. Ensure MongoDB is running: `mongod --version`
2. Check if MongoDB service is active
3. Verify connection string in `.env` file

### Port Already in Use
If port 5000 or 3000 is already in use:
```bash
# Kill process on port 5000 (backend)
# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On macOS/Linux:
lsof -ti:5000 | xargs kill -9
```

### Frontend Not Loading Data
1. Ensure backend server is running
2. Check browser console for CORS errors
3. Verify API_URL in `frontend/src/services/api.js`

## 📝 Seed Data

The database comes pre-populated with 5 luxury perfume products:
1. Midnight Velvet (Oriental)
2. Citrus Dream (Citrus)
3. Ocean Breeze (Aquatic)
4. Rose Garden (Floral)
5. Sandalwood Noir (Woody)

Each product includes:
- Multiple high-quality images
- Detailed descriptions
- Size options
- Fragrance notes
- Customer reviews

## 🚀 Future Enhancements

- User authentication and authorization
- Shopping cart functionality
- Payment integration
- Order management
- Admin dashboard
- Advanced search and filtering
- Product recommendations
- Wishlist feature

## 👨‍💻 Development

### Running in Development Mode

Backend (with auto-reload):
```bash
cd backend
npm run dev
```

Frontend (with hot-reload):
```bash
cd frontend
npm start
```

### Building for Production

```bash
cd frontend
npm run build
```

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- Images from Unsplash
- Font families from Google Fonts
- Icons custom SVG implementations

---

Made with ❤️ for luxury perfume enthusiasts
