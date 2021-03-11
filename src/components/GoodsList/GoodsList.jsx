import React from 'react';
import PropTypes from 'prop-types';
import { Image, List } from 'semantic-ui-react';

export const GoodsList = React.memo(
  ({ goods }) => (
    <List animated verticalAlign="middle">
      {goods.map(good => (
        <List.Item key={good}>
          <Image avatar src=".\images\image.jpg" />
          <List.Content>
            <List.Header>{good}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </List>
  ),
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
