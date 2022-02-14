import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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

type State = {
  goods: string[],
  started: boolean,
  isReversed: boolean,
  sortedAlphabetically: boolean,
  sortedByLength: boolean,
  goodsLength: number
};

class App extends React.Component<Props, State> {
  state = {
    goods: goodsFromServer,
    started: false,
    isReversed: false,
    sortedAlphabetically: false,
    sortedByLength: false,
    goodsLength: 1,
  };

  start = () => {
    this.setState({ started: true });
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      sortedAlphabetically: !state.sortedAlphabetically,
      sortedByLength: false,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      sortedByLength: !state.sortedByLength,
      sortedAlphabetically: false,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortedAlphabetically: false,
      sortedByLength: false,
      goodsLength: 1,
    });
  };

  changeLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ goodsLength: +event.target.value });
  };

  render() {
    const {
      goods,
      started,
      isReversed,
      sortedAlphabetically,
      sortedByLength,
      goodsLength,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!started && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        {started && (
          <>
            <GoodsList
              goods={goods}
              isReversed={isReversed}
              sortedAlphabetically={sortedAlphabetically}
              sortedByLength={sortedByLength}
              goodsLength={goodsLength}
            />
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <select
              id="length"
              onChange={(event) => {
                this.changeLength(event);
              }}
              value={goodsLength}
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
