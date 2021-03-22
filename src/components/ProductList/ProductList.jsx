import React from 'react';
import PropTypes from 'prop-types';
import { ProductButtons } from './ProductButtons';
import { ProductStartButtons } from './ProductStartButton';

export class ProductList extends React.Component {
  state = {
    products: this.props.products,
    isVisibleList: true,
  };

  start = () => {
    this.setState(state => ({ isVisibleList: false }));
  };

  reverseList = () => {
    this.setState(state => ({
      products: [...state.products].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      products: [...state.products]
        .sort((prevVal, nextVal) => prevVal.localeCompare(nextVal)),
    }));
  };

  resetList = () => {
    this.setState(state => ({
      products: this.props.products,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      products: [...state.products]
        .sort((prevVal, nextVal) => prevVal.length - nextVal.length),
    }));
  };

  render() {
    const { isVisibleList, products } = this.state;

    return (
      <section className="product">
        <h1 className="product__title">Goods</h1>

        <ul className={isVisibleList ? 'hidden' : 'product__list'}>
          {products.map(product => (
            <li
              key={product}
              className="product__item"
            >
              {product}
            </li>
          ))}
        </ul>

        <div className="product__container-button">
          <ProductStartButtons
            callBack={this.start}
            text="Start"
            isVisibleList={isVisibleList}
          />

          <ProductButtons
            callBack={this.reverseList}
            text="Reverse"
            isVisibleList={isVisibleList}
          />
          <ProductButtons
            callBack={this.sortAlphabetically}
            text="Sort alphabetically"
            isVisibleList={isVisibleList}
          />
          <ProductButtons
            callBack={this.resetList}
            text="Reset"
            isVisibleList={isVisibleList}
          />
          <ProductButtons
            callBack={this.sortByLength}
            text="Sort by length"
            isVisibleList={isVisibleList}
          />
        </div>
      </section>
    );
  }
}

ProductList.propTypes = PropTypes.shape({
  goodsFromServer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}).isRequired;
