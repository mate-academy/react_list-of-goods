import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends Component {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(product => (
          <li key={product}>
            {product}
          </li>
        ))}
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goods:
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
