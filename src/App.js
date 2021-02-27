import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    start: false,
    goods: goodsFromServer,
    goodsLength: 1,
  };

  showList = () => {
    this.setState({ start: true });
  }

  reverse = () => {
    this.setState(state => (
      {
        goods: [...state.goods].reverse(),
      }
    ));
  }

  alphabeticalSort = () => {
    this.setState(state => (
      {
        goods: [...state.goods].sort((g1, g2) => (g1.localeCompare(g2))),
      }
    ));
  }

  lengthSort = () => {
    this.setState(state => (
      {
        goods: [...state.goods].sort((g1, g2) => (g1.length - g2.length)),
      }
    ));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      goodsLength: 1,
    });
  }

  getSelectedLength = ({ target }) => {
    this.setState({
      goodsLength: target.value,
    });
  }

  render() {
    const { start, goods, goodsLength } = this.state;
    const goodsLengthArray = new Array(10).fill().map((el, i) => (i + 1));
    const visibleGoods = goods.filter(good => good.length >= goodsLength);

    return (
      <div className="App">
        <div className="container">
          <h1>React list of goods</h1>

          {!start
            ? (
              <button
                type="button"
                className="button"
                onClick={this.showList}
              >
                Start
              </button>
            )
            : (
              <>
                <GoodsList goods={visibleGoods} />
                <button
                  type="button"
                  className="button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={this.alphabeticalSort}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={this.lengthSort}
                >
                  Sort by length
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={this.reset}
                >
                  Reset
                </button>

                <div>
                  Filter by length of goods name characters :
                  <select
                    value={goodsLength}
                    className="selector"
                    onChange={this.getSelectedLength}
                  >
                    {goodsLengthArray.map(goodslength => (
                      <option
                        key={goodslength}
                        value={goodslength}
                      >
                        {goodslength}
                      </option>
                    ))}
                  </select>
                </div>

              </>
            )
            }
        </div>

      </div>
    );
  }
}

// const App = () => (
//   <div className="App">
//     <h1>Goods</h1>
//     {goodsFromServer.length}
//   </div>
// );

export default App;
