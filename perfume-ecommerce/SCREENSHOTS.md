# Website Screenshots Documentation

This document describes the screenshots to be taken for the project submission.

## Required Screenshots

### 1. Homepage - Desktop View
**Filename**: `01-homepage-desktop.png`
- Full page screenshot showing:
  - Navigation bar at top
  - Hero banner with "Discover Your Signature Scent" title
  - Featured products grid (5 product cards)
  - Features section with 3 feature cards
  - Newsletter subscription section

### 2. Homepage - Product Cards Hover Effect
**Filename**: `02-homepage-hover-effect.png`
- Screenshot showing product card hover state:
  - Card elevated with shadow
  - Image slightly zoomed
  - "View Details" button visible in overlay

### 3. Homepage - Mobile View
**Filename**: `03-homepage-mobile.png`
- Mobile responsive view showing:
  - Hamburger menu icon
  - Hero banner adapted for mobile
  - Product cards in single column
  - All sections properly stacked

### 4. Product Page - Full View
**Filename**: `04-product-page-desktop.png`
- Product details page showing:
  - Image gallery with thumbnails
  - Product name, brand, and description
  - Price and size selection
  - Fragrance notes section
  - Add to Cart and Wishlist buttons
  - Share buttons

### 5. Product Page - Reviews Section
**Filename**: `05-product-reviews.png`
- Scrolled down to show:
  - Reviews section title
  - "Write a Review" button
  - Existing customer reviews with ratings
  - Review cards with user names and dates

### 6. Product Page - Add Review Form
**Filename**: `06-add-review-form.png`
- Screenshot showing:
  - Review form opened
  - Name input field
  - Star rating selector
  - Comment textarea
  - Submit and Cancel buttons

### 7. Product Page - Image Gallery
**Filename**: `07-image-gallery.png`
- Showing:
  - Main product image
  - Thumbnail images below
  - Active thumbnail highlighted

### 8. Backend - MongoDB Data
**Filename**: `08-mongodb-data.png`
- MongoDB Compass or command line showing:
  - Products collection
  - Sample product document with all fields
  - Reviews embedded in product

### 9. Backend - API Response
**Filename**: `09-api-response.png`
- Browser or Postman showing:
  - API endpoint (e.g., http://localhost:5000/api/products)
  - JSON response with product data

### 10. Mobile - Product Page
**Filename**: `10-product-page-mobile.png`
- Mobile view of product page showing:
  - Responsive image gallery
  - Product details stacked vertically
  - Touch-friendly buttons

## Screenshot Instructions

### Taking Screenshots

1. **Desktop Screenshots (1920x1080 recommended)**
   - Use full browser window
   - Hide bookmarks bar
   - Clear browser console
   - Ensure content is centered

2. **Mobile Screenshots (375x667 iPhone SE or similar)**
   - Use browser DevTools mobile emulation
   - Chrome DevTools: F12 → Toggle device toolbar
   - Select device preset or custom dimensions

3. **Hover Effects**
   - Use screenshot tools that allow capturing hover states
   - Windows: Snipping Tool or Snip & Sketch
   - Mac: Cmd + Shift + 4
   - Browser extensions: Awesome Screenshot, Nimbus

4. **Backend Screenshots**
   - For MongoDB: Use MongoDB Compass GUI or terminal
   - For API: Use browser, Postman, or curl with pretty-print

### Screenshot Quality Guidelines

- **Resolution**: High quality, clear text
- **Format**: PNG preferred (better quality)
- **Size**: Optimize file size while maintaining clarity
- **Content**: Show relevant features clearly
- **Consistency**: Same browser/theme for all screenshots

## Organization

All screenshots should be placed in a `screenshots/` folder in the project root:

```
perfume-ecommerce/
├── screenshots/
│   ├── 01-homepage-desktop.png
│   ├── 02-homepage-hover-effect.png
│   ├── 03-homepage-mobile.png
│   ├── 04-product-page-desktop.png
│   ├── 05-product-reviews.png
│   ├── 06-add-review-form.png
│   ├── 07-image-gallery.png
│   ├── 08-mongodb-data.png
│   ├── 09-api-response.png
│   └── 10-product-page-mobile.png
├── backend/
├── frontend/
└── README.md
```

## Annotation (Optional)

Consider adding arrows or highlights to emphasize:
- Hover effects
- Interactive elements
- Key features
- Data flow (for technical screenshots)

Tools for annotation:
- Windows: Paint 3D, Snip & Sketch
- Mac: Preview, Skitch
- Cross-platform: GIMP, draw.io

## Final Submission

Create a zip file named `perfume-ecommerce-submission.zip` containing:
1. Complete project code (backend + frontend)
2. Screenshots folder with all 10 screenshots
3. README.md with setup instructions

```bash
# Create the zip file (from project root)
zip -r perfume-ecommerce-submission.zip perfume-ecommerce/ -x "*/node_modules/*" "*/.git/*"
```

---

**Note**: Make sure all screenshots clearly demonstrate the required features and functionality mentioned in the task requirements.
