import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.css';

export class GoodsList extends React.PureComponent {
  static propTypes = {
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(good => (
          <li className="goods__item" key={good}>
            {`${good}: (${good.length})`}
          </li>
        ))}
      </ul>
    );
  }
}
