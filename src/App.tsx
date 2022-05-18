import React from 'react';
import './App.scss';

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
  start: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    start: false,
  };

  showListOfGoods = () => {
    this.setState({
      start: true,
    });
  };

  reverseList = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortList = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a: string, b: string) => (
        a.localeCompare(b)
      )),
    }));
  };

  sortListByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a: string, b: string) => (
        a.length - b.length
      )),
    }));
  };

  resetList = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  render() {
    const { goods, start } = this.state;

    return (
      <div className="goods-list">
        {start ? (
          <div className="goods-list-wrp">
            <h2>List of goods</h2>

            <nav className="nav">
              <button
                className="nav__btn"
                type="button"
                onClick={this.reverseList}
              >
                reverse
              </button>

              <button
                className="nav__btn"
                type="button"
                onClick={this.sortList}
              >
                Sort alphabetically
              </button>

              <button
                className="nav__btn"
                type="button"
                onClick={this.resetList}
              >
                reset
              </button>

              <button
                className="nav__btn"
                type="button"
                onClick={this.sortListByLength}
              >
                sort by length
              </button>
            </nav>

            <main className="main">
              <ul className="main__list">
                {
                  goods.map(good => (
                    <li key={good} className="main__item">
                      {good}
                    </li>
                  ))
                }
              </ul>
            </main>
          </div>
        ) : (
          <div>
            <button
              className="goods-list__start-btn"
              type="button"
              onClick={this.showListOfGoods}
            >
              Start
            </button>
          </div>
        )}
      </div>
    );
  }
}
