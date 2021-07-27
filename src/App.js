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
    isVisible: false,
    goods: [...goodsFromServer],
  }

  changeVisibility = () => {
    this.setState({ isVisible: true });
  }

  reverseList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  }

  render() {
    return (
      <div className="App">
        {this.state.isVisible
          ? (
            <>
              <h1>
                Goods
              </h1>
              <ul className="goodsList">
                {this.state.goods.map(good => (
                  <li>
                    {good}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )
          : (
            <button
              type="button"
              onClick={this.changeVisibility}
            >
              Start
            </button>
          )
         }

      </div>
    );
  }
}

export default App;
