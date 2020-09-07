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
    minLength: 1,
    active: false,
    list: goodsFromServer,
  };

  handleStart = () => {
    const { active } = this.state;

    this.setState({ active: !active });
  }

  handleReset = () => {
    this.setState(state => ({
      list: goodsFromServer,
      minLength: 1,
    }));
  }

  handleReverse = () => {
    this.setState(state => ({
      list: [...state.list].reverse(),
    }));
  }

  handleSortAlphavetically= () => {
    this.setState(state => ({
      list: [...state.list].sort((word1, word2) => word1.localeCompare(word2)),
    }));
  }

  handleSortLength = () => {
    this.setState(state => ({
      list: [...state.list].sort((a, b) => a.length - b.length),
    }));
  }

  handleChange = (event) => {
    const i = event.target.value;

    this.handleReset();

    this.setState(state => ({
      minLength: i,
      list: state.list.filter(a => a.length >= i),
    }));
  }

  render() {
    const { active, list, minLength } = this.state;

    return (
      <div className="App">
        <button
          className={active ? 'start--none' : 'start'}
          type="button"
          onClick={this.handleStart}
        >
          Start
        </button>

        <div
          className={active ? 'button-box' : 'button-box--none'}
        >
          <button
            className="button-box__button"
            type="button"
            onClick={this.handleReset}
          >
            Reset
          </button>

          <button
            className="button-box__button"
            type="button"
            onClick={this.handleSortAlphavetically}
          >
            Sort alphavetically
          </button>

          <button
            className="button-box__button"
            type="button"
            onClick={this.handleSortLength}
          >
            Sort by length
          </button>

          <button
            className="button-box__button"
            type="button"
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          <select
            name="input"
            className="button-box__button"
            type="number"
            placeholder="10"
            value={minLength}
            size="1"
            onChange={this.handleChange}
          >
            {[...Array(10)].map((_, i) => {
              const item = i;

              return (
                <option key={item}>{ i + 1 }</option>
              );
            })}
          </select>
        </div>

        <div
          className={active ? 'list-box' : 'list-box--none'}
        >
          <ul>
            {list.map(good => (
              <li
                key={good}
                className="list-box__item"
              >
                {good}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
