import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <div>
        <ul>
          {goods.map((good, idx) => (
            <li key={idx.toString()}>
              {good}
              {' '}
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
