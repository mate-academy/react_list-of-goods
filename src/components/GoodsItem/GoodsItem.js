import React from 'react';
import PropsTypes from 'prop-types';

export class GoodsItem extends React.PureComponent {
  render() {
    return (
      <p>{this.props.good}</p>
    );
  }
}
GoodsItem.propTypes = {
  good: PropsTypes.string.isRequired,
};
