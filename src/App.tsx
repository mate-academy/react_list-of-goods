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

type State = {
  start: boolean;
  isReversed: boolean;
  sortBy: string;
  goods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    start: false,
    isReversed: false,
    sortBy: '',
  };

  loadContent = () => {
    this.setState(state => ({
      start: !state.start,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  makeSortBy = (methodSort: string) => {
    this.setState({ sortBy: methodSort });
  };

  filterLength = (event: any) => {
    this.setState(() => ({
      goods: [...goodsFromServer].filter(good => good.length >= event.target.value),
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: '',
    }));
  };

  render() {
    const {
      start,
      goods,
      isReversed,
      sortBy,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <div className="buttons">
          <button
            type="button"
            className="buttons__top"
            onClick={this.loadContent}
          >
            {start ? 'Hide' : 'Start'}
          </button>
          {start && (
            <div>
              <button
                type="button"
                onClick={() => this.makeSortBy('alphabetically')}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={() => this.makeSortBy('length')}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <select onChange={(e) => this.filterLength(e)}>
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
            </div>
          )}

          <div className="content">
            <GoodsList
              goods={goods}
              start={start}
              isReversed={isReversed}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
