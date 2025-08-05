import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const products = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true, image:  "https://via.placeholder.com/150"  },
  { id: 2, name: 'Phone', price: '$699', inStock: false, image:  "https://via.placeholder.com/150"  },
  { id: 3, name: 'Tablet', price: '$499', inStock: true, image:  "https://via.placeholder.com/150"  },
];

  // TODO: Implement state to manage filtering
  const [showInStock, setShowInStock] = useState(false);

  // TODO: Implement logic to filter products based on availability
  const filteredProducts = showInStock
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <div>
      <h1>{"Product Dashboard"}</h1>

      <button onClick={() => setShowInStock(true)}>Show In Stock</button>
      <button onClick={() => setShowInStock(false)}>Show All</button>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
