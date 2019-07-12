import React from 'react';
import {directive} from "@babel/types";

import ListOfGoods from './ListOfGoods';
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
    goods: [],
    visibleGoods: [],
    isLoaded: false,
    sortField: 'length',
    filterValue: 1,
  };

  componentDidMount() {
    this.setState({
      goods: [...goodsFromServer],
      visibleGoods: [...goodsFromServer],
    });
  }

  showGoodsList = () => {
    this.setState({ isLoaded: true });
  };

  sortRules = (sortField) => {
    let direction = 1;

    if (sortField === this.state.sortField) {
      direction *= -1;
    }

    switch (sortField) {
      case 'length':
        return (x, y) => x.length - y.length * direction;
      case 'alphabet':
        return (x, y) => x.localeCompare(y) * direction;
      default: return 0;
    }
  };

  sortGoods = (sortField) => {
    this.setState((prevState) => {

      const { visibleGoods } = prevState;
      const sortedGoods = [...visibleGoods].sort(this.sortRules(sortField));

      return { visibleGoods: sortedGoods, sortField };
    });
  };

  filterGoods = (event) => {
    const filterValue = event.target.value;

    this.setState((prevState) => {
      const { goods, sortField } = prevState;

      const filteredGoods = [...goods]
        .sort(this.sortRules(sortField))
        .filter(item => item.length > filterValue);

      return { visibleGoods: filteredGoods, filterValue };
    });
  };

  reverse = () => {
    this.setState(prevState => ({
      visibleGoods: prevState.visibleGoods.reverse(),
    }));
  };

  resetAll = () => {
    this.setState((prevState) => {
      return {
        visibleGoods: prevState.goods,
        filterValue: 1,
      };
    });
  };

  render() {
    const { visibleGoods, isLoaded, filterValue } = this.state;
    return (
      !isLoaded ? (
        <button type="button" onClick={this.showGoodsList}>Show list</button>
      ) : (
        <div className="App">
          <div>
            <button type="button" onClick={() => this.sortGoods('length')}>
              By Length
            </button>
            <button type="button" onClick={() => this.sortGoods('alphabet')}>
              By Alphabetical
            </button>
            <button type="button" onClick={this.reverse}>
              Reverse
            </button>
            <button type="button" onClick={this.resetAll}>
              Reset
            </button>

            <select value={filterValue} onChange={this.filterGoods}>
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

            <ListOfGoods visibleGoods={visibleGoods} />
          </div>
        </div>
      )
    );
  }
}

export default App;
