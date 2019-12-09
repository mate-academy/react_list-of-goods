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
      visibleGoods: [...state.visibleGoods].sort(),
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
      visibleGoods: [...state.visibleGoods]
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
              Sort
            </button>

            <select
              // value={selectedLength}
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
