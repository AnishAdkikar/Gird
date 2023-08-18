import ProductCard from './ProductCard';
import styles from './ScrollableList.module.css';
import React from 'react';
import HeadingText from './HeadingText.js';
import { useEffect, useState } from 'react';
const http = require('https');
export default function TopProducts() {
  const [products, SetProducts] = useState([]);
  const GetProducts = () => {
      const options = {
        method: 'GET',
        hostname: 'ecom.webscrapingapi.com',
        port: null,
        path: '/v1?q=test&type=search&amazon_domain=amazon.com&engine=amazon&api_key=C1GwMhLPiza5wUneomw6TYarrLP0HVbp',
        headers: {},
      };

      const req = http.request(options, function (res) {
        const chunks = [];

        res.on('data', function (chunk) {
          chunks.push(chunk);
        });
        res.on('end', function () {
          const body = Buffer.concat(chunks);
          const responseData = body.toString();
          const parsedData = JSON.parse(responseData);
          SetProducts(parsedData['search_results']['product_results']);
        });
        
      });
      req.end();
  }
  useEffect(() => {
    GetProducts();

    return () => {
      GetProducts();
    };
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
