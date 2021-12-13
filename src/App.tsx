import React from 'react';
import { ListOfGoods } from './components/ListOfGoods';

import './App.scss';

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
  render: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    render: false,
  };

  start = () => (
    this.setState({
      render: true,
    }));

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByLetters = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { goods, render } = this.state;

    return (
      <div className="App">
        <h1 className="App__title"><i>Goods</i></h1>
        <div className="App__content">
          <div className="App__list-wrapper">
            {
              render && (
                <ListOfGoods
                  goods={goods}
                />
              )
            }
          </div>
          <div className="App__buttons">
            <button
              className="App__button"
              type="button"
              onClick={this.start}
              disabled={render}
            >
              Start
            </button>

            <button
              className="App__button"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              className="App__button"
              type="button"
              onClick={this.sortByLetters}
            >
              Sort alphabetically
            </button>

            <button
              className="App__button"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              className="App__button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
