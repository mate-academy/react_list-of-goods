import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
  started: boolean,
  goods: string[],
  reversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    started: false,
    goods: goodsFromServer,
    reversed: false,
    sortBy: '',
  };

  visibleGoods = () => {
    const { goods, reversed, sortBy } = this.state;

    let visibleGoods = goods;

    if (sortBy) {
      visibleGoods = [...visibleGoods].sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
          default:
            return 0;
        }
      });
    }

    if (reversed) {
      visibleGoods = [...visibleGoods].reverse();
    }

    return visibleGoods;
  };

  addGoods = () => {
    this.setState({
      started: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  initial = () => {
    this.setState({
      reversed: false,
      sortBy: '',
    });
  };

  reverse = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  };

  render() {
    const {
      started,
    } = this.state;

    return (
      <div className="App">
        {!started && (
          <button
            className="start-button"
            type="button"
            onClick={this.addGoods}
          >
            Start
          </button>
        )}
        {started && (
          <>
            <h1>Goods</h1>
            <GoodsList goods={this.visibleGoods()} />
            <div className="buttons">
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.initial}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
