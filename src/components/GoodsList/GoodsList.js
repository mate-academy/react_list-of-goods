import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(elem => (
          <li
            key={elem}
          >
            {elem}
          </li>
        ))}
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
