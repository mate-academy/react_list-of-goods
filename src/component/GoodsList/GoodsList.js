import React from 'react';
import PropsTypes from 'prop-types';
import { ButtonList } from '../ButtonList/ButtonList';

export class GoodsList extends React.Component {
  state = {
    goodsFromServer: this.props.goodsFromServer,
    originalGoodsFromServer: this.props.goodsFromServer,
  };

  updateData = (value) => {
    this.setState({
      goodsFromServer: value,
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
        />
      </>
    );
  }
}

GoodsList.propTypes = {
  goodsFromServer: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};
