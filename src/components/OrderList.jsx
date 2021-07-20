import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';

export class OrderList extends React.Component {
  render() {
    const {
      goods,
    } = this.props;

    return (
      <>
        <ul>
          {goods.map(good => (
            <ListItem
              key={good}
              text={good}
            />
          ))}
        </ul>
      </>
    );
  }
}

OrderList.propTypes = {
  goods:
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
