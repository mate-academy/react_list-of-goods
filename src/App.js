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
    showButton: true,
    preparedGoods: [...goodsFromServer],
  }

  showGoodsList = () => {
    this.setState(prevState => ({
      showButton: !prevState.showButton,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      preparedGoods: [...prevState.preparedGoods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      preparedGoods: [...prevState.preparedGoods].sort(),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      preparedGoods: [...goodsFromServer],
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      preparedGoods: [...prevState.preparedGoods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { showButton, preparedGoods } = this.state;

    return (
      <div className="App">
        {showButton
          ? (
            <button
              type="button"
              onClick={this.showGoodsList}
            >
              Start
            </button>
          )
          : (
            <>
              <div className="buttons">
                <button
                  type="button"
                  onClick={this.reverse}
                >
                  reverse
                </button>

                <button
                  type="button"
                  onClick={this.sortByAlphabet}
                >
                  sort by alphabet
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                >
                  reset
                </button>

                <button
                  type="button"
                  onClick={this.sortByLength}
                >
                  sort by length
                </button>
              </div>
              <ul>
                {preparedGoods.map(good => (
                  <li key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </>

          )
        }

      </div>
    );
  }
}

export default App;
