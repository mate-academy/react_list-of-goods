import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './GoodsList.scss';

type Props = {
  goods: string[];
};

interface State {
  isReversed: boolean,
  isSortAlphabetically: boolean,
  isSortByLength: boolean,
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    isSortAlphabetically: false,
    isSortByLength: false,
    isReset: false,
  };

  initialState = { ...this.state };

  sortAlphabetically = () => {
    this.setState(prevState => ({
      ...this.initialState,
      isSortAlphabetically: !prevState.isSortAlphabetically,
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      ...this.initialState,
      isSortByLength: !prevState.isSortByLength,
    }));
  };

  reverse = () => {
    this.setState(prevState => ({
      ...this.initialState,
      isReversed: !prevState.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      ...this.initialState,
    });
  };

  render() {
    let { goods } = this.props;

    if (this.state.isReset) {
      goods = this.props.goods;
    }

    if (this.state.isSortAlphabetically) {
      goods = [...goods].sort((g1, g2) => g1.localeCompare(g2));
    }

    if (this.state.isSortByLength) {
      goods = [...goods].sort((g1, g2) => g1.length - g2.length);
    }

    if (this.state.isReversed) {
      goods = [...goods].reverse();
    }

    return (
      <div className="goods">
        <ul className="goods__list">
          {goods.map(goodsItem => (
            <li className="goods__item" key={uuidv4()}>
              {goodsItem}
            </li>
          ))}
        </ul>

        <div className="goods__config">
          <button
            className="goods__button"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            className="goods__button"
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>
          <button
            className="goods__button"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            className="goods__button"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
