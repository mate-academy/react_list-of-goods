import React from 'react';
import PropsTypes from 'prop-types';
import { ButtonList } from '../ButtonList/ButtonList';

export class GoodsList extends React.Component {
  state = {
    goodsFromServer: this.props.goodsFromServer,
    originalGoodsFromServer: this.props.goodsFromServer,
    defaultSelect: false,
  };

  updateData = (value, value2) => {
    this.setState({
      goodsFromServer: value,
      defaultSelect: value2,
    });
  };

  render() {
    return (
      <>
        <ul>
          {
            this.state.goodsFromServer.map(goods => (
              <li key={goods}>{goods}</li>
            ))
          }
        </ul>

        <ButtonList
          goodsFromServer={this.state.goodsFromServer}
          callbackUpdateData={this.updateData}
          originalGoodsFromServer={this.state.originalGoodsFromServer}
          defaultSelect={this.state.defaultSelect}
        />
      </>
    );
  }
}

GoodsList.propTypes = {
  goodsFromServer: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};
