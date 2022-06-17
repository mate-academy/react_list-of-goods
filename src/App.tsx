import React from 'react';
import '../node_modules/bulma/css/bulma-rtl.css';

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

function createList() {
  const result = [];
  const maxLength = 10;
  const minLength = 0;

  for (let i = minLength; i <= maxLength; i += 1) {
    result[result.length] = i;
  }

  return result;
}

const listOfLength = createList();

interface State {
  visibility: boolean,
  goods: string[],
  length: number,
  listOfOptions: number[],
}

class App extends React.Component<{}, State> {
  state: State = {
    visibility: false,
    goods: [...goodsFromServer],
    length: 10,
    listOfOptions: listOfLength,
  };

  sortByAbc = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a: string, b: string) => (
        (a).localeCompare(b)
      )),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a: string, b: string) => (
        a.length - b.length
      )),
    }));
  };

  filterByLength = (goods: string[], length: number) => {
    return [...goods].filter((good: string) => (
      good.length <= length
    ));
  };

  render() {
    const {
      visibility,
      goods,
      length,
      listOfOptions,
    } = this.state;

    const visiblGoods = this.filterByLength(goods, length);

    return (
      <div className="
          App
          container
          is-flex
          is-flex-direction-column
          is-align-items-center
          m-3
        "
      >
        <h1 className="is-size-3">
          Goods
        </h1>
        {(!visibility)
          ? (
            <button
              type="button"
              className="button m-3 is-primary"
              onClick={() => {
                this.setState({ visibility: true });
              }}
            >
              Start
            </button>
          ) : (
            <>
              <div className="
                is-flex
                is-flex-direction-row
                is-justify-content-space-between
                "
              >
                <button
                  type="button"
                  className="button m-3 is-primary"
                  onClick={() => {
                    this.setState((state: State) => ({
                      goods: [...state.goods].reverse(),
                    }));
                  }}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="button m-3 is-primary"
                  onClick={this.sortByAbc}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className="button m-3 is-primary"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
                <button
                  type="button"
                  className="button m-3 is-primary"
                  onClick={() => {
                    this.setState({
                      goods: goodsFromServer,
                      length: 10,
                    });
                  }}
                >
                  Reset
                </button>
                <div
                  className="
                    select
                    is-primary
                    m-3
                    is-align-self-center
                  "
                >
                  <select
                    name="length"
                    value={length}
                    onChange={event => {
                      this.setState({
                        length: +event.target.value,
                      });
                    }}
                  >
                    {listOfOptions.map(element => (
                      <>
                        <option value={element}>{element}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
              <ul>
                {visiblGoods.map((good: string) => (
                  <li
                    key={good}
                    className="is-size-5"
                  >
                    {good}
                  </li>
                ))}
              </ul>
            </>
          )}
      </div>
    );
  }
}

export default App;
