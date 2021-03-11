import React from 'react';
import './App.css';
import { StartButton } from './StartButton';
import { Select } from './Select';

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
    goods: goodsFromServer,
    isStartPressed: false,
    isListShown: false,
  };

  showListHandler = () => {
    this.setState(state => ({
      isStartPressed: !state.isStartPressed,
      isListShown: !state.isListShown,
    }));
  }

  reverseHandler =() => {
    this.setState({ goods: [...goodsFromServer].reverse() });
  }

  resetHandler =() => {
    this.setState({ goods: [...goodsFromServer].sort(() => 0) });
  }

  sortByNameHandler = () => {
    this.setState({
      goods: [...goodsFromServer].sort((prevGood, currentGood) => (
        prevGood.localeCompare(currentGood))),
    });
  }

  sortByLengthHandler = () => {
    this.setState({
      goods: [...goodsFromServer].sort((prevGood, currentGood) => (
        prevGood.length - currentGood.length)),
    });
  }

  changeHandler = (event) => {
    const wordLength = event.target.value;

    this.setState({
      goods: [...goodsFromServer].filter(good => good.length >= wordLength),
    });
  }

  render() {
    const {
      goods,
      isStartPressed,
      isListShown,
    } = this.state;

    return (
      <div className="App">
        <h1 className="goods__header">Goods</h1>
        {!isStartPressed && (
          <StartButton handler={this.showListHandler} />
        )}
        {isListShown && (
          <div>
            <ul className="goods__list">
              {goods.map(good => (
                <li key={good} className="goods__item">
                  {good}
                </li>
              ))}
            </ul>
            <div className="goods__buttons">
              <button
                className="button"
                type="button"
                onClick={this.reverseHandler}
              >
                Reverse
              </button>
              <button
                className="button"
                type="button"
                onClick={this.sortByNameHandler}
              >
                Sort alphabetically
              </button>
              <button
                className="button"
                type="button"
                onClick={this.resetHandler}
              >
                Reset
              </button>
              <button
                className="button"
                type="button"
                onClick={this.sortByLengthHandler}
              >
                Sort by length
              </button>
              <Select handler={event => this.changeHandler(event)} />

            </div>
          </div>
        )}

      </div>
    );
  }
}

export default App;
