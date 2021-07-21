import React from 'react';
import propTypes, { arrayOf } from 'prop-types';

export class Goodslist extends React.PureComponent {
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

Goodslist.propTypes = {
  goods: arrayOf(propTypes.string.isRequired).isRequired,
};
