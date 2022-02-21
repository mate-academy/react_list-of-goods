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

  Start = () => {
    this.setState({ isVisible: true });
  };

  Reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  Reset = () => {
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

    if (!isReversed) {
      copyOfGoods.reverse();
    }

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

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            className="start-button"
            onClick={this.Start}
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <GoodsList listOfGoods={copyOfGoods} />

            <button
              type="button"
              className="reverse-button"
              onClick={this.Reverse}
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
              onClick={this.Reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}
