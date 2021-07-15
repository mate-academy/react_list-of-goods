import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
    isStart: false,
    initialGoods: goodsFromServer,
    isReverse: false,
    sortedBy: '',
    selectedValue: 1,
  }

  showList = () => {
    this.setState(state => ({ isStart: !state.isStart }));
  }

  reset = () => {
    this.setState({
      isStart: false,
      isReverse: false,
      sortedBy: '',
      selectedValue: 1,
    });
  }

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      sortedBy: 'name',
    }));
  }

  sortedByLength = () => {
    this.setState({
      sortedBy: 'length',
    });
  }

  selectValue = (event) => {
    this.setState({
      selectedValue: event.target.value,
    });
  }

  render() {
    let goods = [...this.state.initialGoods];
    const { sortedBy, isReverse, isStart, selectedValue } = this.state;

    if (sortedBy === 'length') {
      goods.sort((g1, g2) => g1.length - g2.length);
    }

    if (sortedBy === 'name') {
      goods.sort((g1, g2) => g1.localeCompare(g2));
    }

    if (isReverse) {
      goods.reverse();
    }

    const arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    goods = goods.filter(good => good.length >= selectedValue);

    return (
      <div className="App">
        <h1>Goods</h1>
        {isStart
          ? (
            <>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <p>
                <button
                  type="button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
              </p>
              <p>Sort by </p>

              <button
                type="button"
                onClick={this.sortedByLength}
              >
                length
              </button>

              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                name
              </button>
              <p>
                <select
                  onChange={this.selectValue}
                  value={selectedValue}
                >
                  {arrayValues.map(value => (
                    <option value={value} key={value}>{value}</option>
                  ))}
                </select>
              </p>
              <GoodsList goods={goods} />

            </>
          )
          : (
            <>
              <button type="button" onClick={this.showList}>Start</button>
            </>
          )}

      </div>
    );
  }
}

export default App;
