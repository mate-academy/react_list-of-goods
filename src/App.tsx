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

interface State {
  isStarted: boolean,
  isReversed: boolean,
  isReseted: boolean,
  sortMethod: string,
}

class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    isReseted: false,
    sortMethod: '',
  };

  start = () => {
    this.setState(
      {
        isStarted: true,
      },
    );
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      isReseted: false,
    }));
  };

  sortAlphabetically = () => {
    this.setState(
      {
        sortMethod: 'alphabetically',
        isReseted: false,
      },
    );
  };

  sortByLength = () => {
    this.setState(
      {
        sortMethod: 'length',
        isReseted: false,
      },
    );
  };

  reset = () => {
    this.setState(
      {
        isReseted: true,
      },
    );
  };

  howToDisplayGoods = () => {
    const { isReversed, isReseted, sortMethod } = this.state;
    const visualGoods = [...goodsFromServer];

    if (isReseted) {
      return visualGoods;
    }

    if (sortMethod) {
      switch (sortMethod) {
        case 'alphabetically':
          visualGoods.sort();
          break;
        case 'length':
          visualGoods.sort((good1, good2) => good1.length - good2.length);
          break;
        default:
      }
    }

    if (isReversed) {
      return visualGoods.reverse();
    }

    return visualGoods;
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>

        {!this.state.isStarted && (
          <button
            type="button"
            className="startButton"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {this.state.isStarted && (
          <div className="App__container">
            <GoodsList goodsFromServer={this.howToDisplayGoods()} />
            <div className="App__buttons">
              <button
                type="button"
                className="App__button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="App__button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="App__button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </div>

            <button
              type="button"
              className="App__button App__button--reset"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
