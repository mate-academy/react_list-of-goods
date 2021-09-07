import React from 'react';
import './App.css';
// import { GoodsList } from './components/GoodsList';

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
  isStarted: boolean;
  goodsList: string[];
  isReversed: boolean;
  sortBy: 'alphabet' | 'length',
}

class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    goodsList: goodsFromServer,
    isReversed: false,
    sortBy: 'alphabet',
  };

  start = () => {
    this.setState((currentState) => ({
      isStarted: currentState.isStarted,
    }));
  };

  reverseGoods = () => {
    this.setState((currentState) => ({
      isReversed: !currentState.isReversed,
    }));
  };

  alphabetSort = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  lengthSort = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  render() {
    const {
      isStarted,
      goodsList,
      isReversed,
      sortBy,
    } = this.state;

    const visibleGoods = [...goodsList];

    visibleGoods.sort((goodA, goodB) => {
      switch (sortBy) {
        case 'alphabet':
          return goodA.localeCompare(goodB);

        case 'length':
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="display-1 text-center">
          Goods
        </h1>

        {!isStarted && (
          <button
            type="button"
            className="btn btn-success"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isStarted && (
          <div>
            <ul>
              {visibleGoods.map((good) => (
                <li>
                  {good}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn btn-warning"
              onClick={this.reverseGoods}
            >
              Reverse
            </button>

            Sort by:
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.alphabetSort}
            >
              Alphabet
            </button>

            <button
              type="button"
              className="btn btn-warning"
              onClick={this.lengthSort}
            >
              length
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
