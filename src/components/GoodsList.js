import React from 'react';
import PropTypes from 'prop-types';

export default class GoodsList extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {
          goods.map(good => (
            <li key={good}>{good}</li>
          ))
        }
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
