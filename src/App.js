import React from 'react';
import ListOfGoods from './components/ListOfGoods';

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
    isLoaded: false,
    selectedValue: 1,
  };

  loadData = () => {
    this.setState({
      goods: goodsFromServer,
      isLoaded: true,
    });
  };

  reverseListOfGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortAB = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  resetSorting = () => {
    this.setState(prevState => ({
      goods: goodsFromServer,
    }));
  };

  selectValue = (event) => {
    this.setState({
      selectedValue: event.target.value,
      goods: goodsFromServer.filter(good => good.length >= event.target.value),
    });
  };

  render() {
    const { goods, isLoaded } = this.state;

    return (
      <div className="App">
        {isLoaded
          ? (
            <>
              <ListOfGoods
                goods={goods}
              />

              <button type="button" onClick={this.reverseListOfGoods}>
                Reverse
              </button>

              <button type="button" onClick={this.sortAB}>
                Sort alphabetically
              </button>

              <button type="button" onClick={this.resetSorting}>
                Reset
              </button>

              <button type="button" onClick={this.sortByLength}>
                Sort by length
              </button>

              <label htmlFor="select_good_length">
                Select length of good:
                <select
                  id="select_good_length"
                  value={this.state.selectedValue}
                  onChange={this.selectValue}
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
              </label>
            </>
          )
          : (
            <button type="button" onClick={this.loadData}>
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
