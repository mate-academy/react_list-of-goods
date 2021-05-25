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

export class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    isReversed: false,
    sortBy: '',
    length: 1,
    isVisible: false,
  }

  start = () => {
    this.setState({ isVisible: true });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      isReversed: false,
      sortBy: '',
      length: 1,
    });
  }

  selectChange = (value) => {
    this.setState({ length: value });
  }

  render() {
    const { goods, isReversed, sortBy, length, isVisible } = this.state;
    const selectArr = Array(10).fill(0).map((_, i) => i + 1);
    const visibleGoods = [...goods].filter(good => good.length >= length);

    visibleGoods.sort((f1, f2) => {
      switch (sortBy) {
        case 'length':
          return f1.length - f2.length;

        case 'alphabet':
          return f1.localeCompare(f2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>

        {isVisible === false
          && (
          <button
            type="button"
            className="App__button-open"
            onClick={this.start}
          >
            Start
          </button>
          )
        }

        {isVisible === true
          && (
            <>
              <ul>
                { visibleGoods.map(good => <li key={good}>{good}</li>)}
              </ul>

              <div className="App__buttons">
                <button
                  type="button"
                  className="App__reverse-button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="App__sortAlpha-button"
                  onClick={this.sortByAlphabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="App__sortLength-button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="App__reset-button"
                  onClick={this.reset}
                >
                  Reset
                </button>

                <select
                  onChange={(event) => {
                    this.selectChange(event.target.value);
                  }}
                  value={length}
                >
                  {selectArr.map(el => <option value={el}>{el}</option>)}
                </select>
              </div>
            </>
          )}
      </div>
    );
  }
}

export default App;
