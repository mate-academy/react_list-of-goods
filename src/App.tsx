import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type Props = {};

interface State {
  goods: string[];
  isVisible: boolean;
}
export class App extends React.Component<Props, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
  };

  showList = () => {
    this.setState({ isVisible: true });
  };

  reverseList = () => {
    this.setState((state) => ({ goods: [...state.goods].reverse() }));
  };

  sortList = () => {
    this.setState((prevState) => ({
      goods: [...prevState.goods].sort((firstGood, secondGood) => {
        return firstGood.localeCompare(secondGood);
      }),
    }));
  };

  sortListByLength = () => {
    this.setState((prevState) => ({
      goods: [...prevState.goods].sort((firstGood, secondGood) => {
        return firstGood.length - secondGood.length;
      }),
    }));
  };

  resetList = () => {
    this.setState({ goods: goodsFromServer });
  };

  render() {
    return this.state.isVisible === true ? (
      <div className="goods">
        <h1 className="goods__title">Goods</h1>
        <button
          type="button"
          className="button goods__button"
          onClick={this.reverseList}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button goods__button"
          onClick={this.sortList}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="button goods__button"
          onClick={this.resetList}
        >
          Reset
        </button>
        <button
          type="button"
          className="button goods__button"
          onClick={this.sortListByLength}
        >
          Sort by length
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    ) : (
      <button
        type="button"
        className="button button--show"
        onClick={this.showList}
      >
        Start
      </button>
    );
  }
}
