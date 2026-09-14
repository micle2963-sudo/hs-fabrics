export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  gender: "Men" | "Women";
  type: "Hoodie" | "Sweatshirt";
  price: string;
  color: string;
  image: string;
  sizes: string[];
  description: string;
  featured?: boolean;
  newest?: boolean;
  stock?: boolean;
};

type RawProduct = Omit<Product, "id" | "slug">;

/* =========================================================
   MEN HOODIES
========================================================= */

const menHoodies: RawProduct[] = [
  {
    name: "Black Red Statement Hoodie",
    category: "Graphic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,899",
    color: "Black & Red",
    image: "/products/men/hoodies/Black Red Statement Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Bold black hoodie with a striking red statement graphic. Designed for a modern streetwear look.",
    featured: true,
    newest: true,
    stock: true,
  },
  {
    name: "Black Luxury Graphic Hoodie",
    category: "Premium",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,999",
    color: "Black",
    image: "/products/men/hoodies/Black Luxury Graphic Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Premium black hoodie featuring a luxury-inspired graphic design.",
    featured: true,
    stock: true,
  },
  {
    name: "Burgundy Graphic Hoodie",
    category: "Graphic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "Burgundy",
    image: "/products/men/hoodies/Burgundi Graphic Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Rich burgundy hoodie with a stylish graphic print for an elevated everyday look.",
    newest: true,
    stock: true,
  },
  {
    name: "Burnt Orange Streetwear Hoodie",
    category: "Streetwear",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "Burnt Orange",
    image: "/products/men/hoodies/Burnt Orange Streetwear Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Warm burnt orange streetwear hoodie made for a bold and contemporary outfit.",
    newest: true,
    stock: true,
  },
  {
    name: "Chocolate Brown Vintage Hoodie",
    category: "Classic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "Chocolate Brown",
    image: "/products/men/hoodies/Chocolate Brown Vintage Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Vintage-inspired chocolate brown hoodie with a relaxed everyday aesthetic.",
    stock: true,
  },
  {
    name: "Cream Premium Hoodie",
    category: "Premium",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,999",
    color: "Cream",
    image: "/products/men/hoodies/Cream Premium Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Clean cream premium hoodie designed for a sophisticated minimal look.",
    featured: true,
    stock: true,
  },
  {
    name: "Deep Burgundy Graphic Hoodie",
    category: "Graphic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,899",
    color: "Deep Burgundy",
    image: "/products/men/hoodies/Deep Burgundy Graphic Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Deep burgundy hoodie with a distinctive graphic design.",
    newest: true,
    stock: true,
  },
  {
    name: "Dusty Rose Men's Hoodie",
    category: "Classic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,699",
    color: "Dusty Rose",
    image: "/products/men/hoodies/Dusty Rose Men's Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Soft dusty rose hoodie offering a unique and stylish men's streetwear option.",
    stock: true,
  },
  {
    name: "Grey Red Urban Hoodie",
    category: "Streetwear",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,899",
    color: "Grey & Red",
    image: "/products/men/hoodies/Grey Red Urban Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Urban grey hoodie with red detailing for a strong contemporary look.",
    featured: true,
    newest: true,
    stock: true,
  },
  {
    name: "Grey White Hoodie",
    category: "Classic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,699",
    color: "Grey & White",
    image: "/products/men/hoodies/Grey White Hoodie.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Minimal grey and white hoodie designed for versatile everyday wear.",
    stock: true,
  },
  {
    name: "Ice Blue Minimal Hoodie",
    category: "Classic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,699",
    color: "Ice Blue",
    image: "/products/men/hoodies/Ice Blue Minimal Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Fresh ice blue hoodie with a clean minimal aesthetic.",
    newest: true,
    stock: true,
  },
  {
    name: "Mocha DOPE-Style Hoodie",
    category: "Oversized",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,899",
    color: "Mocha",
    image: "/products/men/hoodies/Mocha DOPE-Style Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Mocha oversized hoodie inspired by modern streetwear fashion.",
    featured: true,
    stock: true,
  },
  {
    name: "Navy Blue Celestial Hoodie",
    category: "Graphic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,899",
    color: "Navy Blue",
    image: "/products/men/hoodies/Navy Blue Celestial Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Deep navy hoodie with a celestial-inspired graphic design.",
    newest: true,
    stock: true,
  },
  {
    name: "Navy Blue Hoodie",
    category: "Classic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,499",
    color: "Navy Blue",
    image: "/products/men/hoodies/Navy Blue Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic navy blue hoodie made for everyday comfort and style.",
    stock: true,
  },
  {
    name: "Royal Blue Racing Hoodie",
    category: "Streetwear",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,899",
    color: "Royal Blue",
    image: "/products/men/hoodies/Royal Blue Racing Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Bold royal blue racing-inspired hoodie with a sporty streetwear feel.",
    featured: true,
    newest: true,
    stock: true,
  },
  {
    name: "Sage Green Nature Hoodie",
    category: "Graphic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "Sage Green",
    image: "/products/men/hoodies/Sage Green Nature Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Sage green hoodie featuring a nature-inspired design.",
    stock: true,
  },
  {
    name: "Washed Black Gothic Hoodie",
    category: "Graphic",
    gender: "Men",
    type: "Hoodie",
    price: "Rs. 3,899",
    color: "Washed Black",
    image: "/products/men/hoodies/Washed Black Gothic Hoodie.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Washed black hoodie with a bold gothic-inspired aesthetic.",
    featured: true,
    newest: true,
    stock: true,
  },
];

/* =========================================================
   MEN SWEATSHIRTS
========================================================= */

const menSweatshirts: RawProduct[] = [
  {
    name: "Black Sweatshirt",
    category: "Classic",
    gender: "Men",
    type: "Sweatshirt",
    price: "Rs. 3,299",
    color: "Black",
    image: "/products/men/sweatshirts/Black Sweatshirt.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic black sweatshirt designed for everyday comfort and effortless style.",
    featured: true,
    stock: true,
  },
  {
    name: "Green Forest Sweatshirt",
    category: "Classic",
    gender: "Men",
    type: "Sweatshirt",
    price: "Rs. 3,399",
    color: "Forest Green",
    image: "/products/men/sweatshirts/Green Forest.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Forest green sweatshirt with a clean and premium everyday look.",
    stock: true,
  },
  {
    name: "Grey Sweatshirt",
    category: "Classic",
    gender: "Men",
    type: "Sweatshirt",
    price: "Rs. 3,299",
    color: "Grey",
    image: "/products/men/sweatshirts/Grey sweatshirt.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Versatile grey sweatshirt for casual everyday outfits.",
    newest: true,
    stock: true,
  },
  {
    name: "Navy Blue Sweatshirt",
    category: "Classic",
    gender: "Men",
    type: "Sweatshirt",
    price: "Rs. 3,399",
    color: "Navy Blue",
    image: "/products/men/sweatshirts/Navy Blue Sweatshirt.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic navy sweatshirt combining comfort with a timeless look.",
    stock: true,
  },
  {
    name: "Red Graphic Sweatshirt",
    category: "Graphic",
    gender: "Men",
    type: "Sweatshirt",
    price: "Rs. 3,699",
    color: "Red",
    image: "/products/men/sweatshirts/Red and Mockup.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Statement red sweatshirt with a bold graphic-inspired design.",
    featured: true,
    newest: true,
    stock: true,
  },
  {
    name: "Rust Orange Sweatshirt",
    category: "Streetwear",
    gender: "Men",
    type: "Sweatshirt",
    price: "Rs. 3,499",
    color: "Rust Orange",
    image: "/products/men/sweatshirts/Rust Orange.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Rust orange sweatshirt with a modern streetwear appearance.",
    stock: true,
  },
  {
    name: "White Black Sweatshirt",
    category: "Graphic",
    gender: "Men",
    type: "Sweatshirt",
    price: "Rs. 3,599",
    color: "White & Black",
    image: "/products/men/sweatshirts/White and Black Sweatshirt.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Modern white and black sweatshirt designed for a clean contrast.",
    newest: true,
    stock: true,
  },
  {
    name: "White Sweatshirt",
    category: "Classic",
    gender: "Men",
    type: "Sweatshirt",
    price: "Rs. 3,299",
    color: "White",
    image: "/products/men/sweatshirts/White Sweatshirt.png",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Clean white sweatshirt with a premium minimal aesthetic.",
    stock: true,
  },
];

/* =========================================================
   WOMEN HOODIES
========================================================= */

const womenHoodies: RawProduct[] = [
  {
    name: "Black Heart Hoodie",
    category: "Graphic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,699",
    color: "Black",
    image: "/products/women/hoodies/Black Heart Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Stylish black hoodie featuring a heart-inspired graphic design.",
    featured: true,
    stock: true,
  },
  {
    name: "Black Hoodie",
    category: "Classic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,499",
    color: "Black",
    image: "/products/women/hoodies/Black Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Classic black women's hoodie for effortless everyday styling.",
    stock: true,
  },
  {
    name: "Black Wings Hoodie",
    category: "Graphic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "Black",
    image: "/products/women/hoodies/Black Wings Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Black graphic hoodie featuring a bold wings-inspired design.",
    newest: true,
    stock: true,
  },
  {
    name: "Burgundy Hoodie",
    category: "Classic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,599",
    color: "Burgundy",
    image: "/products/women/hoodies/Burgundy Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Rich burgundy hoodie designed for a warm and fashionable look.",
    stock: true,
  },
  {
    name: "Green Hoodie",
    category: "Casual",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,599",
    color: "Green",
    image: "/products/women/hoodies/Green Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Fresh green casual hoodie for comfortable everyday wear.",
    newest: true,
    stock: true,
  },
  {
    name: "Grey Butterfly Hoodie",
    category: "Graphic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "Grey",
    image: "/products/women/hoodies/Grey Butterfly Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Soft grey hoodie with an elegant butterfly graphic.",
    featured: true,
    stock: true,
  },
  {
    name: "Night Blue Hoodie",
    category: "Classic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,599",
    color: "Night Blue",
    image: "/products/women/hoodies/Night Blue Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Deep blue women's hoodie with a sophisticated casual look.",
    stock: true,
  },
  {
    name: "Pink Butterfly Hoodie",
    category: "Graphic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "Pink",
    image: "/products/women/hoodies/Pink Butterfly Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Soft pink hoodie with a beautiful butterfly graphic.",
    newest: true,
    stock: true,
  },
  {
    name: "Purple Pink Butterfly Hoodie",
    category: "Graphic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "Purple & Pink",
    image: "/products/women/hoodies/Purple-Pink-Butterfly Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Feminine purple and pink hoodie featuring a butterfly-inspired design.",
    featured: true,
    newest: true,
    stock: true,
  },
  {
    name: "Tiger Black Hoodie",
    category: "Graphic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "Black",
    image: "/products/women/hoodies/Tiger-Black Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Bold black hoodie with a powerful tiger-inspired graphic.",
    stock: true,
  },
  {
    name: "White Rose Hoodie",
    category: "Graphic",
    gender: "Women",
    type: "Hoodie",
    price: "Rs. 3,799",
    color: "White",
    image: "/products/women/hoodies/White-Rose Hoodie.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Elegant white hoodie with a beautiful rose-inspired design.",
    featured: true,
    stock: true,
  },
];

/* =========================================================
   WOMEN SWEATSHIRTS
========================================================= */

const womenSweatshirts: RawProduct[] = [
  {
    name: "Baby Blue Floral Sweatshirt",
    category: "Graphic",
    gender: "Women",
    type: "Sweatshirt",
    price: "Rs. 3,699",
    color: "Baby Blue",
    image: "/products/women/sweatshirts/Baby Blue Floral Sweatshirt.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Soft baby blue sweatshirt featuring a delicate floral design.",
    featured: true,
    newest: true,
    stock: true,
  },
  {
    name: "Black Rose Sweatshirt",
    category: "Graphic",
    gender: "Women",
    type: "Sweatshirt",
    price: "Rs. 3,699",
    color: "Black",
    image: "/products/women/sweatshirts/Black Rose Sweatshirt.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Elegant black sweatshirt featuring a rose-inspired graphic.",
    stock: true,
  },
  {
    name: "Burgundy Varsity Sweatshirt",
    category: "Varsity",
    gender: "Women",
    type: "Sweatshirt",
    price: "Rs. 3,799",
    color: "Burgundy",
    image: "/products/women/sweatshirts/Burgundy Varsity Sweatshirt.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Burgundy varsity-inspired sweatshirt with a sporty premium feel.",
    featured: true,
    stock: true,
  },
  {
    name: "Cherry Graphic Sweatshirt",
    category: "Graphic",
    gender: "Women",
    type: "Sweatshirt",
    price: "Rs. 3,699",
    color: "Cherry Red",
    image: "/products/women/sweatshirts/Cherry Graphic Sweatshirt.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Stylish sweatshirt featuring a playful cherry-inspired graphic.",
    newest: true,
    stock: true,
  },
  {
    name: "Chocolate Brown Floral Sweatshirt",
    category: "Graphic",
    gender: "Women",
    type: "Sweatshirt",
    price: "Rs. 3,699",
    color: "Chocolate Brown",
    image: "/products/women/sweatshirts/Chocolate Brown Floral Sweatshirt.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Warm chocolate brown sweatshirt with a floral-inspired design.",
    stock: true,
  },
  {
    name: "Cream Rose Sweatshirt",
    category: "Graphic",
    gender: "Women",
    type: "Sweatshirt",
    price: "Rs. 3,699",
    color: "Cream",
    image: "/products/women/sweatshirts/Cream Rose Sweatshirt.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Premium cream sweatshirt featuring an elegant rose design.",
    featured: true,
    stock: true,
  },
  {
    name: "Dusty Pink Butterfly Sweatshirt",
    category: "Graphic",
    gender: "Women",
    type: "Sweatshirt",
    price: "Rs. 3,699",
    color: "Dusty Pink",
    image: "/products/women/sweatshirts/Dusty Pink Butterfly Sweatshirt.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Soft dusty pink sweatshirt with a delicate butterfly graphic.",
    newest: true,
    stock: true,
  },
  {
    name: "Lavender Celestial Sweatshirt",
    category: "Graphic",
    gender: "Women",
    type: "Sweatshirt",
    price: "Rs. 3,699",
    color: "Lavender",
    image: "/products/women/sweatshirts/Lavender Celestial Sweatshirt.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Beautiful lavender sweatshirt with a celestial-inspired design.",
    featured: true,
    stock: true,
  },
  {
    name: "Sage Green Botanical Sweatshirt",
    category: "Graphic",
    gender: "Women",
    type: "Sweatshirt",
    price: "Rs. 3,699",
    color: "Sage Green",
    image: "/products/women/sweatshirts/Sage Green Botanical Sweatshirt.jpg",
    sizes: ["S", "M", "L"],
    description:
      "Sage green sweatshirt with an elegant botanical-inspired graphic.",
    newest: true,
    stock: true,
  },
];

/* =========================================================
   ALL PRODUCTS
========================================================= */

const rawProducts: RawProduct[] = [
  ...menHoodies,
  ...menSweatshirts,
  ...womenHoodies,
  ...womenSweatshirts,
];

/* =========================================================
   SLUG GENERATOR
========================================================= */

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* =========================================================
   FINAL PRODUCTS
========================================================= */

export const products: Product[] = (() => {
  const usedSlugs = new Map<string, number>();

  return rawProducts.map((product, index) => {
    const baseSlug = slugify(product.name);
    const previousCount = usedSlugs.get(baseSlug) ?? 0;

    usedSlugs.set(baseSlug, previousCount + 1);

    const slug =
      previousCount === 0
        ? baseSlug
        : `${baseSlug}-${previousCount + 1}`;

    return {
      ...product,
      id: `hs-${String(index + 1).padStart(3, "0")}`,
      slug,
    };
  });
})();

/* =========================================================
   HELPERS
========================================================= */

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getMenProducts() {
  return products.filter((product) => product.gender === "Men");
}

export function getWomenProducts() {
  return products.filter((product) => product.gender === "Women");
}

export function getHoodies() {
  return products.filter((product) => product.type === "Hoodie");
}

export function getSweatshirts() {
  return products.filter((product) => product.type === "Sweatshirt");
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getNewestProducts() {
  return products.filter((product) => product.newest);
}

export function getProductsByGender(
  gender: "Men" | "Women"
) {
  return products.filter(
    (product) => product.gender === gender
  );
}

export function getProductsByType(
  type: "Hoodie" | "Sweatshirt"
) {
  return products.filter(
    (product) => product.type === type
  );
}

export function getProductsByCategory(category: string) {
  return products.filter(
    (product) => product.category === category
  );
}

export function getProductsByGenderAndType(
  gender: "Men" | "Women",
  type: "Hoodie" | "Sweatshirt"
) {
  return products.filter(
    (product) =>
      product.gender === gender &&
      product.type === type
  );
}

export function getRelatedProducts(
  currentProduct: Product,
  limit = 4
) {
  return products
    .filter(
      (product) =>
        product.id !== currentProduct.id &&
        product.gender === currentProduct.gender &&
        product.type === currentProduct.type
    )
    .slice(0, limit);
}

/* =========================================================
   CATEGORIES
========================================================= */

export const MEN_CATEGORIES = [
  {
    name: "Hoodies",
    type: "Hoodie" as const,
    categories: [
      "Classic",
      "Graphic",
      "Oversized",
      "Streetwear",
      "Premium",
    ],
  },
  {
    name: "Sweatshirts",
    type: "Sweatshirt" as const,
    categories: [
      "Classic",
      "Graphic",
      "Streetwear",
    ],
  },
];

export const WOMEN_CATEGORIES = [
  {
    name: "Hoodies",
    type: "Hoodie" as const,
    categories: [
      "Classic",
      "Graphic",
      "Casual",
      "Streetwear",
    ],
  },
  {
    name: "Sweatshirts",
    type: "Sweatshirt" as const,
    categories: [
      "Classic",
      "Graphic",
      "Varsity",
    ],
  },
];

/* =========================================================
   CONTACT
========================================================= */

export const CONTACT = {
  brand: "HS Fabrics",
  domain: "hsfabrics.store",
  email: "h.sfabrics2@gmail.com",
  whatsappNumber: "923176218878",
  whatsappDisplay: "+92 317 6218878",
  instagram: "https://www.instagram.com/h_and_s.pk",
  facebook: "https://www.facebook.com/share/1DazE6fKya/",
  location: "Sargodha, Pakistan",
  delivery: "Delivery all over Pakistan",
};