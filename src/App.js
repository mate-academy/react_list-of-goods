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
    goods: [],
    isStartButtonVisible: true,
  }

  start = () => {
    this.setState({
      goods: [...goodsFromServer],
      isStartButtonVisible: false,
    });
  };

  reverse = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  };

  alphabeticSort = () => {
    this.setState(prevState => ({
      goods: [...goodsFromServer].sort(),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  nameLengthSort = () => {
    this.setState({
      goods: [...goodsFromServer].sort((prev, next) => (
        prev.length - next.length
      )),
    });
  };

  render() {
    const { goods, isStartButtonVisible } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          className={isStartButtonVisible
            ? 'visible'
            : 'invisible'
          }
          onClick={this.start}
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.alphabeticSort}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.nameLengthSort}
        >
          Sort by length
        </button>
        <ul>
          {goods.map(good => (
            <li
              key={good}
              className="list__item"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
