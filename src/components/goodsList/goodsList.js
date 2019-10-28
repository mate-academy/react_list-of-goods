import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

class GoodsList extends React.PureComponent {
  render() {
    const { goods, clickFunction } = this.props;

    return (
      <List onClick={clickFunction}>
        {goods.map(goodItem => (
          <List.Item as="a" key={goodItem}>
            <List.Icon name="shop" />
            <List.Content>{goodItem}</List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickFunction: PropTypes.func.isRequired,
}

export default GoodsList;
