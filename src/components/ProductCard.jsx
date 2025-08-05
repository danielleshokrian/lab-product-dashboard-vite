import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStockClass : ''}`}
    >
      <h2 className={styles.productName}>{product.name}</h2>
      <p className={styles.productPrice}>${product.price}</p>
      <p className={styles.productStatus}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;


