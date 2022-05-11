import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
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
  goods: string[],
  isReverse: boolean,
  sortBy: string,
  start: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReverse: false,
    sortBy: '',
    start: false,
  };

  reverse = () => {
    this.setState((prevState) => {
      return {
        isReverse: !prevState.isReverse,
      };
    });
  };

  sortByName = () => {
    this.setState({
      sortBy: 'name',
      isReverse: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      isReverse: false,
    });
  };

  default = () => {
    this.setState({
      sortBy: '',
      isReverse: false,
    });
  };

  render() {
    const {
      goods,
      isReverse,
      sortBy,
      start,
    } = this.state;
    const visibleGoods = [...goods];

    visibleGoods.sort((goodOne, goodTwo) => {
      switch (sortBy) {
        case ('name'):
          return goodOne.localeCompare(goodTwo);
        case ('length'):
          return goodOne.length - goodTwo.length;
        default:
          return 0;
      }
    });

    if (isReverse) {
      visibleGoods.reverse();
    }

    return start
      ? (
        <div className="app">
          <h1 className="app__title">Goods:</h1>
          <GoodsList
            goods={visibleGoods}
          />
          <div className="buttons">
            <button
              className="app__button"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              className="app__button"
              type="button"
              onClick={this.sortByName}
            >
              Sort by name
            </button>

            <button
              className="app__button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              className="app__button"
              type="button"
              onClick={this.default}
            >
              Reset
            </button>
          </div>
        </div>
      )
      : (
        <button
          className="start"
          type="button"
          onClick={() => this.setState({ start: true })}
        >
          start
        </button>
      );
  }
}

export default App;
