import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { uuid } from 'uuidv4';
import classNames from 'classnames';
import { Button } from './Components/Button';

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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export function implementButtonsActions(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods].sort((goodA, goodB) => {
    switch (sortType) {
      case SortType.ALPABET:
        return goodA.localeCompare(goodB);

      case SortType.LENGTH:
        return goodA.length - goodB.length;

      default:
        return 0;
    }
  });

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  setOrderAlphabetical = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  setOrderLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  setOrderReverse = () => {
    this.setState(state => {
      return ({ isReversed: !state.isReversed });
    });
  };

  resetOrder = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const visibleGoods = implementButtonsActions(goodsFromServer,
      sortType, isReversed);

    const checkOnChanges = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <Button
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
            onClick={this.setOrderAlphabetical}
          >
            Sort alphabetically
          </Button>

          <Button
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.setOrderLength}
          >
            Sort by length
          </Button>

          <Button
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.setOrderReverse}
          >
            Reverse
          </Button>

          {checkOnChanges && (
            <Button
              className="button is-danger is-light"
              onClick={this.resetOrder}
            >
              Reset
            </Button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => {
              return (
                <li
                  data-cy="Good"
                  key={uuid()}
                >
                  {good}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
