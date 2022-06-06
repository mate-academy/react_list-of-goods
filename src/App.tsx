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

interface State {
  visiability: boolean,
  goods: string[],
  length: number,
}

class App extends React.Component<{}, State> {
  state: State = {
    visiability: false,
    goods: [...goodsFromServer],
    length: 10,
  };

  sortByAlfa = () => {
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
      visiability,
      goods,
      length,
    } = this.state;

    const visiblGoods = this.filterByLength(goods, length);

    return (
      <div className="App">
        <h1>Goods</h1>
        {(!visiability)
          ? (
            <>
              <button
                type="button"
                onClick={() => {
                  this.setState({ visiability: true });
                }}
              >
                Start
              </button>
            </>
          ) : (
            <>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    this.setState((state: State) => ({
                      goods: state.goods.reverse(),
                    }));
                  }}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={() => {
                    this.sortByAlfa();
                  }}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  onClick={() => {
                    this.sortByLength();
                  }}
                >
                  Sort by length
                </button>
                <button
                  type="button"
                  onClick={() => {
                    this.setState({
                      goods: goodsFromServer,
                      length: 10,
                    });
                  }}
                >
                  Reset
                </button>
                <select
                  name="length"
                  value={length}
                  onChange={event => {
                    this.setState({
                      length: +event.target.value,
                    });
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <ul>
                {visiblGoods.map((good: string) => (
                  <li key={good}>{good}</li>
                ))}
              </ul>
            </>
          )}
      </div>
    );
  }
}

export default App;
