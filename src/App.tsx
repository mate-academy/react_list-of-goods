import React from 'react';
import './App.scss';
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
  goods: string[],
  isVisible: boolean,
  minLength: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isVisible: false,
    minLength: 1,
  };

  changeVisibility = () => {
    this.setState(({ isVisible }) => ({
      isVisible: !isVisible,
    }));
  };

  reverse = () => {
    this.setState(({ goods }) => ({
      goods: goods.reverse(),
    }));
  };

  sortAlpabetically = () => {
    this.setState(({ goods }) => ({
      goods: goods.sort((a, b) => a.localeCompare(b)),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      minLength: 1,
    });
  };

  sortByLength = () => {
    this.setState(({ goods }) => ({
      goods: goods.sort((a, b) => b.length - a.length),
    }));
  };

  setMinLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      minLength: +event.target.value,
    });
  };

  render() {
    const { goods, isVisible, minLength } = this.state;

    const normalizedGoods = goods.filter(product => product.length >= minLength);

    return (
      <div className="App">
        {isVisible || (
          <button
            type="button"
            onClick={this.changeVisibility}
            className="App__start-button"
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <GoodsList goods={normalizedGoods} />

            <div className="App__buttons">
              <button
                type="button"
                onClick={this.reverse}
                className="App__button"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortAlpabetically}
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
                className="App__button"
              >
                Reset
              </button>
            </div>

            <label
              htmlFor="minLength"
              className="App__label"
            >
              Set min length
              <select
                onChange={this.setMinLength}
                value={minLength}
                id="minLength"
                className="App__select"
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
            </label>
          </>
        )}
      </div>
    );
  }
}

export default App;
