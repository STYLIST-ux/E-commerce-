const products = [
  {
    id: 1,
    title: "Studio Wireless Headphones",
    category: "audio",
    rating: 4.8,
    price: 240,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=85",
    description: "Active noise cancellation with 40-hour battery life and custom acoustic drivers."
  },
  {
    id: 2,
    title: "Precision Mechanical Keyboard",
    category: "tech",
    rating: 4.9,
    price: 165,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=85",
    description: "Hot-swappable tactile switches with aluminum casing and triple-mode wireless connectivity."
  },
  {
    id: 3,
    title: "Ergonomic Vertical Mouse",
    category: "tech",
    rating: 4.7,
    price: 85,
    image: "https://images.unsplash.com/photo-1772531606450-0dd023c265d7?w=800&q=85",
    description: "Reduces wrist strain with precision optical sensor and multi-device pairing."
  },
  {
    id: 4,
    title: "Chrono Smartwatch Series V",
    category: "tech",
    rating: 4.8,
    price: 295,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=85",
    description: "OLED display with biometric tracking, standalone GPS, and titanium bezel."
  },
  {
    id: 5,
    title: "Minimalist Felt Desk Mat",
    category: "desk",
    rating: 4.6,
    price: 45,
    image: "https://images.unsplash.com/photo-1702561667800-2c49b0182229?w=800&q=85",
    description: "Water-repellent felt surface designed to protect and organize your workspace."
  },
  {
    id: 6,
    title: "Portable Aluminum Laptop Stand",
    category: "desk",
    rating: 4.9,
    price: 55,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=85",
    description: "Foldable ergonomic riser crafted from lightweight anodized aluminum."
  },
  {
    id: 7,
    title: "Insulated Stainless Tumbler",
    category: "lifestyle",
    rating: 4.7,
    price: 38,
    image: "https://images.unsplash.com/photo-1700506844206-ec2f9e2a65cd?w=800&q=85",
    description: "Double-wall insulation keeps beverages cold or warm throughout the day."
  },
  {
    id: 8,
    title: "3-in-1 Magnetic Charging Station",
    category: "tech",
    rating: 4.8,
    price: 110,
    image: "https://images.unsplash.com/photo-1750332191594-d5387a69f7c8?w=800&q=85",
    description: "Simultaneous fast charging for phone, smartwatch, and wireless earbuds."
  },
  {
    id: 9,
    title: "High-Fidelity Desktop Speakers",
    category: "audio",
    rating: 4.9,
    price: 210,
    image: "https://images.unsplash.com/photo-1631972234521-24e9d4fbb841?w=800&q=85",
    description: "Compact studio speakers delivering balanced acoustics and deep bass performance."
  },
  {
    id: 10,
    title: "Modular Everyday Backpack",
    category: "lifestyle",
    rating: 4.8,
    price: 140,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=85",
    description: "Weatherproof 20L daypack with padded laptop sleeve and magnetic latches."
  },
  {
    id: 11,
    title: "Smart LED Desk Lamp",
    category: "desk",
    rating: 4.6,
    price: 75,
    image: "https://images.unsplash.com/photo-1731762524352-b5663f83a830?w=800&q=85",
    description: "Adjustable lighting with touch controls and intelligent ambient adjustment."
  },
  {
    id: 12,
    title: "True Wireless Noise-Canceling Earbuds",
    category: "audio",
    rating: 4.7,
    price: 155,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=85",
    description: "In-ear ergonomics with transparency mode and water-resistant construction."
  },
  {
    id: 13,
    title: "Executive Noise-Canceling Headphones",
    category: "audio",
    rating: 4.9,
    price: 280,
    image: "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?w=800&q=85",
    description: "Premium over-ear headphones engineered for focused listening and travel."
  },
  {
    id: 14,
    title: "Obsidian Wireless Earbuds",
    category: "audio",
    rating: 4.8,
    price: 135,
    image: "https://images.unsplash.com/photo-1730848750011-4f1df6493f36?w=800&q=85",
    description: "Compact wireless earbuds with a sleek charging case and immersive sound."
  },
  {
    id: 15,
    title: "Tactile RGB Mechanical Board",
    category: "tech",
    rating: 4.7,
    price: 145,
    image: "https://images.unsplash.com/photo-1669884209488-1332b73f122b?w=800&q=85",
    description: "Compact mechanical keyboard with illuminated keys and tactile switches."
  },
  {
    id: 16,
    title: "Creator Wireless Keyboard",
    category: "tech",
    rating: 4.8,
    price: 125,
    image: "https://images.unsplash.com/photo-1722437697506-2f42ab2ec3ca?w=800&q=85",
    description: "Minimal wireless keyboard designed for creators and productive workflows."
  },
  {
    id: 17,
    title: "Precision Gaming Mouse",
    category: "tech",
    rating: 4.9,
    price: 95,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=85",
    description: "High-precision optical sensor with programmable controls and ergonomic shape."
  },
  {
    id: 18,
    title: "Minimal Wireless Mouse",
    category: "tech",
    rating: 4.8,
    price: 70,
    image: "https://images.unsplash.com/photo-1702561667800-2c49b0182229?w=800&q=85",
    description: "Ultra-clean wireless mouse designed for quiet and comfortable desk work."
  },
  {
    id: 19,
    title: "Premium Leather Desk Mat",
    category: "desk",
    rating: 4.9,
    price: 65,
    image: "https://images.unsplash.com/photo-1596347909615-401e4242b3b2?w=800&q=85",
    description: "Large premium desk surface providing a smooth foundation for your setup."
  },
  {
    id: 20,
    title: "Creator Workspace Mat",
    category: "desk",
    rating: 4.7,
    price: 50,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=85",
    description: "Soft-touch workspace mat designed for keyboards, mice, and daily essentials."
  },
  {
    id: 21,
    title: "Portable Studio Speaker",
    category: "audio",
    rating: 4.8,
    price: 125,
    image: "https://images.unsplash.com/photo-1631972234521-24e9d4fbb841?w=800&q=85",
    description: "Compact wireless speaker with rich sound and a refined desktop presence."
  },
  {
    id: 22,
    title: "Obsidian Travel Headphones",
    category: "audio",
    rating: 4.8,
    price: 195,
    image: "https://images.unsplash.com/photo-1674658556545-f18d4080ab6c?w=800&q=85",
    description: "Foldable wireless headphones built for focused listening on the move."
  },
  {
    id: 23,
    title: "Modern Everyday Bottle",
    category: "lifestyle",
    rating: 4.7,
    price: 42,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&q=85",
    description: "Minimal insulated bottle designed for daily hydration at work or on the move."
  },
  {
    id: 24,
    title: "Aluminum Creator Hub",
    category: "tech",
    rating: 4.9,
    price: 120,
    image: "https://images.unsplash.com/photo-1622445268465-8438165a2481?w=800&q=85",
    description: "Compact multi-device charging hub for a clean and organized workspace."
  }
]

export default products