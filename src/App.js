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
    isActive: false,
    goods: goodsFromServer,
  }

  activeList = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  reverseList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  render() {
    const { isActive, goods } = this.state;

    return (
      <div className="App">
        <button
          hidden={isActive}
          type="button"
          onClick={this.activeList}
        >
          Start
        </button>

        {isActive && (
          <ul>
            {goods.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortByAlphabet}
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
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
      </div>
    );
  }
}

export default App;
