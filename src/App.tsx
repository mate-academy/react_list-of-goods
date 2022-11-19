import { Component } from 'react';
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

  visibleGoods.sort((a1, a2) => {
    switch (sortType) {
      case SortType.ALPABET: {
        return a1.localeCompare(a2);
      }

      case SortType.LENGTH: {
        return a1.length - a2.length;
      }

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

type Props = {
  goods: string[];
};

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortByAlphabetically = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(prev => ({
      isReversed: !prev.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { goods } = this.props;
    const { isReversed, sortType } = this.state;

    const ReorderedGoods = getReorderedGoods(goods, { isReversed, sortType });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button', 'is-info',
              {
                'is-light': !(sortType === SortType.ALPABET),
              },
            )}
            onClick={this.handleSortByAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button', 'is-success',
              {
                'is-light': !(sortType === SortType.LENGTH),
              },
            )}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button', 'is-warning',
              {
                'is-light': (isReversed === false),
              },
            )}
            onClick={this.handleReverse}
          >
            Reverse

          </button>
          {(isReversed || sortType !== SortType.NONE)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.handleReset}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {ReorderedGoods.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
