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

const selectList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  goods: string[],
  activeButton: boolean,
  list: number[],
  selectValue: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    activeButton: false,
    list: [...selectList],
    selectValue: 1,
  };

  render() {
    const {
      goods,
      activeButton,
      list,
      selectValue,
    } = this.state;

    return (
      <div>
        <div className={activeButton
          ? 'App'
          : 'App-start'}
        >
          <button
            type="button"
            className={activeButton
              ? 'button is-danger is-light'
              : 'button is-success is-light'}
            onClick={() => {
              return this.setState({ activeButton: !activeButton });
            }}
          >
            {activeButton
              ? 'Hide'
              : 'Start'}
          </button>

          {activeButton
            ? <GoodsList goods={goods} />
            : null}

          {activeButton
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
                      {
                        goods: [...goodsFromServer],
                        list: [...selectList],
                        selectValue: 1,
                      },
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
                  value={selectValue}
                  onChange={(event) => {
                    this.setState(
                      {
                        goods: [...goodsFromServer].filter(el => (
                          el.length >= +event.currentTarget.value)),
                        selectValue: +event.currentTarget.value,
                      },
                    );
                  }}
                >
                  {[...list].map(el => {
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
