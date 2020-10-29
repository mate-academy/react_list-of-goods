import React from 'react';
import { Button } from './components/Button';

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

class App extends React.PureComponent {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    isSorted: false,
    defaultLength: 1,
  }

  showList = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  }

  reverseList = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  }

  sortListByABC = () => {
    this.setState({ isSorted: 'alphabet' });
  }

  sortListByLength = () => {
    this.setState({ isSorted: 'length' });
  }

  resetList = () => {
    this.setState({
      isReversed: false,
      isSorted: false,
      defaultLength: 1,
    });
  }

  setLength = (event) => {
    this.setState({ defaultLength: event.target.value });
  }

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      isSorted,
      defaultLength,
    } = this.state;
    const newGoods = goods.filter(good => good.length >= defaultLength);

    if (isSorted) {
      newGoods.sort((g1, g2) => {
        if (isSorted === 'length') {
          return g1.length - g2.length;
        }

        return g1.localeCompare(g2);
      });
    }

    if (isReversed) {
      newGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>

        {!isVisible && (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <select
              name="lengths"
              value={defaultLength}
              onChange={this.setLength}
            >
              {goodsFromServer.map((item, i) => (
                <option value={i + 1} key={Math.random()}>
                  {i + 1}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortListByABC}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.resetList}
            >
              Reset
            </button>

            <Button onClick={this.sortListByLength} text="Sort by length" />

            <ul>
              {newGoods.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
