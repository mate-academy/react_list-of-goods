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
    n: 1,
    stan: false,
    list: goodsFromServer,
  };

  toStart = () => {
    const { stan } = this.state;

    this.setState({ stan: !stan });
  }

  toReset = () => {
    this.setState(state => ({
      list: goodsFromServer,
      n: 1,
    }));
  }

  toReverse = () => {
    this.setState(state => ({
      list: [...state.list].reverse(),
    }));
  }

  toSortAl = () => {
    this.setState(state => ({
      list: [...state.list].sort(),
    }));
  }

  toSortLen = () => {
    this.setState(state => ({
      list: [...state.list].sort((a, b) => a.length - b.length),
    }));
  }

  toChange = (event) => {
    const i = event.target.value;

    this.toReset();

    this.setState(state => ({
      n: i,
      list: state.list.filter(a => a.length > i),
    }));
  }

  render() {
    const { stan, list, n } = this.state;

    return (
      <div className="App">
        <button
          className={stan ? 'start--none' : 'start'}
          type="button"
          onClick={this.toStart}
        >
          START
        </button>

        <div
          className={stan ? 'button-box' : 'button-box--none'}
        >
          <button
            className="button-box__button"
            type="button"
            onClick={this.toReset}
          >
            RESET
          </button>

          <button
            className="button-box__button"
            type="button"
            onClick={this.toSortAl}
          >
            SORT ALPHABETICALLY
          </button>

          <button
            className="button-box__button"
            type="button"
            onClick={this.toSortLen}
          >
            SORT BY LENGTH
          </button>

          <button
            className="button-box__button"
            type="button"
            onClick={this.toReverse}
          >
            REVERSE
          </button>

          <input
            name="input"
            className="button-box__button button-box__button--input"
            type="number"
            placeholder="10"
            value={n}
            max="10"
            min="1"
            onChange={this.toChange}
          />
        </div>

        <div
          className={stan ? 'list-box' : 'list-box--none'}
        >
          <ul>
            {list.map(good => (
              <li
                key={Math.random()}
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
