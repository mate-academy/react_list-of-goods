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
  visibleGoods: string[];
  isStartVisible: boolean;
  isReversed: boolean;
  minLength: number;
};

class App extends React.PureComponent<{}, State> {
  state = {
    visibleGoods: [],
    isStartVisible: true,
    isReversed: false,
    minLength: 1,
  };

  start = () => {
    this.setState(state => {
      return ({
        visibleGoods: goodsFromServer,
        isStartVisible: !state.isStartVisible,
      });
    });
  };

  reverseList = () => {
    this.setState(state => {
      return ({
        isReversed: !state.isReversed,
        visibleGoods: [...state.visibleGoods].reverse(),
      });
    });
  };

  sortList = () => {
    this.setState(state => {
      return ({
        visibleGoods: [...state.visibleGoods].sort((a, b) => {
          return a.localeCompare(b);
        }),
      });
    });
  };

  resetList = () => {
    this.setState({
      visibleGoods: goodsFromServer,
      minLength: 1,
    });
  };

  sortLength = () => {
    this.setState(state => {
      return ({
        visibleGoods: [...state.visibleGoods].sort((a, b) => {
          return (a.length - b.length);
        }),
      });
    });
  };

  filterLength = (event: {
    target: { value: string };
  }) => {
    const { value } = event.target;

    this.setState({ minLength: +value });
  };

  render() {
    const {
      visibleGoods,
      isStartVisible,
      minLength,
    } = this.state;

    const renderList = visibleGoods.filter((good: string) => {
      return good.length >= minLength;
    });

    return (
      <div className="App">
        <GoodsList list={renderList} />

        {isStartVisible
          ? (
            <button
              type="button"
              onClick={this.start}
              className="start"
            >
              Start
            </button>
          )
          : (
            <div className="buttons">
              <button
                type="button"
                onClick={this.reverseList}
                className="button"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortList}
                className="button"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.resetList}
                className="button"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={this.sortLength}
                className="button"
              >
                Sort by length
              </button>

              <select
                name="length"
                onChange={this.filterLength}
                value={minLength}
                className="select"
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
            </div>
          )}
      </div>
    );
  }
}

export default App;
