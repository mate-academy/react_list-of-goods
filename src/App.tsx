import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
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

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  copyArrayList: string[],
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, ReorderOptions> {
  state: ReorderOptions = {
    copyArrayList: [...goodsFromServer],
    isReversed: false,
    sortType: SortType.NONE,
  };

  getReorderedGoods(param: string) {
    let sortedArray: string[];

    switch (param) {
      case 'alphabetical':
        sortedArray = this.state.copyArrayList
          .slice().sort((a, b) => (this.state.isReversed
            ? b.localeCompare(a)
            : a.localeCompare(b)));
        this.setState({
          copyArrayList: sortedArray,
          sortType: SortType.ALPHABET,
        });
        break;
      case 'length':
        sortedArray = this.state.copyArrayList
          .slice().sort((a, b) => (this.state.isReversed
            ? b.length - a.length
            : a.length - b.length));
        this.setState({
          copyArrayList: sortedArray,
          sortType: SortType.LENGTH,
        });
        break;
      case 'reverse':
        sortedArray = this.state.copyArrayList.slice().reverse();
        this.setState((prevState) => ({
          copyArrayList: sortedArray,
          isReversed: !prevState.isReversed,
        }));
        break;
      case 'reset':
        sortedArray = goodsFromServer.slice();
        this.setState({
          copyArrayList: sortedArray,
          isReversed: false,
          sortType: SortType.NONE,
        });
        break;
      default:
        sortedArray = this.state.copyArrayList.slice();
    }
  }

  render() {
    const { copyArrayList, isReversed, sortType } = this.state;

    const AlpabetClassName
    = (sortType === 1 && !isReversed) || (sortType === 1 && isReversed)
      ? 'button is-info'
      : 'button is-info is-light';

    const lengthClassName
    = (sortType === 2 && !isReversed) || (sortType === 2 && isReversed)
      ? 'button is-success'
      : 'button is-success is-light';

    const reverseClassName = isReversed
      ? 'button is-warning'
      : 'button is-warning is-light';

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={AlpabetClassName}
            onClick={() => this.getReorderedGoods('alphabetical')}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={lengthClassName}
            onClick={() => this.getReorderedGoods('length')}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={reverseClassName}
            onClick={() => this.getReorderedGoods('reverse')}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.getReorderedGoods('reset')}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {copyArrayList.map((good) => (
            <li data-cy="Good" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
