import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.goods.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
