import React from 'react';
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
    goods: [...goodsFromServer],
    isReversed: false,
    sortTypeOf: '',
    goodLength: 1,
  }

  toggleStart = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortString = () => {
    this.setState(() => ({
      sortTypeOf: 'string',
      isReversed: false,
    }));
  }

  sortNumber = () => {
    this.setState(() => ({
      sortTypeOf: 'number',
      isReversed: false,
    }));
  }

  setGoodLength = (number) => {
    this.setState(() => ({
      goodLength: number,
    }));
  }

  handleChange = (event) => {
    this.setState(({ goodLength: event.target.value }));
  }

  reset = () => {
    this.setState(() => ({
      isReversed: false,
      sortTypeOf: '',
      goodLength: 1,
    }));
  }

  render() {
    const {
      goods, isStarted, isReversed, sortTypeOf, goodLength,
    } = this.state;

    const lengthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const goodsList = [...goods].filter(el => el.length >= goodLength);

    goodsList.sort((a, b) => {
      switch (sortTypeOf) {
        case 'string':
          return a.localeCompare(b);

        case 'number':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsList.reverse();
    }

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.toggleStart}
          className={isStarted ? 'hidden' : null}
        >
          Start
        </button>
        {isStarted && (
          <span>
            <h1>
              Goods List:&nbsp;
              {goodsList.length || 0}
            </h1>
            <ul>
              {goodsList.map(good => <li key={good}>{good}</li>)}
            </ul>
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortString}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.sortNumber}
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <hr />
            <span>Set good&#39;s name length for filter : </span>
            <select
              name="goodLength"
              value={goodLength}
              onChange={this.handleChange}
            >
              {lengthOptions.map(el => (
                <option value={el}>
                  {el}
                </option>
              ))}
            </select>
          </span>
        ) }
      </div>
    );
  }
}

export default App;
