import React from 'react';
import GoodsList from './GoodsList';
import './App.css';

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
    initialGoods: goodsFromServer,
    isListVisible: false,
    isReversed: false,
    sortBy: '',
  }

  showList = () => {
    this.setState(state => ({
      isListVisible: !state.isListVisible,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState(state => ({
      sortBy: '',
      isReversed: false,
    }));
  }

  render() {
    const { initialGoods, isListVisible, isReversed, sortBy } = this.state;

    const goods = [...initialGoods].sort((item1, item2) => {
      switch (sortBy) {
        case 'alphabet':
          return item1.localeCompare(item2);

        case 'length':
          return item1.length - item2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        <div className="choose-page">
          <h1 className="page-title">Goods</h1>
          <button
            className="btn start-btn"
            type="button"
            onClick={this.showList}
          >
            {isListVisible
              ? 'Hide'
              : 'Start'
            }
          </button>
          <div className="goods-block">
            {isListVisible && (
              <>
                <GoodsList
                  goods={goods}
                />
                <div className="btn-bar">
                  <button
                    type="button"
                    className="btn"
                    onClick={this.reverse}
                  >
                    Reverse
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={this.sortByAlphabet}
                  >
                    Sort A-Z
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
