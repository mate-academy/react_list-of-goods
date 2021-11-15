import classNames from 'classnames';
import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

const goodsFromServer: string[] = [
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
    minLength: '1',
    start: false,
    isReverse: false,
    sortBy: '',
  };

  sortByABC = () => {
    return this.setState({ sortBy: 'ABC' });
  };

  sortByLength = () => {
    return this.setState({ sortBy: 'length' });
  };

  reverse = () => {
    type PrevState = {
      isReverse: boolean,
    };

    this.setState((prevState: PrevState) => ({
      isReverse: !prevState.isReverse,
    }));
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
      minLength: '1',
    });
  };

  render() {
    const {
      goods, start, sortBy, isReverse, minLength,
    } = this.state;
    const finalGoods = [...goods].filter(item => (item.length) >= +minLength);

    finalGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'ABC':
          return g1.localeCompare(g2);

        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReverse) {
      finalGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className={classNames(
            'button',
            'button-start',
            { 'button-start_invisible': start },
          )}
          onClick={() => this.setState({ start: true })}
        >
          Start
        </button>
        {start && (
          <>
            <GoodsList allGoods={finalGoods} />
            <select
              name="maxLength"
              value={minLength}
              onChange={(event) => {
                this.setState({
                  minLength: event.target.value,
                });
              }}
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
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortByABC}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        )}

      </div>
    );
  }
}

export default App;
