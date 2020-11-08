/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
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

const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

class App extends React.Component {
  state = {
    list: goodsFromServer,
    isShowList: false,
    isReversed: false,
    sortBy: '',
    select: '1',
  };

  render() {
    const { isShowList, list, isReversed, sortBy, select } = this.state;
    const listCopy = [...list].filter((item) => item.length >= select);

    listCopy.sort((a, b) => {
      switch (sortBy) {
        case 'alphabetically':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    isReversed && listCopy.reverse();

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isShowList ? (
          <button
            type="button"
            onClick={() =>
              this.setState((state) => ({
                isShowList: !state.isShowList,
              }))
            }
          >
            Start
          </button>
        ) : (
          <div>
            <ul>
              {listCopy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              <select
                value={select}
                onChange={(e) => this.setState({ select: e.target.value })}
              >
                {options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </p>

            <button
              type="button"
              onClick={() =>
                this.setState((state) => ({ isReversed: !state.isReversed }))
              }
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => this.setState({ sortBy: 'alphabetically' })}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() =>
                this.setState({
                  sortBy: '',
                  isReversed: false,
                  select: '1',
                })
              }
            >
              Reset
            </button>

            <button
              type="button"
              onClick={() => this.setState({ sortBy: 'length' })}
            >
              Sort by length
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
