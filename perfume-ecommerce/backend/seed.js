const mongoose = require('mongoose');
const Product = require('./models/Product');

const seedProducts = [
  {
    name: "Midnight Velvet",
    description: "An enchanting evening fragrance that captures the mystery of twilight. Midnight Velvet opens with a burst of bergamot and blackcurrant, transitioning into a heart of velvety rose and jasmine. The base notes of amber, vanilla, and musk create a warm, sensual trail that lingers beautifully on the skin. Perfect for special occasions and romantic evenings.",
    shortDescription: "Mysterious evening scent with rose, amber & vanilla",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59bd9?w=800",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800"
    ],
    sizes: ["30ml", "50ml", "100ml"],
    category: "Oriental",
    brand: "Luxe Noir",
    notes: {
      top: ["Bergamot", "Blackcurrant", "Pink Pepper"],
      middle: ["Rose", "Jasmine", "Iris"],
      base: ["Amber", "Vanilla", "Musk", "Sandalwood"]
    },
    reviews: [
      {
        userName: "Sophie Martinez",
        rating: 5,
        comment: "Absolutely stunning! This perfume is perfect for evening wear. The longevity is incredible.",
        date: new Date('2024-12-15')
      },
      {
        userName: "Emma Thompson",
        rating: 5,
        comment: "One of the best perfumes I've ever owned. So elegant and sophisticated!",
        date: new Date('2024-12-20')
      }
    ],
    featured: true
  },
  {
    name: "Citrus Dream",
    description: "A refreshing daytime fragrance that energizes and uplifts. Citrus Dream combines sparkling notes of lemon, orange, and grapefruit with a subtle hint of mint. The heart reveals delicate white flowers, while the base provides a clean, musky finish. Ideal for everyday wear and warm weather.",
    shortDescription: "Fresh citrus blend with white florals & musk",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800"
    ],
    sizes: ["30ml", "50ml", "100ml"],
    category: "Citrus",
    brand: "Fresh & Co",
    notes: {
      top: ["Lemon", "Orange", "Grapefruit", "Mint"],
      middle: ["Neroli", "Orange Blossom", "Lily of the Valley"],
      base: ["White Musk", "Cedar", "Vetiver"]
    },
    reviews: [
      {
        userName: "Michael Chen",
        rating: 4,
        comment: "Very fresh and clean scent. Perfect for summer days!",
        date: new Date('2025-01-05')
      },
      {
        userName: "Lisa Anderson",
        rating: 5,
        comment: "I wear this every day to work. It's light but noticeable. Love it!",
        date: new Date('2025-01-08')
      }
    ],
    featured: true
  },
  {
    name: "Ocean Breeze",
    description: "Dive into the freshness of the sea with Ocean Breeze. This aquatic fragrance captures the essence of coastal air with notes of sea salt, marine accord, and crisp ozonic notes. The heart features aromatic lavender and rosemary, while the base anchors with driftwood and amber. A perfect everyday scent for those who love the ocean.",
    shortDescription: "Aquatic marine scent with lavender & driftwood",
    price: 94.99,
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
    ],
    sizes: ["50ml", "100ml"],
    category: "Aquatic",
    brand: "Azure Scents",
    notes: {
      top: ["Sea Salt", "Marine Accord", "Bergamot"],
      middle: ["Lavender", "Rosemary", "Sage"],
      base: ["Driftwood", "Amber", "Musk"]
    },
    reviews: [
      {
        userName: "David Wilson",
        rating: 5,
        comment: "Smells like a fresh ocean breeze. Very unique and refreshing!",
        date: new Date('2025-01-10')
      }
    ],
    featured: false
  },
  {
    name: "Rose Garden",
    description: "Step into a blooming garden with this luxurious floral fragrance. Rose Garden celebrates the queen of flowers with a sophisticated blend of Turkish rose, May rose, and Bulgarian rose. Enhanced with peony and lily, and grounded with patchouli and white musk, this perfume is elegance personified.",
    shortDescription: "Luxurious floral bouquet with multiple rose varieties",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800",
      "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800"
    ],
    sizes: ["30ml", "50ml", "100ml"],
    category: "Floral",
    brand: "Petal Perfumes",
    notes: {
      top: ["Turkish Rose", "Litchi", "Bergamot"],
      middle: ["May Rose", "Peony", "Lily"],
      base: ["Bulgarian Rose", "Patchouli", "White Musk"]
    },
    reviews: [
      {
        userName: "Isabella Rodriguez",
        rating: 5,
        comment: "The most beautiful rose perfume I've ever tried. Not overpowering at all!",
        date: new Date('2024-12-28')
      },
      {
        userName: "Grace Kim",
        rating: 4,
        comment: "Elegant and timeless. A bit pricey but worth it for special occasions.",
        date: new Date('2025-01-03')
      }
    ],
    featured: true
  },
  {
    name: "Sandalwood Noir",
    description: "A rich, woody fragrance for the modern connoisseur. Sandalwood Noir opens with spicy cardamom and nutmeg, evolving into creamy sandalwood and cedar heart notes. The base is deep and resinous with oud, leather, and tobacco. This is a powerful, statement-making scent that exudes confidence and sophistication.",
    shortDescription: "Bold woody fragrance with oud, leather & tobacco",
    price: 169.99,
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800"
    ],
    sizes: ["50ml", "100ml"],
    category: "Woody",
    brand: "Heritage Collection",
    notes: {
      top: ["Cardamom", "Nutmeg", "Black Pepper"],
      middle: ["Sandalwood", "Cedar", "Papyrus"],
      base: ["Oud", "Leather", "Tobacco", "Tonka Bean"]
    },
    reviews: [
      {
        userName: "Alexander Hayes",
        rating: 5,
        comment: "Incredible depth and complexity. This is my signature scent now!",
        date: new Date('2024-12-10')
      },
      {
        userName: "James Miller",
        rating: 5,
        comment: "Masculine and sophisticated. Receives compliments every time I wear it.",
        date: new Date('2024-12-22')
      },
      {
        userName: "Robert Taylor",
        rating: 4,
        comment: "Very strong and long-lasting. A little goes a long way!",
        date: new Date('2025-01-01')
      }
    ],
    featured: true
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/perfume_ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert seed data
    for (let productData of seedProducts) {
      const product = new Product(productData);
      product.calculateAverageRating();
      await product.save();
    }

    console.log('Seed data inserted successfully');
    console.log(`Inserted ${seedProducts.length} products`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
