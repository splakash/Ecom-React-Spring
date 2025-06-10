import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';

// Mock product data (in a real app, this would come from an API)
const mockProducts = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 29.99,
    image: 'https://via.placeholder.com/300x400',
    category: 'T-Shirts',
  },
  {
    id: 2,
    name: 'Denim Jeans',
    price: 79.99,
    image: 'https://via.placeholder.com/300x400',
    category: 'Pants',
  },
  {
    id: 3,
    name: 'Casual Hoodie',
    price: 49.99,
    image: 'https://via.placeholder.com/300x400',
    category: 'Hoodies',
  },
  // Add more products as needed
];

function Products() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('all');

  const filteredProducts = category === 'all'
    ? mockProducts
    : mockProducts.filter(product => product.category === category);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setCategory('all')}
            className={`px-4 py-2 rounded-md ${
              category === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setCategory('T-Shirts')}
            className={`px-4 py-2 rounded-md ${
              category === 'T-Shirts' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            T-Shirts
          </button>
          <button
            onClick={() => setCategory('Pants')}
            className={`px-4 py-2 rounded-md ${
              category === 'Pants' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            Pants
          </button>
          <button
            onClick={() => setCategory('Hoodies')}
            className={`px-4 py-2 rounded-md ${
              category === 'Hoodies' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            Hoodies
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link to={`/products/${product.id}`}>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              </Link>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products; 