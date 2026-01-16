# Complete Setup Guide - Essence Perfume E-Commerce

This guide will walk you through setting up the project from scratch.

## Prerequisites Installation

### 1. Install Node.js

**Windows:**
1. Download from https://nodejs.org/ (LTS version recommended)
2. Run the installer
3. Verify installation:
```bash
node --version
npm --version
```

**macOS:**
```bash
# Using Homebrew
brew install node

# Verify
node --version
npm --version
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version
npm --version
```

### 2. Install MongoDB

**Windows:**
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Run the installer (choose "Complete" installation)
3. Install as a Windows Service
4. Verify installation:
```bash
mongod --version
```

**macOS:**
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Verify
mongod --version
```

**Linux (Ubuntu/Debian):**
```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Create list file
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Update and install
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Verify
mongod --version
```

## Project Setup

### Step 1: Extract Project Files

Extract the `perfume-ecommerce` folder to your desired location, e.g.:
- Windows: `C:\Projects\perfume-ecommerce`
- macOS/Linux: `~/Projects/perfume-ecommerce`

### Step 2: Backend Setup

Open terminal/command prompt:

```bash
# Navigate to backend directory
cd perfume-ecommerce/backend

# Install dependencies (this may take a few minutes)
npm install
```

Expected output:
```
added 50 packages in 15s
```

**Verify backend files:**
```bash
# Check if all files are present
ls -la
# Should see: server.js, seed.js, package.json, .env, models/
```

### Step 3: Start MongoDB

**Windows:**
```bash
# MongoDB should already be running as a service
# If not, start it:
net start MongoDB
```

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

**Verify MongoDB is running:**
```bash
# Connect to MongoDB shell
mongosh

# You should see MongoDB shell prompt
# Type 'exit' to leave
```

### Step 4: Seed the Database

Still in the `backend` directory:

```bash
# Run the seed script to populate initial data
node seed.js
```

Expected output:
```
Connected to MongoDB
Cleared existing products
Seed data inserted successfully
Inserted 5 products
```

**Verify data was inserted:**
```bash
# Connect to MongoDB shell
mongosh

# Switch to the database
use perfume_ecommerce

# Count products
db.products.countDocuments()
# Should return: 5

# View one product
db.products.findOne()

# Exit
exit
```

### Step 5: Start Backend Server

```bash
# Make sure you're in the backend directory
npm start
```

Expected output:
```
Server is running on port 5000
MongoDB connected successfully
```

**Test the API:**

Open a new terminal and test:
```bash
# Test API endpoint
curl http://localhost:5000/api/products
```

Or open in browser: http://localhost:5000/api/products

You should see JSON data with 5 products.

**Leave this terminal running** - don't close it!

### Step 6: Frontend Setup

Open a **NEW** terminal window:

```bash
# Navigate to frontend directory
cd perfume-ecommerce/frontend

# Install dependencies (this may take 2-3 minutes)
npm install
```

Expected output:
```
added 1500 packages in 45s
```

### Step 7: Start Frontend Development Server

```bash
# Make sure you're in the frontend directory
npm start
```

Expected output:
```
Compiled successfully!

You can now view perfume-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

The browser should automatically open to http://localhost:3000

**If it doesn't open automatically**, manually navigate to: http://localhost:3000

## Verification Checklist

### Backend (http://localhost:5000)
- [ ] Server is running without errors
- [ ] MongoDB connection successful
- [ ] API endpoint `/api/products` returns 5 products
- [ ] API endpoint `/api/products/featured` returns featured products

### Frontend (http://localhost:3000)
- [ ] Website loads without errors
- [ ] Navigation bar is visible
- [ ] Hero banner displays
- [ ] 5 product cards are showing
- [ ] Clicking a product card navigates to product page
- [ ] Product page shows all details
- [ ] Reviews section is visible
- [ ] Can add a review (test this!)

## Testing the Application

### Test 1: View Products
1. Navigate to http://localhost:3000
2. Scroll down to see product cards
3. Hover over a product card (should see animation)

### Test 2: View Product Details
1. Click on any product card
2. Verify all product information displays:
   - Product images
   - Name, brand, description
   - Price and sizes
   - Fragrance notes
   - Existing reviews

### Test 3: Add a Review
1. On a product page, click "Write a Review"
2. Fill in:
   - Name: "Test User"
   - Rating: Select 5 stars
   - Comment: "Great product!"
3. Click "Submit Review"
4. Verify review appears in the list

### Test 4: Share Functionality
1. On product page, click any share button
2. A new window should open with the sharing platform

## Troubleshooting

### Issue: "Cannot connect to MongoDB"

**Solution:**
```bash
# Check if MongoDB is running
# Windows:
net start MongoDB

# macOS:
brew services start mongodb-community

# Linux:
sudo systemctl status mongod
```

### Issue: "Port 5000 is already in use"

**Solution:**
```bash
# Windows - Find and kill process
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F

# macOS/Linux - Kill process
lsof -ti:5000 | xargs kill -9
```

### Issue: "Port 3000 is already in use"

**Solution:**
```bash
# Option 1: Run on different port
PORT=3001 npm start

# Option 2: Kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

### Issue: Frontend shows "Failed to load products"

**Solution:**
1. Ensure backend is running on port 5000
2. Check browser console for errors (F12)
3. Verify API URL in `frontend/src/services/api.js`
4. Check CORS settings in `backend/server.js`

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Try installing again
npm install
```

### Issue: "Module not found" errors

**Solution:**
```bash
# Make sure all dependencies are installed
cd backend
npm install

cd ../frontend
npm install
```

## Development Tips

### Stopping the Servers

**To stop backend:**
- Press `Ctrl + C` in the backend terminal

**To stop frontend:**
- Press `Ctrl + C` in the frontend terminal

### Restarting After Changes

**Backend changes:**
- Stop server (Ctrl + C)
- Run `npm start` again

**Frontend changes:**
- Changes auto-reload (hot reload enabled)
- If issues persist, stop and restart with `npm start`

### Viewing Database

**Option 1: MongoDB Compass (GUI)**
1. Download from https://www.mongodb.com/try/download/compass
2. Connect to: `mongodb://localhost:27017`
3. Navigate to `perfume_ecommerce` database
4. View `products` collection

**Option 2: MongoDB Shell**
```bash
mongosh
use perfume_ecommerce
db.products.find().pretty()
```

### Adding More Products

Edit `backend/seed.js` and add more product objects to the `seedProducts` array, then run:
```bash
node seed.js
```

## Next Steps

1. Take screenshots of the working application (refer to SCREENSHOTS.md)
2. Create a zip file for submission
3. Test all features before submission

## Support

If you encounter issues not covered here:
1. Check the browser console (F12) for error messages
2. Check terminal output for backend errors
3. Verify all prerequisites are installed correctly
4. Ensure MongoDB is running
5. Try restarting both frontend and backend servers

---

**Congratulations!** Your perfume e-commerce website should now be running successfully.
