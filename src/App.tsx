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
  sortAlphabetically: boolean,
  reset: boolean,
  sortByLength: boolean,
  goods: string[],
  minLength: number,
};

class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    reverse: false,
    sortAlphabetically: false,
    reset: false,
    sortByLength: false,
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
      sortAlphabetically: true,
      reverse: false,
      sortByLength: false,
    });
  };

  reset = () => {
    this.setState({
      reverse: false,
      sortAlphabetically: false,
      sortByLength: false,
      minLength: 1,
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      sortByLength: !state.sortByLength,
      sortAlphabetically: false,
      reverse: false,
    }));
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
          </>
        )}
      </div>
    );
  }
}

export default App;
