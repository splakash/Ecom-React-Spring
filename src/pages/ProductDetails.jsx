import { useState,useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';




function ProductDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const produrl = `https://dummyjson.com/products/${id}`;
  const[product,setProduct] = useState(null);
  
  
  
  useEffect(() => {
      fetch(produrl)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    
  }, [id]);
 

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate('/products')}
          className="text-indigo-600 hover:text-indigo-500"
        >
          Back to Products
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    
    
    dispatch(addToCart({
      ...product,
      
    }));
    
    navigate('/cart');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.images}
            alt={product.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl text-gray-800 mb-6">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Size : {product.dimensions.width} * {product.dimensions.height}</h3>
            <div className="flex space-x-4">
              
            </div>
          </div>
          
          
          
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 