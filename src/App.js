import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.css';

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
    selectedValue: '1',
  }

  start = () => {
    this.setState({ isStarted: true });
  }

  reverse = () => {
    this.setState(prevState => (
      { visibleGoods: [...prevState.visibleGoods].reverse() }
    ));
  }

  sortAlphabetically = () => {
    this.setState(prevState => (
      {
        visibleGoods: [...prevState.visibleGoods].sort(
          (a, b) => a.localeCompare(b),
        ),
      }
    ));
  }

  reset = () => {
    this.setState(
      {
        visibleGoods: [...goodsFromServer],
        selectedValue: '1',
      },
    );
  }

  sortByLength = () => {
    this.setState(prevState => (
      {
        visibleGoods: [...prevState.visibleGoods].sort(
          (a, b) => a.length - b.length,
        ),
      }
    ));
  }

  onSelectChange = (event) => {
    this.setState({ selectedValue: event.target.value });
    this.setState(prevState => (
      {
        visibleGoods: goodsFromServer.filter(
          good => good.length >= prevState.selectedValue,
        ),
      }
    ));
  }

  render() {
    const { isStarted, visibleGoods, selectedValue } = this.state;

    return (
      <div className="App">
        <h1>List of Goods</h1>
        {isStarted
          ? (
            <div>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort by letter
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <select
                value={selectedValue}
                onChange={event => this.onSelectChange(event)}
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
              <GoodsList goods={visibleGoods} />
            </div>
          )
          : (
            <button
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
