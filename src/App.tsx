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
    if (param === 'alphabetical') {
      this.setState((prevState) => ({
        copyArrayList: prevState.copyArrayList
          .sort((a, b) => a.localeCompare(b)),
        sortType: SortType.ALPHABET,
      }));
    }

    if (param === 'length') {
      this.setState((prevState) => ({
        copyArrayList: prevState.copyArrayList
          .sort((a, b) => a.length - b.length),
        sortType: SortType.LENGTH,
      }));
    }

    if (param === 'reverse') {
      this.setState((prevState) => ({
        copyArrayList: prevState.copyArrayList.reverse(),
        isReversed: true,

        /* sortType: SortType.NONE, */
      }));
    }

    if (param === 'reset') {
      this.setState({
        copyArrayList: [...goodsFromServer],
        isReversed: false,
        sortType: SortType.NONE,
      });
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

          {isReversed && (
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
          {copyArrayList.map((ListElem) => (
            <li data-cy="Good" key={ListElem}>{ListElem}</li>
          ))}
        </ul>
      </div>
    );
  }
}
