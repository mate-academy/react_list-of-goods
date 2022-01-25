import React from 'react';
import classNames from 'classnames';

import { GoodsList } from './GoodsList';

import './App.scss';

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

type State = {
  goods: string[];
  buttonVisible: boolean;
  isReversed: boolean;
  sortBy: string;
};

type Props = {};

enum Sortby {
  Name = 'name',
  Length = 'length',
}

class App extends React.Component<Props, State> {
  state: State = {
    goods: [...goodsFromServer],
    buttonVisible: true,
    isReversed: false,
    sortBy: '',
  };

  startHandler = () => {
    this.setState((state) => ({
      buttonVisible: !state.buttonVisible,
    }));
  };

  reverseHandler = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByNameHandler = () => {
    this.setState(() => ({
      sortBy: Sortby.Name,
      isReversed: false,
    }));
  };

  sortByLengthHandler = () => {
    this.setState(() => ({
      sortBy: Sortby.Length,
      isReversed: false,
    }));
  };

  resetHandler = () => {
    this.setState(() => ({
      isReversed: false,
      sortBy: '',
    }));
  };

  render() {
    const {
      buttonVisible, goods, isReversed, sortBy,
    } = this.state;
    const isButtonVisible = { buttonVisible: buttonVisible === true };
    const initialGoods = [...goods];

    if (sortBy === Sortby.Name) {
      initialGoods.sort((a, b) => a.localeCompare(b));
    }

    if (sortBy === Sortby.Length) {
      initialGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      initialGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className={classNames('button', { buttonVisible: !buttonVisible })}
          type="button"
          onClick={() => {
            this.setState(this.startHandler);
          }}
        >
          Start
        </button>
        <br />
        <button
          className={classNames('button button--blue', isButtonVisible)}
          type="button"
          onClick={this.reverseHandler}
        >
          Reverse
        </button>
        <button
          className={classNames('button button--green', isButtonVisible)}
          type="button"
          onClick={this.sortByNameHandler}
        >
          Sort alphabetically
        </button>
        <button
          className={classNames('button button--purple', isButtonVisible)}
          type="button"
          onClick={this.sortByLengthHandler}
        >
          Sort by length
        </button>
        <button
          className={classNames('button button--red', isButtonVisible)}
          type="button"
          onClick={this.resetHandler}
        >
          Reset
        </button>
        {buttonVisible ? '' : <GoodsList props={initialGoods} />}
      </div>
    );
  }
}

export default App;
