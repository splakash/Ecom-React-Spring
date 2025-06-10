export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  // Shirts
  {
    id: 1,
    name: "Classic White Dress Shirt",
    price: 89,
    image: "photo-1488590528505-98d2b5aba04b",
    category: "shirts",
    description: "Premium cotton dress shirt perfect for professional settings"
  },
  {
    id: 2,
    name: "Navy Oxford Shirt",
    price: 79,
    image: "photo-1531297484001-80022131f5a1",
    category: "shirts", 
    description: "Casual oxford shirt with classic button-down collar"
  },
  {
    id: 3,
    name: "Striped Business Shirt",
    price: 95,
    image: "photo-1526374965328-7f61d4dc18c5",
    category: "shirts",
    description: "Elegant striped shirt for the modern professional"
  },
  {
    id: 4,
    name: "Linen Casual Shirt",
    price: 69,
    image: "photo-1649972904349-6e44c42644a7",
    category: "shirts",
    description: "Comfortable linen shirt for relaxed occasions"
  },
  {
    id: 5,
    name: "Checkered Pattern Shirt",
    price: 85,
    image: "photo-1581091226825-a6a2a5aee158",
    category: "shirts",
    description: "Stylish checkered pattern for weekend wear"
  },
  {
    id: 6,
    name: "Black Formal Shirt",
    price: 99,
    image: "photo-1618160702438-9b02ab6515c9",
    category: "shirts",
    description: "Sophisticated black shirt for special occasions"
  },
  
  // T-Shirts
  {
    id: 7,
    name: "Classic White Tee",
    price: 29,
    image: "photo-1581091226825-a6a2a5aee158",
    category: "tshirts",
    description: "Essential white t-shirt made from premium cotton"
  },
  {
    id: 8,
    name: "Vintage Graphic Tee",
    price: 39,
    image: "photo-1488590528505-98d2b5aba04b",
    category: "tshirts",
    description: "Retro-inspired graphic tee with vintage wash"
  },
  {
    id: 9,
    name: "Basic Navy Tee",
    price: 32,
    image: "photo-1531297484001-80022131f5a1",
    category: "tshirts",
    description: "Comfortable navy t-shirt for everyday wear"
  },
  {
    id: 10,
    name: "Organic Cotton Tee",
    price: 45,
    image: "photo-1649972904349-6e44c42644a7",
    category: "tshirts",
    description: "Eco-friendly organic cotton t-shirt"
  },
  {
    id: 11,
    name: "Striped Long Sleeve",
    price: 49,
    image: "photo-1526374965328-7f61d4dc18c5",
    category: "tshirts",
    description: "Casual striped long sleeve tee"
  },
  {
    id: 12,
    name: "Premium Black Tee",
    price: 55,
    image: "photo-1618160702438-9b02ab6515c9",
    category: "tshirts",
    description: "Luxurious black t-shirt with perfect fit"
  }
];
