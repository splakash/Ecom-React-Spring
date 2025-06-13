import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { addToCart } from '../store/cartSlice';
import Footer from '../components/Footer';
// Mock product data (in a real app, this would come from an API)



function Products() { 
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const ProductsUrl = `https://dummyjson.com/products/category/${category}`;
  //console.log(ProductsUrl);
  const[products , setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      fetch(ProductsUrl)
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    }else{
      fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
        
    }
  }, [category]);


  const dispatch = useDispatch();
 

  
  const handleAddToCart = (products) => {
    dispatch(addToCart(products));
  };

const [photos, setPhotos] = useState([]);

  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <div className="flex space-x-4">
          <button
            //onClick={() => setCategory('all')}
            className={`px-4 py-2 rounded-md ${
              category === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            //onClick={() => setCategory('T-Shirts')}
            className={`px-4 py-2 rounded-md ${
              category === 'T-Shirts' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            T-Shirts
          </button>
          <button
            //onClick={() => setCategory('Pants')}
            className={`px-4 py-2 rounded-md ${
              category === 'Pants' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            Pants
          </button>
          <button
            //onClick={() => setCategory('Hoodies')}
            className={`px-4 py-2 rounded-md ${
              category === 'Hoodies' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            Hoodies
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link to={`/products/${product.id}`}>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              </Link>
              <p className="text-gray-600 mb-4">${product.price}</p>
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
      <Footer/>
    </div>
  );
}

export default Products; 