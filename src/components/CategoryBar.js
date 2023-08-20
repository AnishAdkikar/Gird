import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryBar.css'
const categories = [
  {
    id: 1,
    name: 'Electronics',
    link: '/electronics',
    subcategories: [
      { id: 11, name: 'Phones', link: '/electronics/phones' },
      { id: 12, name: 'Laptops', link: '/electronics/laptops' },
    ],
  },
  {
    id: 2,
    name: 'Clothing',
    link: '/clothing',
    subcategories: [
      { id: 21, name: 'Men', link: '/clothing/men' },
      { id: 22, name: 'Women', link: '/clothing/women' },
    ],
  },
  {
    id: 4,
    name: 'Home & Furniture',
    link: '/home-furniture',
    subcategories: [
      { id: 41, name: 'Living Room', link: '/home-furniture/living-room' },
      { id: 42, name: 'Bedroom', link: '/home-furniture/bedroom' },
    ],
  },
  {
    id: 5,
    name: 'Beauty & Personal Care',
    link: '/beauty',
    subcategories: [
      { id: 51, name: 'Skincare', link: '/beauty/skincare' },
      { id: 52, name: 'Haircare', link: '/beauty/haircare' },
    ],
  },
  {
    id: 6,
    name: 'Sports & Outdoors',
    link: '/sports-outdoors',
    subcategories: [
      { id: 61, name: 'Fitness', link: '/sports-outdoors/fitness' },
      { id: 62, name: 'Camping', link: '/sports-outdoors/camping' },
    ],
  },
  // Add more categories with subcategories as needed
];

function CategoryBar() {
  return (
    <div className='category-bar'>
      <div className='categories-label'>Categories:</div>
      {categories.map((category) => (
        <div key={category.id} className='category'>
          <Link to={category.link} className='category-link'>
            {category.name}
          </Link>
          <div className='subcategories'>
            {category.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                to={subcategory.link}
                className='subcategory-link'
              >
                {subcategory.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}



export default CategoryBar;
