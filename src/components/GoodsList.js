import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  render() {
    const { goods } = this.props;

    return (
      goods.map(good => (
        <li className="app__item" key={good}>
          {good}
        </li>
      ))
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
