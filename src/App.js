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
    isStartOn: false,
    isReversed: false,
    sortBy: null,
    maxLength: 1,
  }

  showList = () => {
    this.setState({ isStartOn: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAbc = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: null,
      maxLength: 1,
    });
  };

  handleSelect = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { goods, isStartOn, isReversed, sortBy, maxLength } = this.state;
    const visibleGoods = goods.filter(item => item.length >= maxLength);

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
        <p>
          Amount of goods:
          {goodsFromServer.length}
        </p>
        {isStartOn
          ? (
            <div>
              <GoodsList goods={visibleGoods} />
              <button type="button" onClick={this.reverse}>
                Reverse
              </button>
              <button type="button" onClick={this.sortAbc}>
                Sort alphabetically
              </button>
              <button type="button" onClick={this.sortByLength}>
                Sort by length
              </button>
              <button type="button" onClick={this.reset}>
                Reset
              </button>
              <form>
                <select
                  name="maxLength"
                  value={maxLength}
                  onChange={this.handleSelect}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </form>
            </div>
          )
          : (
            <button type="button" onClick={this.showList}>
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
