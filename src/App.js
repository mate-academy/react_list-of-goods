import React from 'react';
import GoodsList from './GoodsList';
import SelectOptions from './SelectOptions';

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
    goods: [...goodsFromServer],
    selectedIndex: 1,
  };

  start = () => this.setState({ isStarted: true });

  reset = () => this.setState({
    goods: [...goodsFromServer],
    selectedIndex: 1,
  });

  reverse = () => this.setState(
    state => ({ goods: [...state.goods].reverse() })
  );

  sortAlphabetically = () => this.setState(
    state => ({ goods: [...state.goods].sort((a, b) => a.localeCompare(b)) })
  );

  sortByLength = () => this.setState(
    state => ({ goods: [...state.goods].sort((a, b) => a.length - b.length) })
  );

  filterByLength = (e) => {
    this.setState({ selectedIndex: e.target.value });
    this.setState(
      state => ({
        goods: [...state.goods].filter(
          item => item.length >= state.selectedIndex
        ),
      })
    );
  };

  render() {
    const { isStarted, goods, selectedIndex } = this.state;

    return (
      <>
        {isStarted ? (
          <section className="goods">
            <button
              type="button"
              className="button"
              onClick={this.reset}
            >
                Reset
            </button>
            <button
              type="button"
              className="button"
              onClick={this.reverse}
            >
                Reverse
            </button>
            <button
              type="button"
              className="button"
              onClick={this.sortAlphabetically}
            >
                Sort alphabetically
            </button>
            <button
              type="button"
              className="button"
              onClick={this.sortByLength}
            >
                Sort by length
            </button>
            <select
              value={selectedIndex}
              onChange={e => this.filterByLength(e)}
            >
              <SelectOptions />
            </select>
            <GoodsList goods={goods} />
          </section>
        )
          : (
            <button
              type="button"
              className="startButton"
              onClick={this.start}
            >
              Start
            </button>
          )
        }
      </>
    );
  }
}

export default App;
