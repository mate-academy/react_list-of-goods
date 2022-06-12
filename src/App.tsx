import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  goods: string[],
  counter: number,
  arr: number[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    counter: 0,
    arr: [...numArr],
  };

  render() {
    const { goods, counter, arr } = this.state;

    return (
      <div>
        <div className={counter % 2 !== 0
          ? 'App'
          : 'App-start'}
        >
          <button
            type="button"
            className={counter % 2 !== 0
              ? 'button is-danger is-light'
              : 'button is-success is-light'}
            onClick={() => {
              return this.setState({ counter: counter + 1 });
            }}
          >
            {counter % 2 !== 0
              ? 'Hide'
              : 'Start'}
          </button>

          {counter % 2 !== 0
            ? <GoodsList goods={goods} />
            : null}

          {counter % 2 !== 0
            ? (
              <>
                <button
                  type="button"
                  className="button is-info is-light"
                  onClick={() => (
                    this.setState({ goods: [...goods].reverse() })
                  )}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button is-info is-light"
                  onClick={() => (
                    this.setState(
                      { goods: [...goods].sort((a, b) => a.localeCompare(b)) },
                    )
                  )}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-info is-light"
                  onClick={() => (
                    this.setState(
                      { goods: [...goodsFromServer], arr: [...numArr] },
                    )
                  )}
                >
                  Reset
                </button>

                <button
                  type="button"
                  className="button is-info is-light"
                  onClick={() => (
                    this.setState(
                      { goods: [...goods].sort((a, b) => a.length - b.length) },
                    )
                  )}
                >
                  Sort by length
                </button>
                <p>
                  Choose length
                </p>
                <select
                  className="select is-info"
                  onChange={(event) => (
                    this.setState(
                      {
                        goods: [...goodsFromServer].filter(el => (
                          el.length >= +event.currentTarget.value)),
                      },
                    )
                  )}
                >
                  {[...arr].map(el => {
                    return (
                      <option value={`${el}`}>
                        {el}
                      </option>
                    );
                  })}
                </select>
              </>
            )
            : null}

        </div>
      </div>

    );
  }
}

export default App;
