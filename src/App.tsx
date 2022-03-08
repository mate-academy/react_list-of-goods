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

type State = {
  goods: string[],
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
  selectedNumber: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortBy: '',
    selectedNumber: 1,
  };

  start = () => {
    this.setState({
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = () => {
    this.setState({
      sortBy: 'abc',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  selected = (e: string) => {
    this.setState(() => ({ selectedNumber: +e }));
  };

  render() {
    const {
      goods, isVisible, isReversed, sortBy, selectedNumber,
    } = this.state;

    const copyList = [...goods].filter(item => item.length >= selectedNumber);

    copyList.sort((first, second) => {
      switch (sortBy) {
        case 'abc':
          return first.localeCompare(second);

        case 'length':
          return first.length - second.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      copyList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isVisible && (
          <button
            type="button"
            className="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <ul className="list">
              {copyList.map(good => (
                <li key={good} className="item">
                  {good}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button"
              onClick={this.sort}
            >
              Sort
            </button>

            <button
              type="button"
              className="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              type="button"
              className="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <select
              className="select"
              value={selectedNumber}
              onChange={(e) => this.selected(e.target.value)}
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
