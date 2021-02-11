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
    goodLength: 1,
  }

  toggleStart = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  handleChange = (event) => {
    this.setState(({ goodLength: event.target.value }));
  }

  reset = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
      goodLength: 1,
    }));
  }

  sortAsc = ({ target }) => {
    const { name } = target;

    this.setState(state => ({ goods: state.goods.sort((a, b) => {
      switch (name) {
        case 'string':
          return a.localeCompare(b);

        case 'number':
          return a.length - b.length;

        default:
          return 0;
      }
    }) }));
  }

  render() {
    const {
      goods, isStarted, goodLength,
    } = this.state;

    const lengthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
              {goods.length || 0}
            </h1>
            <ul>
              {goods.filter(el => el.length >= goodLength)
                .map(good => <li key={good}>{good}</li>)}
            </ul>
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              name="string"
              onClick={event => this.sortAsc(event)}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              name="number"
              onClick={event => this.sortAsc(event)}
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
