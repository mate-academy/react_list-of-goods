import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    isVisible: true,
  }

  showContent = () => {
    this.setState({ isVisible: false });
  };

  hideContent = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((firstGood, secondGood) => firstGood.localeCompare(secondGood)),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((firstGood, secondGood) => firstGood.length - secondGood.length),
    }));
  }

  render() {
    const { goods, isVisible } = this.state;

    return (
      <>
        {isVisible
          ? (
            <button
              type="button"
              onClick={this.showContent}
            >
              Start
            </button>
          )

          : (
            <div>
              <h1>Goods</h1>

              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <GoodsList goods={goods} />
            </div>
          )}
      </>
    );
  }
}

export default App;
