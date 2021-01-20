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
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortBy: '',
  }

  start = () => {
    this.setState({ isVisible: true });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
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

  reset = () => {
    this.setState(state => ({
      isReversed: false,
      sortBy: '',
    }));
  }

  render() {
    const { isVisible, goods, isReversed, sortBy } = this.state;
    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
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
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isVisible ? (
          <button
            className="btn btn-info"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )
          : (
            <>
              <GoodsList goods={visibleGoods} />
              <button
                className="btn btn-info"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                className="btn btn-info"
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort A-Z
              </button>
              <button
                className="btn btn-info"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                className="btn btn-outline-info"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
