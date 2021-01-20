import React from 'react';
import './App.scss';

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

const valuesForSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    showList: false,
    isReversed: false,
    sortBy: '',
    selectedValue: 1,
  }

  show = () => {
    this.setState({
      showList: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      selectedValue: 1,
    });
  }

  changeValue = (e) => {
    this.setState({
      selectedValue: e.target.value,
    });
  }

  render() {
    const { isReversed, goods, showList, sortBy, selectedValue } = this.state;
    let newGoods = [...goods];

    if (sortBy === 'name') {
      newGoods.sort((a, b) => a.localeCompare(b));
    }

    if (sortBy === 'length') {
      newGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      newGoods.reverse();
    }

    newGoods = newGoods.filter(good => good.length >= +selectedValue);

    return (
      <div className="App">
        <h1>
          Goods:
          {goods.length}
        </h1>
        {
          !showList
            ? (
              <button
                type="button"
                className="start-button buttons"
                onClick={this.show}
              >
                Start
              </button>
            )

            : (
              <div>
                <button
                  type="button"
                  className="buttons"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={this.sortByName}
                >
                  Sort by name
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <select
                  className="select-goods"
                  onChange={this.changeValue}
                  value={selectedValue}
                >
                  {
                    valuesForSelect.map(value => (
                      <option value={value} key={value}>{value}</option>
                    ))
                  }
                </select>

                <button
                  type="button"
                  className="buttons buttons--reset"
                  onClick={this.reset}
                >
                  Reset
                </button>

                <GoodsList goods={newGoods} />
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
