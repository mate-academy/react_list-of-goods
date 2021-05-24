import React from 'react';
import classNames from 'classnames';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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
    isVisible: false,
    isReversed: false,
    sortBy: '',
  };

  showList = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  render() {
    const { goods, isVisible, isReversed, sortBy } = this.state;
    const sortedGoods = goods.filter(item => item);

    sortedGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      sortedGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {isVisible === false
          ? (
            <button
              type="button"
              onClick={this.showList}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                className={classNames(`btn`, {
                  active: isReversed,
                })}
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>
              <button
                className={classNames(`btn`, {
                  active: sortBy === 'alphabet',
                })}
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort by alphabet
              </button>
              <button
                className={classNames(`btn`, {
                  active: sortBy === 'length',
                })}
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                className="btn"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )}

        {isVisible && <GoodsList goods={sortedGoods} />}

      </div>
    );
  }
}

export default App;
