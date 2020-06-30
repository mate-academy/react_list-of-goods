import React from 'react';
// import PropTypes from 'prop-types';
import { GoodsItem } from '../GoodsItem/GoodsItem';

export class GoodsList extends React.Component {
  state = {
    isVisible: false,
  }

  showList = () => {
    this.setState({
      isVisible: !this.isVisible,
    });
  }

  render() {
    const { goods } = { ...this.props };
    const { isVisible } = this.state;

    return (
      <div className="Goods__wrapper">
        {isVisible
          ? (
            <ul>
              <GoodsItem goods={goods} />
            </ul>
          )
          : (
            <button type="button" onClick={this.showList}>
              Start
            </button>
          )}
      </div>
    );
  }
}
