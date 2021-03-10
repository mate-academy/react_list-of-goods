/* import React from 'react';
import { List } from 'semantic-ui-react';

export const GoodsList = ({ goods }) => (
  <List>
    {goods.map(good => (
      <List.Item key={good}>{good}</List.Item>
    ))}
  </List>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}; */

import React from 'react';
import PropTypes from 'prop-types';
import { Image, List } from 'semantic-ui-react';

export const GoodsList = ({ goods }) => (
  <List animated verticalAlign="middle">
    {goods.map(good => (
      <List.Item key={good}>
        <Image avatar src=".\images\image.jpg" />
        <List.Content>
          <List.Header>{good}</List.Header>
        </List.Content>
      </List.Item>
    ))}
    {/* <List.Item>
      <Image avatar src="/images/avatar/small/christian.jpg" />
      <List.Content>
        <List.Header>Christian</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src="/images/avatar/small/daniel.jpg" />
      <List.Content>
        <List.Header>Daniel</List.Header>
      </List.Content>
    </List.Item> */}
  </List>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
