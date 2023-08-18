import React from 'react';
import '../Fonts/Kanit/Kanit-Medium.ttf';
import HoverCard from './HoverCard';
export const ProductInfo = (props) => {
  return (
    <>
      <HoverCard anime={props.animeInfo} />
    </>
  );
};
