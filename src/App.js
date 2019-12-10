import React from 'react';
import GoodList from './GoodList';
import Options from './Options';

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
    isStarted: false,
    visibleGoods: [...goodsFromServer],
    selectedLength: 1,
  };

  start = () => {
    this.setState({
      isStarted: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState(state => ({
      visibleGoods: [...goodsFromServer],
      selectedLength: 1,
    }));
  };

  filter = (point) => {
    this.setState({ selectedLength: point.target.value });
    this.setState(state => ({
      visibleGoods: [...goodsFromServer]
        .filter(good => good.length >= state.selectedLength),
    }));
  };

  render() {
    const { isStarted, visibleGoods } = this.state;

    return (
      <div className="App">
        <h1>People least</h1>
        {isStarted ? (
          <section>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

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
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <select
              onChange={point => this.filter(point)}
            >
              <Options />
            </select>

            <GoodList goods={visibleGoods} />
          </section>
        ) : (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

      </div>
    );
  }
}

export default App;
