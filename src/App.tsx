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

  start = () => {
    this.setState((state) => ({
      buttonVisible: !state.buttonVisible,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = () => {
    this.setState(() => ({
      sortBy: Sortby.Name,
      isReversed: false,
    }));
  };

  sortByLength = () => {
    this.setState(() => ({
      sortBy: Sortby.Length,
      isReversed: false,
    }));
  };

  reset = () => {
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
            this.setState(this.start);
          }}
        >
          Start
        </button>
        <br />
        <button
          className={classNames('button button--blue', isButtonVisible)}
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          className={classNames('button button--green', isButtonVisible)}
          type="button"
          onClick={this.sort}
        >
          Sort alphabetically
        </button>
        <button
          className={classNames('button button--purple', isButtonVisible)}
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          className={classNames('button button--red', isButtonVisible)}
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        {buttonVisible ? '' : <GoodsList props={initialGoods} />}
      </div>
    );
  }
}

export default App;
