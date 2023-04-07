import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import { render } from 'react-dom';

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
  // To avoid the original array mutation

  const visible = [...goods];

  visible.sort((word1, word2) => {
    switch (sortType) {
      case 2:
        return word1.length - word2.length;

      case 1:
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
  isLighOn: boolean,
  isLightLength: boolean,
};

export class App extends React.Component<Props, State> {
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
    goodsList: goodsFromServer,
    isLighOn: false,
    isLightLength: false,
  };

  setsortType(sortType: SortType) {
    this.setState({
      sortType,
    });

    this.setState({
      isReversed: false,
    });

    this.setState({
      isLighOn: true,
    });
  }

  toggleIsReversed() {
    if (this.state.isReversed === false) {
      this.setState({ isReversed: true });
    } else {
      this.setState({ isReversed: false });
    }

    this.setState({
      isLighOn: false,
    });
  }

  reset() {
    this.setState({
      sortType: SortType.NONE, isReversed: false,
    });

    this.setState({
      isLighOn: false,
    });
  }

  render(): React.ReactNode {
    const reorderedGoods = getReorderedGoods(this.state.goodsList, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === 1
              && this.state.isLighOn === true
              ? 'button is-info'
              : 'button is-success is-light'}
            onClick={() => {
              this.setsortType(SortType.ALPHABET);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === 2
              && this.state.isLighOn === true
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={() => {
              this.setsortType(SortType.LENGTH);
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed === true
              ? 'button is-warning'
              : 'button is-success is-light'}
            onClick={() => {
              this.toggleIsReversed();
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
            { this.state.isReversed === false
            && this.state.sortType === SortType.NONE
              ? goodsFromServer.map((goodSecond) => {
                return (
                  <li data-cy="Good" key={goodSecond}>{goodSecond}</li>
                );
              })
              : reorderedGoods.map((goodSecond) => {
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
