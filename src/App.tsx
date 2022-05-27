import React from 'react';
import './App.scss';

const goodsFromServer = [
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
  goods: string[],
  isVisiable: boolean,
  goodLength: number,
  isReversed: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisiable: true,
    goodLength: 1,
    isReversed: false,
  };

  letStart = () => {
    this.setState({ isVisiable: false });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  filterLength: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectValue = e.target.value;

    this.setState(() => ({
      goodLength: +selectValue,
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: goodsFromServer,
      goodLength: 1,
    }));
  };

  render() {
    const {
      goods,
      isVisiable,
      goodLength,
      isReversed,
    } = this.state;

    const copyGoods = [...goods].filter(
      good => good.length >= goodLength,
    );

    if (isReversed) {
      copyGoods.reverse();
    }

    return (
      <div className="App">
        {isVisiable && (
          <button
            className="App__start"
            type="button"
            onClick={this.letStart}
          >
            Start
          </button>
        )}
        {!isVisiable && (
          <div className="App__content">
            <h1 className="App__title">Goods</h1>
            <ul className="App__list">
              {copyGoods.map(good => (
                <li className="App__item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <div className="App__buttons">
              <button
                className="App__button"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                className="App__button"
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                className="App__button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                className="App__button"
                type="button"
                onClick={this.sortLength}
              >
                Sort by length
              </button>
              <select
                className="App__button App__button--select"
                name="select"
                onChange={this.filterLength}
              >
                <option value="1">
                  {'Length >= 1'}
                </option>
                <option value="2">
                  {'Length >= 2'}
                </option>
                <option value="3">
                  {'Length >= 3'}
                </option>
                <option value="4">
                  {'Length >= 4'}
                </option>
                <option value="5">
                  {'Length >= 5'}
                </option>
                <option value="6">
                  {'Length >= 6'}
                </option>
                <option value="7">
                  {'Length >= 7'}
                </option>
                <option value="8">
                  {'Length >= 8'}
                </option>
                <option value="9">
                  {'Length >= 9'}
                </option>
                <option value="10">
                  {'Length >= 10'}
                </option>
              </select>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
