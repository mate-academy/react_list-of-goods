import './GoodsList.scss';
import React from 'react';

interface Props {
  props: string[];
}

export const GoodsList: React.FC<Props> = ({ props }) => {
  return (
    <div className="product__list">
      {props.map((product: string) => (
        <div className="product__item" key={product}>
          {product}
        </div>
      ))}
    </div>
  );
};
