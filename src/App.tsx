import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
  sortBy: string,
  isReversed: boolean,
  items:string[],
  isVisible:boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    sortBy: '',
    isReversed: false,
    items: goodsFromServer,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  reset = () => {
    this.setState(
      {
        isReversed: false,
        sortBy: '',
      },
    );
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  render() {
    const {
      sortBy,
      isReversed,
      items,
      isVisible,
    } = this.state;
    const copyOfGoods = [...items];

    copyOfGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'length':
          return g1.length - g2.length;

        case 'alphabet':
          return g1.localeCompare(g2);
        default:
          return 0;
      }
    });

    if (!isReversed) {
      copyOfGoods.reverse();
    }

    return (
      <div className="App">

        {isVisible ? (
          <>
            <GoodsList listOfGoods={copyOfGoods} />

            <button
              type="button"
              className="reverse-button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="sortedByAlphabet-button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="ortedByLength-button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        ) : (
          <button
            type="button"
            className="start-button"
            onClick={this.start}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}
