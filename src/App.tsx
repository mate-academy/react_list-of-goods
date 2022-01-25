import React from 'react';
import classNames from 'classnames';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

const goodsFromServer: string[] = [
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

type State = {
  goods: string[],
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
  };

  start = () => {
    this.setState(prev => ({
      isVisible: !prev.isVisible,
    }));
  };

  reverse = () => {
    this.setState(prev => ({
      goods: [...prev.goods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState(prev => ({
      goods: [...prev.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(prev => ({
      goods: [...prev.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.start}
          className={
            classNames(
              'button',
              { 'button-hidden': isVisible },
            )
          }
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.reverse}
          className={
            classNames(
              'button',
            )
          }
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortByAlphabet}
          className={
            classNames(
              'button',
            )
          }
        >
          sortByAlphabet
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
          className={
            classNames(
              'button',
            )
          }
        >
          sortByLength
        </button>

        <button
          type="button"
          onClick={this.reset}
          className={
            classNames(
              'button',
            )
          }
        >
          reset
        </button>
        {isVisible && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
