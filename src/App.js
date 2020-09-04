import React from 'react';
import './App.css';
import ClassName from 'classnames';
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
    preparedGoods: [],
    didAlreadyStart: false,
  }

  start = () => {
    this.setState({
      preparedGoods: [...goodsFromServer],
      didAlreadyStart: true,
    });
  }

  reverse = () => {
    this.setState(prevState => (
      {
        preparedGoods: [...prevState.preparedGoods].reverse(),
      }
    ));
  }

  sortAlphabetically = () => {
    this.setState({
      preparedGoods: [...goodsFromServer].sort(),
    });
  }

  reset = () => {
    this.setState({
      preparedGoods: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      preparedGoods: [...prevState.preparedGoods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <p>
          length is
          {goodsFromServer.length}
        </p>

        <button
          onClick={this.start}
          className={ClassName({
            hidden: this.state.didAlreadyStart,
          })}
          type="button"
        >
          Start
        </button>

        <GoodsList goods={this.state.preparedGoods} />

        <div>
          <button
            onClick={this.reverse}
            className={ClassName({
              hidden: !this.state.didAlreadyStart,
            })}
            type="button"
          >
            Reverse
          </button>

          <button
            onClick={this.sortAlphabetically}
            className={ClassName({
              hidden: !this.state.didAlreadyStart,
            })}
            type="button"
          >
            Sort alphabetically
          </button>
          <button
            onClick={this.reset}
            className={ClassName({
              hidden: !this.state.didAlreadyStart,
            })}
            type="button"
          >
            Reset
          </button>
          <button
            onClick={this.sortByLength}
            className={ClassName({
              hidden: !this.state.didAlreadyStart,
            })}
            type="button"
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

export default App;
