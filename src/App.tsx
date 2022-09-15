import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  ALPABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPABET:
        return good1.localeCompare(good2);
      case SortType.LENGTH:
        return good1.length - good2.length;
      case SortType.NONE:
        return 1;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};
type Props = {
  goods: string[];
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: 0,
  };

  props = {
    goods: goodsFromServer,
  };

  sortByNone = () => {
    this.setState({
      sortType: SortType.NONE,
    });
  };

  sortByAlpabet = () => {
    this.setState({
      sortType: SortType.ALPABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const visibleGoods = getReorderedGoods(
      this.props.goods,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info',
              { 'is-light': sortType !== SortType.ALPABET })}
            onClick={this.sortByAlpabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-info',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-info',
              { 'is-light': isReversed === false })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(isReversed === true || sortType !== SortType.NONE)
            && (
              <button
                type="button"
                className="button is-info is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li data-cy="Good" key={good}>{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
