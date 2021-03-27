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

  showList = () => {
    this.setState({
      goods: [...goodsFromServer],
      isStartButtonVisible: false,
    });
  };

  reverseList = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  };

  sortByAlphabetic = () => {
    this.setState(prevState => ({
      goods: [...goodsFromServer].sort(),
    }));
  };

  resetListToDefault = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByNameLength = () => {
    this.setState({
      goods: [...goodsFromServer].sort((previous, next) => (
        previous.length - next.length
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
          onClick={this.showList}
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.reverseList}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortByAlphabetic}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.resetListToDefault}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByNameLength}
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
