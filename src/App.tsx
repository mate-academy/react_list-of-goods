import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

interface Good {
  name: string;
  id: string;
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  name: good,
  id: uuidv4(),
}));

interface State {
  goods: Good[],
  isReversed: boolean,
  sortBy: string,
  isVisible: boolean,
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: 'none',
    isVisible: false,
  };

  visibilityApp = () => (
    this.setState({ isVisible: true })
  );

  reversed = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByName = () => (
    this.setState({ sortBy: 'name' })
  );

  sortByNameLength = () => (
    this.setState({ sortBy: 'length' })
  );

  reset = () => (
    this.setState({
      isReversed: false,
      sortBy: 'none',
    })
  );

  render() {
    const {
      isVisible,
      goods,
      isReversed,
      sortBy,
    } = this.state;

    const copyGoods = [...goods];

    copyGoods.sort((firstGood, secondGood) => {
      switch (sortBy) {
        case 'name':
          return firstGood[sortBy].localeCompare(secondGood[sortBy]);
        case 'length':
          return firstGood.name.length - secondGood.name.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoods.reverse();
    }

    return (!isVisible
      ? (
        <button
          type="button"
          onClick={this.visibilityApp}
        >
          Select
        </button>
      )
      : (
        <>
          <h1>List of Goods</h1>
          <ul>
            {copyGoods.map(good => {
              return (
                <li key={good.id}>
                  {good.name}
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={this.reversed}
          >
            Reverse
          </button>

          <button
            onClick={this.sortByName}
            type="button"
          >
            Sort by ABC
          </button>

          <button
            onClick={this.sortByNameLength}
            type="button"
          >
            Sort by Length
          </button>

          <button
            onClick={this.reset}
            type="button"
          >
            Reset
          </button>
        </>
      )
    );
  }
}
