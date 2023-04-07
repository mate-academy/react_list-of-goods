import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type Props = {};

enum SortType {
  NONE = 0,
  ALPHABET = 1,
  LENGTH = 2,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

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

function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
): string [] {
  const visible = [...goods];

  visible.sort((word1, word2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return word1.length - word2.length;

      case SortType.ALPHABET:
        return word1.localeCompare(word2);
      default:
        return 0;
    }
  });

  if (isReversed === true) {
    visible.reverse();
  }

  return visible;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
  goodsList: string[],
};

export class App extends React.Component<Props, State> {
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
    goodsList: goodsFromServer,
  };

  setsortType(sortType: SortType) {
    this.setState({
      sortType,
    });

    this.setState({
      isReversed: false,
    });
  }

  toggleIsReversed(prevsTate: boolean) {
    this.setState(() => ({ isReversed: prevsTate }));
  }

  reset() {
    this.setState({
      sortType: SortType.NONE, isReversed: false,
    });
  }

  render(): React.ReactNode {
    const reorderedGoods = getReorderedGoods(this.state.goodsList, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${this.state.sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
            onClick={() => {
              this.setsortType(SortType.ALPHABET);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${this.state.sortType !== SortType.LENGTH ? 'is-light' : ''}`}
            onClick={() => {
              this.setsortType(SortType.LENGTH);
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed
              ? 'button is-warning'
              : 'button is-success is-light'}
            onClick={() => {
              this.toggleIsReversed(!this.state.isReversed);
            }}
          >
            Reverse
          </button>

          {this.state.isReversed === true
          || this.state.sortType !== SortType.NONE
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => {
                  this.reset();
                }}
              >
                Reset
              </button>
            )
            : null}
        </div>

        <ul>
          <ul>
            { reorderedGoods.map((goodSecond) => {
              return (
                <li data-cy="Good" key={goodSecond}>{goodSecond}</li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
