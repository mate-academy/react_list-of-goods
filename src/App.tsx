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
  isStarted: boolean,
  reverse: boolean,
  reset: boolean,
  sortBy: string,
  goods: string[],
  minLength: number,
};

class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    reverse: false,
    reset: false,
    sortBy: '',
    goods: goodsFromServer,
    minLength: 1,
  };

  start = () => {
    this.setState({
      isStarted: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
      reverse: false,
    });
  };

  reset = () => {
    this.setState({
      reverse: false,
      sortBy: '',
      minLength: 1,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      reverse: false,
    });
  };

  setMinLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const length = +event.target.value;

    this.setState({
      minLength: length,
    });
  };

  render() {
    const {
      state,
      start,
      reverse,
      sortAlphabetically,
      reset,
      sortByLength,
      setMinLength,
    } = this;
    const { isStarted, minLength } = state;
    const options = Array.from(Array(10).keys());

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          onClick={start}
        >
          Start
        </button>

        {isStarted && (
          <>
            <GoodsList {...state} />

            <button
              type="button"
              onClick={reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={reset}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={sortByLength}
            >
              Sort by length
            </button>

            <select
              onChange={setMinLength}
              value={minLength}
            >
              {options.map((option) => (
                <option
                  key={option}
                  value={option + 1}
                >
                  {option + 1}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    );
  }
}

export default App;
