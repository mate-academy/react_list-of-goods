import React from 'react';
import { GoodsList } from './GoodsList';

import './GoodsListContainer.scss';

import { State } from '../types/goodsListContainer/State';
import { Props } from '../types/goodsListContainer/Props';

class GoodsListContainer extends React.Component<Props, State> {
  state = {
    isVisible: false,
    isReversed: false,
    sortBy: '',
    lengthLimit: '10',
  };

  show = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByGood = () => {
    this.setState({
      sortBy: 'good',
    });
  };

  sortByGoodLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      lengthLimit: '10',
    });
  };

  changeLength = (event: any) => {
    this.setState({
      lengthLimit: event.target.value,
    });
  };

  render() {
    const {
      isVisible,
      isReversed,
      sortBy,
      lengthLimit,
    } = this.state;

    const { goods } = this.props;

    const visualizedGoods = goods.filter(
      good => good.length <= +lengthLimit,
    );

    visualizedGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'good':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visualizedGoods.reverse();
    }

    return (
      <div className="GoodsListContainer">
        <div className="wraperButtonStart">
          {!isVisible && (
            <button
              type="button"
              onClick={this.show}
            >
              Start
            </button>
          )}
        </div>

        <div className="selectBox">
          <p className="text">
            The length of the product name should not exceed:
          </p>
          <select
            className="select"
            value={lengthLimit}
            onChange={this.changeLength}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <button
          className="button"
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          className="button"
          type="button"
          onClick={this.sortByGood}
        >
          Sort alphabetically
        </button>

        <button
          className="button"
          type="button"
          onClick={this.sortByGoodLength}
        >
          Sort by length
        </button>

        <button
          className="button"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        {isVisible && (
          <GoodsList
            goods={visualizedGoods}
          />
        )}
      </div>
    );
  }
}

export default GoodsListContainer;
