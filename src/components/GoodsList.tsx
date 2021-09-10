import React from 'react';
import { Button } from './Button';
import './GoodsList.css';

enum SortType {
  Alphabetically,
  Length,
}

type State = {
  goods: string[];
  isReversed: boolean;
  sortType: SortType | null;
  minLength: number;
};

type Props = {
  goods: string[];
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: this.props.goods,
    isReversed: false,
    sortType: null,
    minLength: 1,
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: null,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = (sortType: SortType) => {
    this.setState({ sortType });
  };

  getVisibleGoods = () => {
    const {
      goods, sortType, isReversed, minLength,
    } = this.state;
    let visibleGoods = [...goods];

    if (minLength) {
      visibleGoods = visibleGoods.filter(good => (
        good.length >= minLength
      ));
    }

    switch (sortType) {
      case SortType.Alphabetically:
        visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
        break;

      case SortType.Length:
        visibleGoods.sort((g1, g2) => g1.length - g2.length);
        break;

      default:
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  getGoodsLengths = () => {
    const { goods } = this.state;

    return goods.map((_good, i) => i + 1);
  };

  handleLengthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ minLength: +event.target.value });
  };

  render() {
    const { minLength } = this.state;
    const visibleGoods = this.getVisibleGoods();
    const goodsLengths = this.getGoodsLengths();

    return (
      <div className="GoodsList">
        <div className="GoodsList__controls">
          <Button
            name="Reverse"
            clickHandler={() => {
              this.reverse();
            }}
          />
          <Button
            name="Sort alphabetically"
            clickHandler={() => {
              this.sort(SortType.Alphabetically);
            }}
          />
          <Button
            name="Sort by length"
            clickHandler={() => {
              this.sort(SortType.Length);
            }}
          />
          <Button
            name="Reset"
            clickHandler={() => {
              this.reset();
            }}
          />
          <label htmlFor="goodsLength" className="GoodsList__length-control">
            Choose min good length
            <select
              name="goodsLength"
              id="goodsLength"
              value={minLength}
              onChange={this.handleLengthChange}
            >
              {goodsLengths.map(goodLength => (
                <option key={goodLength} value={goodLength}>
                  {goodLength}
                </option>
              ))}
            </select>
          </label>
        </div>
        <ul>
          {visibleGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
