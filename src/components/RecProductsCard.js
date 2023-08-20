import styles from './ProductCard.module.css';
import React from 'react';
import wishlist from '../assets/wishlist.png';
import cart from '../assets/cart.png';

export default function RecProductCard({ product }) {
  return (
    <article className={styles.productCard}>
      <div className={styles.cardContainer}>
        <img className={styles.images} alt='' src={product.main_image} />
        <div className={styles.buttonSpacer}>
          {/* add events here */}
          <button className={styles.wishlistButton}>
            <img className={styles.wishlistIcon} src={wishlist} alt='' />
          </button>
          <button className={styles.cartButton}>
            <img className={styles.cartIcon} src={cart} alt='' />
          </button>
        </div>
        <div className={styles.gradient}></div>
        <div className={styles.cardTitle}>{product.title}</div>
      </div>
    </article>
  );
}
