/**
 * Portfolio Projects
 * ==================
 * Each project:
 *   - id, title, category, description
 *   - targetClient: who this was built for
 *   - about: 2-3 sentence detail about the project
 *   - specialties: array of highlight tags
 *   - image: path to screenshot (place in /public/projects/)
 *   - url: live site link (or "#" if not available)
 *   - color: accent color for the placeholder mockup
 */

const projects = [
  {
    id: 1,
    title: "Oud Al Hera",
    category: "Luxury Perfume & E-Commerce",
    description:
      "An evocative, high-end digital showcase for an artisanal luxury fragrance house featuring interactive discovery.",
    targetClient: "Artisan luxury fragrance brand targeting premium customers",
    about:
      "Oud Al Hera needed a digital presence that matched the artistry of their handcrafted fragrances. We built an immersive showcase site with cinematic scroll animations, a curated product discovery flow, and a refined editorial aesthetic. Every interaction was designed to evoke the same sensory richness as the product itself.",
    specialties: [
      "Cinematic Scroll Animations",
      "Product Discovery Flow",
      "High-End Visual Design",
      "Mobile-First Layout",
      "Fast Load Times",
    ],
    image: "/projects/oud-al-hera.webp",
    url: "https://perfume-site-demo.vercel.app/",
    color: "#1B4332",
  },
  {
    id: 2,
    title: "Artisan Cafe",
    category: "Hospitality & Food Service",
    description: "A warm and inviting digital presence for a local artisanal cafe and coffee shop.",
    targetClient: "Local coffee shop or boutique cafe",
    about: "We designed a digital storefront that captures the cozy atmosphere of a local cafe. The site features an interactive menu, location details, and a warm color palette to invite customers in.",
    specialties: [
      "Interactive Menu",
      "Mobile-Friendly Layout",
      "Warm Aesthetics",
      "Location Integration"
    ],
    image: "/projects/cafe-demo.webp",
    url: "https://cafe-demo-rust.vercel.app/",
    color: "#8B4513",
  },
  {
    id: 3,
    title: "Premium Real Estate",
    category: "Real Estate & Property Management",
    description: "A sleek and modern property listing platform for a premium real estate agency.",
    targetClient: "Luxury real estate agency or broker",
    about: "This platform was built to showcase high-end properties with stunning imagery and easy-to-use search functionality. The focus is on providing a seamless browsing experience for potential buyers and sellers.",
    specialties: [
      "Property Showcases",
      "High-Resolution Image Galleries",
      "Responsive Design",
      "Lead Generation"
    ],
    image: "/projects/real-estate-demo.webp",
    url: "https://real-estate-demo-zeta-six.vercel.app/",
    color: "#2C3E50",
  },
  {
    id: 4,
    title: "Elevate Fitness Gym",
    category: "Health & Fitness",
    description: "An energetic and dynamic website for a modern fitness center and gym.",
    targetClient: "Local gym, fitness center, or personal trainer",
    about: "We created a high-energy digital presence for a fitness center, highlighting their facilities, classes, and membership plans. The site uses bold typography and dynamic layouts to inspire action and boost conversions.",
    specialties: [
      "Class Schedules & Highlights",
      "Membership Conversion Focus",
      "Bold Typography",
      "Dynamic Layouts"
    ],
    image: "/projects/gym-demo.webp",
    url: "https://gym-demo-cyan-iota.vercel.app/",
    color: "#E63946",
  },
  {
    id: 5,
    title: "Photography Portfolio",
    category: "Creative & Photography",
    description: "A visually striking and elegant portfolio designed to showcase high-quality photography and visual arts.",
    targetClient: "Photographers, artists, and creative professionals",
    about: "We designed a minimalist, immersive portfolio that lets the photography take center stage. Featuring seamless masonry galleries, subtle scroll animations, and optimized high-resolution image loading, it offers a premium viewing experience across all devices.",
    specialties: [
      "Masonry Image Galleries",
      "Immersive Dark Mode",
      "High-Resolution Optimization",
      "Minimalist Design"
    ],
    image: "/projects/photographer-demo.png",
    url: "https://photography-portfolio-orpin-omega.vercel.app/",
    color: "#1A1A1A",
  },
  {
    id: 6,
    title: "Fashion Portfolio",
    category: "Fashion & Apparel",
    description: "A sleek, modern portfolio for a fashion brand, featuring dynamic imagery and elegant typography.",
    targetClient: "Fashion designers, models, and clothing brands",
    about: "A visually striking digital showcase designed to put fashion front and center. With smooth transitions, high-resolution imagery, and a chic layout, this site brings the runway experience online.",
    specialties: [
      "Dynamic Imagery",
      "Elegant Typography",
      "Smooth Transitions",
      "Responsive Layout"
    ],
    image: "/projects/fashion-portfolio.png",
    url: "https://fashion-portfolio-gray.vercel.app/",
    color: "#A8B2C1",
  },
  {
    id: 7,
    title: "Sable Law Firm",
    category: "Legal Services",
    description: "A professional and trustworthy digital presence for a modern law firm.",
    targetClient: "Attorneys, law firms, and legal consultants",
    about: "Built to convey authority and trust, this law firm website features a clean, professional design. It includes detailed practice areas, attorney profiles, and easy consultation booking, all wrapped in a sleek interface.",
    specialties: [
      "Professional Design",
      "Practice Area Showcase",
      "Consultation Booking",
      "Trustworthy Aesthetic"
    ],
    image: "/projects/law-firm.png",
    url: "https://law-firm-sable-beta.vercel.app/",
    color: "#1A365D",
  },
  {
    id: 8,
    title: "Aura Wellness",
    category: "Beauty & Wellness",
    description: "A calming and luxurious website for a premium spa and salon.",
    targetClient: "Spas, salons, and wellness centers",
    about: "Designed to evoke a sense of relaxation and luxury, this spa and salon website features a soft color palette, elegant typography, and intuitive service menus. It provides a seamless booking experience for clients seeking wellness services.",
    specialties: [
      "Luxurious Aesthetic",
      "Service Menus",
      "Soft Color Palette",
      "Seamless Booking"
    ],
    image: "/projects/spa-and-salon.png",
    url: "https://spa-and-salon-two.vercel.app/",
    color: "#D4A373",
  }
];

export default projects;
