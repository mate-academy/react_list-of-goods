import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <div>
        <ul>
          {goods.map(el => (
            <li key={el}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
