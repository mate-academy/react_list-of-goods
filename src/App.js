import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

const activeButtonColor = '6px solid gold';

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
    goods: goodsFromServer,
    isVisible: true,
    isSelected: '',
  }

  startGoods = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
      isSelected: 'reverse',
    }));
  };

  sortAlphabeticallyGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prev, next) => prev.localeCompare(next),
      ),
      isSelected: 'sortAlphabetically',
    }));
  };

  resetGoods = () => {
    this.setState(({
      goods: goodsFromServer,
      isSelected: 'reset',
    }));
  };

  sortByLengthGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prev, next) => prev.length - next.length,
      ),
      isSelected: 'sortByLength',
    }));
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="App">
        <h1 className="header">Goods</h1>
        {' '}
        {
          isVisible && (
            <button
              type="button"
              onClick={this.startGoods}
            >
              Start
            </button>
          )
        }
        {' '}
        {
          !isVisible && (
            <>
              <button
                style={this.state.isSelected === 'reverse'
                  ? { border: activeButtonColor }
                  : {}
                }
                type="button"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>
              <button
                style={this.state.isSelected === 'sortAlphabetically'
                  ? { border: activeButtonColor }
                  : {}
              }
                type="button"
                onClick={this.sortAlphabeticallyGoods}
              >
                Sort alphabetically
              </button>
              <button
                style={this.state.isSelected === 'reset'
                  ? { border: activeButtonColor }
                  : {}
              }
                type="button"
                onClick={this.resetGoods}
              >
                Reset
              </button>
              <button
                style={this.state.isSelected === 'sortByLength'
                  ? { border: activeButtonColor }
                  : {}
              }
                type="button"
                onClick={this.sortByLengthGoods}
              >
                Sort by length
              </button>

              <GoodsList goods={goods} />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
