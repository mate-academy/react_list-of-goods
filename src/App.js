import React from 'react';
import './App.css';

import { Buttons } from './components/Buttons';

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
    isButtonVisible: true,
  }

  showListHandler = () => {
    this.setState(state => ({
      isButtonVisible: !state.isButtonVisible,
      goods: state.goods,
    }));
  }

  reverseHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  alphabeticalSortHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (currentValue, nextValue) => currentValue.localeCompare(nextValue),
      ),
    }));
  }

  resetHandler = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  lengthSortHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (currentValue, nextValue) => currentValue.length - nextValue.length,
      ),
    }));
  }

  render() {
    const { goods, isButtonVisible } = this.state;

    return (
      <div className="App">
        {isButtonVisible && (
          <Buttons
            method={this.showListHandler}
            title="Start"
            className="button button__start"
          />
        )}

        {!isButtonVisible && (
          <>
            <ul>
              {goods.map(product => (
                <li key={product}>
                  {product}
                </li>
              ))}
            </ul>

            <Buttons
              method={this.reverseHandler}
              title="Reverse"
            />

            <Buttons
              method={this.alphabeticalSortHandler}
              title="Sort alphabetically"
            />

            <Buttons
              method={this.resetHandler}
              title="Reset"
            />

            <Buttons
              method={this.lengthSortHandler}
              title="Sort by length"
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
