import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    products: [...this.props.products],
  }

  reverseList = () => {
    this.setState(state => ({
      products: [...state.products].reverse(),
    }));
  };

  sortAlphb = () => {
    this.setState(state => ({
      products: [...state.products].sort(),
    }));
  };

  resetList = () => {
    this.setState({
      products: this.props.products,
    });
  };

  sortLength = () => {
    this.setState(state => ({
      products: [...state.products].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { products } = this.state;

    return (
      <>
        <ul className="GoodsList">
          {products.map(product => (
            <li key={product}>
              {product}
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.reverseList}>Reverse</button>
        <button type="button" onClick={this.sortAlphb}>Sort</button>
        <button type="button" onClick={this.resetList}>Reset</button>
        <button type="button" onClick={this.sortLength}>Sort by length</button>
      </>
    );
  }
}

GoodsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};
