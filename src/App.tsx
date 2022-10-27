import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
import { Component } from 'react';
import { Good } from './react-app-env';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

export const goodsFromServer = [
  { name: 'Dumplings', id: 1 },
  { name: 'Carrot', id: 2 },
  { name: 'Eggs', id: 3 },
  { name: 'Ice cream', id: 4 },
  { name: 'Apple', id: 5 },
  { name: 'Bread', id: 6 },
  { name: 'Fish', id: 7 },
  { name: 'Honey', id: 8 },
  { name: 'Jam', id: 9 },
  { name: 'Garlic', id: 10 },
];

export enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: Good[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((prevGoods, currGoods) => {
    switch (sortType) {
      case SortType.ALPABET:
        return prevGoods.name.localeCompare(currGoods.name);

      case SortType.LENGTH:
        return prevGoods.name.length - currGoods.name.length;

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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortType = (sortType: SortType) => {
    this.setState({ sortType });
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const originalOrder = sortType !== SortType.NONE || isReversed !== false;
    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <Button
            className={cn(
              'is-info',
              {
                'is-light': sortType !== SortType.ALPABET,
              },
            )}
            onClick={() => this.handleSortType(SortType.ALPABET)}
          >
            Sort alphabetically
          </Button>

          <Button
            className={cn(
              'is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => this.handleSortType(SortType.LENGTH)}
          >
            Sort by length
          </Button>

          <Button
            className={cn(
              'is-warning',
              {
                'is-light': isReversed === false,
              },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </Button>

          {originalOrder
            && (
              <Button
                className="is-danger is-light"
                onClick={this.handleReset}
              >
                Reset
              </Button>
            )}
        </div>

        <GoodsList goods={reorderedGoods} />
      </div>
    );
  }
}
