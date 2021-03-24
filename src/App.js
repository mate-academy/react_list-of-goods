import React from 'react';
import './App.css';

import { Button } from './components/Button';

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
          <Button
            onClick={this.showListHandler}
            title="Start"
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

            <Button
              onClick={this.reverseHandler}
              title="Reverse"
            />

            <Button
              onClick={this.alphabeticalSortHandler}
              title="Sort alphabetically"
            />

            <Button
              onClick={this.resetHandler}
              title="Reset"
            />

            <Button
              onClick={this.lengthSortHandler}
              title="Sort by length"
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
