import React from 'react';
import PropTypes from 'prop-types';

export class Li extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <>
        {
          goods.map(good => (
            <li
              className="list-group-item list-group-item-success"
              key={good}
            >
              {good}
            </li>
          ))
        }
      </>
    );
  }
}

Li.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
