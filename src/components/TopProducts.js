import ProductCard from './ProductCard';
import styles from './ScrollableList.module.css';
import React from 'react';
import HeadingText from './HeadingText.js';
import { useEffect, useState } from 'react';
export default function TopProducts() {
  const [products, SetProducts] = useState([]);
  const GetProducts = async () => {
    const response = await fetch(
      'https://ecom.webscrapingapi.com/v1?engine=amazon&api_key=b3AhQ1LziNB8K6VV9EaPIy8AvP9NQ5Po&type=bestsellers&category_id=electronics'
    ).then((res) => res.json());
    SetProducts(response['category_results']['product_results']);
  };
  useEffect(() => {
    GetProducts();
  }, []);
  return (
    <>
      <HeadingText text='Top Products' />
      <div className={styles.scrollableList}>
        {products.map((prod) => (
          <ProductCard product={prod} key={prod.product_id} />
        ))}
      </div>
    </>
  );
}
