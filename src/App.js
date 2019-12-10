import React from 'react';
import GoodsList from './GoodsList';

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
    valueOfSelect: '1',
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reset = () => {
    this.setState({
      visibleGoods: [...goodsFromServer],
      valueOfSelect: '1',
    });
  };

  reverse = () => {
    this.setState(
      state => ({ visibleGoods: [...state.visibleGoods].reverse() })
    );
  };

  sortByName = () => {
    this.setState(
      state => ({
        visibleGoods: [...state.visibleGoods]
          .sort((a, b) => a.localeCompare(b)),
      }),
    );
  };

  sortByLength = () => {
    this.setState(
      state => ({
        visibleGoods: [...state.visibleGoods]
          .sort((a, b) => a.length - b.length),
      }),
    );
  };

  selectByLength = (event) => {
    const value = +event.target.value;

    this.setState(
      state => ({
        visibleGoods: goodsFromServer
          .filter(item => item.length >= value),
        valueOfSelect: value,
      }),
    );
  };

  selectOptions = () => {
    const arr = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 11; i++) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };

  render() {
    const { isStarted, visibleGoods, valueOfSelect } = this.state;

    return (
      <div className="App">
        <h1>List of Goods</h1>
        {!isStarted
          ? <button type="button" onClick={this.start}>Start</button>
          : (
            <section>
              <button type="button" onClick={this.reset}>Reset</button>
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button
                type="button"
                onClick={this.sortByName}
              >
                Sort by name
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <select value={valueOfSelect} onChange={this.selectByLength}>
                {this.selectOptions()}
              </select>
              <GoodsList goods={visibleGoods} />
            </section>
          )
        }
      </div>
    );
  }
}

export default App;
