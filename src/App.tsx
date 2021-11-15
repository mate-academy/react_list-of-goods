import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
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

type Props = {};

interface State {
  goods: string[];
  isVisible: boolean;
}

export class App extends React.Component<Props, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
  };

  show = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, nextGood) => firstGood.localeCompare(nextGood)),
    }));
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, nextGood) => firstGood.length - nextGood.length),
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.isVisible
          ? (
            <div>
              <GoodsList goods={goods} />

              <button
                type="button"
                className="App--button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="App--button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="App--button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="App--button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          )
          : (
            <button
              type="button"
              className="App--button"
              onClick={this.show}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}
