import { Component } from 'react';
import './App.scss';
import { GoodList } from './component/goodList';

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
  hasButton: boolean,
  isReversed: boolean,
  sortBy: string,
  copyGoods: string[]
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasButton: false,
    isReversed: false,
    sortBy: '',
    copyGoods: [...goodsFromServer],
  };

  start = () => {
    this.setState({
      hasButton: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabetically = () => {
    this.setState({
      sortBy: 'Alf',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      sortBy: '', isReversed: false,
    });
  };

  render() {
    const {
      hasButton, isReversed, copyGoods, sortBy,
    } = this.state;

    const visibleGoods = [...copyGoods];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'Alf':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!hasButton
          ? (
            <button
              type="button"
              className="button is-warning"
              onClick={this.start}
            >
              START
            </button>
          )
          : undefined}
        {hasButton && <GoodList goods={visibleGoods} />}
        <div className="button__flex">
          {hasButton && (
            <button
              className="button"
              type="button"
              onClick={this.reverse}
            >
              REVERSE
            </button>
          )}
          {hasButton && (
            <button
              className="button"
              type="button"
              onClick={this.sortByAlphabetically}
            >
              Sort alphabetically
            </button>
          )}
          {hasButton && (
            <button
              className="button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          )}
          {hasButton && (
            <button
              className="button"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    );
  }
}
