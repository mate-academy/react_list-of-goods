import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.css';

export class GoodsList extends React.Component {
  showGoodsList = () => {
  }

  render() {
    const { goods } = this.props;

    return (
      <>
        <ul className="goods__list">
          {goods.map(good => (
            <li className="goods__item">
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

GoodsList.defaultProps = {
  goods: [],
};
