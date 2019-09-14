import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';

function ProductList({ productList }) {
  return (productList.length === 0)
    ? <div className="empty-list">no goods in your basket</div>
    : (
      <ul className="product-list">
        {
          productList.map(item => (
            <ProductItem
              productItem={item}
              key={item}
            />
          ))
        }
      </ul>
    );
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(ProductItem),
};

ProductList.defaultProps = {
  productList: [],
};

export default ProductList;
