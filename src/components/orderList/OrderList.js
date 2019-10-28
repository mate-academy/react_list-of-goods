import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

class OrderList extends React.PureComponent {
  render() {
    const { orderedItems } = this.props;

    return (
      orderedItems.length ? (
        <>
          <h2>You ordered</h2>
          <List celled ordered>
            {orderedItems.map(orderItem => (
              <List.Item>{orderItem}</List.Item>
            ))}
          </List>
        </>
      ) : (
        <h2>You don't ordered anything</h2>
      )
    );
  }
}

OrderList.propTypes = {
  orderedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OrderList;
