import React from 'react';
import './App.css';

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

interface State {
  goods: string[];
  isVisible: boolean;
  length: number;
}

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    length: 1,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.currentTarget;

    this.setState({
      length: +value,
      goods: goodsFromServer.filter(good => good.length >= +value),
    });
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState((state) => ({
      goods:
        [...state.goods].sort(
          (good1, good2) => good1.localeCompare(good2),
        ),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods:
        [...state.goods].sort(
          (good1, good2) => good1.length - good2.length,
        ),
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: goodsFromServer,
      length: 1,
    }));
  };

  render() {
    const { goods, isVisible, length } = this.state;

    return (
      <div className="app">
        <h1 className="title">Goods</h1>
        {!isVisible && (
          <button
            className="button"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <div className="button-block">
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
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                className="button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <button
                className="button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <select
                className="select"
                value={length}
                onChange={this.onChange}
              >
                {goodsFromServer.map((good, index) => (
                  <option key={good} value={index + 1}>
                    {`Length >= ${index + 1}`}
                  </option>
                ))}
              </select>
            </div>
            <ul className="goods-list">
              {goods.map(good => (
                <li key={good} className="good">
                  {good}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
