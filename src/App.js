import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    goods: [...goodsFromServer],
    isVisible: true,
    defaultValue: '1',
  }

  showList = () => {
    this.setState({ isVisible: false });
  }

  hideList = () => {
    this.setState({ isVisible: true });
  }

  sortInAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((first, second) => first.localeCompare(second)),
    }));
  }

  sortInLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((first, second) => first.length - second.length),
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
      defaultValue: 1,
    }));
  }

  filterByLength = ({ target }) => {
    this.setState({
      defaultValue: target.value,
      goods: goodsFromServer
        .filter(product => product.length >= target.value),
    });
  }

  render() {
    const { goods, isVisible, defaultValue } = this.state;
    const numbersInList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div>
        {isVisible
          ? (
            <button
              type="button"
              onClick={this.showList}
              className="button"
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                onClick={this.hideList}
                className="button"
              >
                Hide
              </button>
              <div>
                <button
                  type="button"
                  onClick={this.reverseList}
                  className="button"
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={this.sortInAlphabet}
                  className="button"
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  onClick={this.reset}
                  className="button"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={this.sortInLength}
                  className="button"
                >
                  Sort by length
                </button>
                <select
                  value={defaultValue}
                  onChange={this.filterByLength}
                >
                  {numbersInList.map(num => (
                    <option key={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <GoodsList goods={goods} />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
