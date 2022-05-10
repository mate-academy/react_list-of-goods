import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

type State = {
  goods: string[];
  visibleList: boolean;
  limit: number;
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    visibleList: false,
    limit: 1,
  };

  adderList = () => {
    this.setState((state) => ({
      visibleList: !state.visibleList,
    }));
  };

  reverseList = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((g1, g2) => g1.localeCompare(g2)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((g1, g2) => g1.length - g2.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  changeLimit = (event: React.SyntheticEvent<EventTarget>) => {
    this.setState({
      limit: +(event.target as HTMLSelectElement).value,
    });
  };

  selectReset = () => {
    this.setState({
      limit: 1,
    });
  };

  render() {
    const {
      goods,
      visibleList,
      limit,
    } = this.state;
    const visibleGoods = goods.filter((good) => good.length >= limit);

    return (
      <div className="App">
        <h1 className="App__title">Goods list</h1>
        {!visibleList && (
          <button
            type="button"
            onClick={this.adderList}
            className="App__button Button__start"
          >
            Start
          </button>
        )}

        {visibleList && (
          <>
            <GoodsList goods={visibleGoods} />
            <div className="App__buttons">
              <button
                type="button"
                onClick={this.reverseList}
                className="App__button"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByAlphabet}
                className="App__button"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
                className="App__button"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reset}
                className="App__button Button__reset"
              >
                Reset
              </button>
            </div>

            <form className="App__form">
              <select
                value={limit}
                onChange={this.changeLimit}
                className="App__select"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option value={num}>{num}</option>
                ))}
              </select>

              <button
                type="button"
                onClick={this.selectReset}
                className="App__button Button__reset"
              >
                Reset select
              </button>
            </form>
          </>
        )}
      </div>
    );
  }
}
