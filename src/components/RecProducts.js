import RecProductCard from './RecProductsCard';
import styles from './ScrollableList.module.css';
import React from 'react';
import HeadingText from './HeadingText.js';
import { useEffect, useState } from 'react';
export default function RecProducts() {
  const [rec, setRec] = useState([]);
  const recId = ['B08MQZXN1X', 'B08C1W5N87'];

  const fetchProduct = async (id) => {
    const response = await fetch(
      `https://ecom.webscrapingapi.com/v1?engine=amazon&api_key=b3AhQ1LziNB8K6VV9EaPIy8AvP9NQ5Po&type=product&product_id=${id}`
    );
    const data = await response.json();
    return data['product_results'];
  };

  const promises = async () => {
    const promiseArray = recId.map((id) => fetchProduct(id));
    const resolvedPromises = await Promise.all(promiseArray);
    setRec(resolvedPromises);
  };
  useEffect(() => {
    promises();
  }, []);

  return (
    <>
      <HeadingText text='Rec Products' />
      <div className={styles.scrollableList}>
        {rec.map((prod) => (
          <RecProductCard product={prod} key={prod.product_id} />
        ))}
      </div>
    </>
  );
}
