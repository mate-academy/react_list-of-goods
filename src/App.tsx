/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';

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

type State = {
  clicked: boolean,
  reversed: boolean,
  sortBy: string,
  selected: number,
};
class App extends React.Component<{}, State> {
  state: State = {
    clicked: false,
    reversed: false,
    sortBy: '',
    selected: 1,
  };

  handlerClick = () => {
    this.setState({ clicked: true });
  };

  handlerToggleReverse = () => {
    this.setState(prevState => ({ reversed: !prevState.reversed }));
  };

  handlerSortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  handlerSortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  handlerReset = () => {
    this.setState({ reversed: false, sortBy: '', selected: 1 });
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selected: Number(event.target.value) });
  };

  render() {
    const {
      clicked, reversed, sortBy, selected,
    } = this.state;

    const compareGoods = (good1: string, good2: string, condition: string) => {
      switch (condition) {
        case 'alphabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    };

    const filteredByLength = goodsFromServer.filter(good => good.length < selected);

    const sorted = sortBy !== ''
      ? [...filteredByLength].sort((a, b) => compareGoods(a, b, sortBy))
      : filteredByLength;

    const showGoods = reversed
      ? sorted.reverse()
      : sorted;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!clicked
          ? (
            <button
              type="button"
              onClick={this.handlerClick}
            >
              Start
            </button>
          )
          : (
            <div>
              <label htmlFor="length">
                Pick good length to not show:
                <select
                  id="length"
                  value={selected}
                  onChange={this.handleChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    .map(item => (
                      <option
                        key={item.toString(10)}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                </select>
              </label>
              <ul>
                {showGoods.map(item => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={this.handlerToggleReverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.handlerSortByAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.handlerSortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.handlerReset}
              >
                Reset
              </button>

            </div>
          )}

      </div>
    );
  }
}

export default App;
