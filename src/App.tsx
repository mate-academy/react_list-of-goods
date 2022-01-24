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
  initialGoods: string[];
  buttonVisible: boolean;
};

type Props = {};

class App extends React.Component<Props, State> {
  state: State = {
    goods: goodsFromServer,
    initialGoods: goodsFromServer,
    buttonVisible: true,
  };

  start = () => {
    this.setState((state) => ({
      goods: state.initialGoods,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sort = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort(),
    }));
  };

  reset = () => {
    this.setState((state) => ({
      goods: state.initialGoods,
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { buttonVisible, goods } = this.state;
    const isButtonVisible = { buttonVisible: buttonVisible === true };

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className={classNames('button', { buttonVisible: buttonVisible === false })}
          type="button"
          onClick={() => {
            this.setState({ buttonVisible: false });
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
        {buttonVisible ? '' : <GoodsList props={goods} />}
      </div>
    );
  }
}

export default App;
