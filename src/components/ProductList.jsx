import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  // Initialize local state from props to allow modification
  const [productList, setProductList] = useState(products || []);

  // Update state if props.products changes (optional)
  useEffect(() => {
    setProductList(products || []);
  }, [products]);

  // Remove product handler
  const handleRemove = (id) => {
    setProductList(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  // Show message if empty
  if (productList.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div id="product-list">
      {productList.map(product => (
        <ProductCard key={product.id} product={product} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default ProductList;

