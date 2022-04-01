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
  isReversed: boolean,
  sortBy: string,
  isVisible: boolean,
}

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortBy: 'none',
    isVisible: false,
  };

  visibilityApp = () => (
    this.setState({ isVisible: true })
  );

  createrOfGoods = () => {
    const {
      isReversed,
      sortBy,
    } = this.state;

    const copyGoods = [...goodsFromServer];

    const preperedCreater = copyGoods.sort((firstGood, secondGood) => {
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

    return preperedCreater;
  };

  reverseOfGoods = () => {
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

  resetOfGoods = () => (
    this.setState({
      isReversed: false,
      sortBy: 'none',
    })
  );

  render() {
    const {
      isVisible,
    } = this.state;

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
            {this.createrOfGoods()
              .map(good => {
                return (
                  <li key={good.id}>
                    {good.name}
                  </li>
                );
              })}
          </ul>

          <button
            type="button"
            onClick={this.reverseOfGoods}
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
            onClick={this.resetOfGoods}
            type="button"
          >
            Reset
          </button>
        </>
      )
    );
  }
}
