import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const cardClasses = `${styles.card} ${!product.inStock ? styles.outOfStockClass + ' outOfStockClass' : ''}`;

  return (
    <div className={cardClasses}>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;




