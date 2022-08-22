import ButtonGroup from '@mui/material/ButtonGroup';
import { Button } from '@mui/material';
import { Component } from 'react';
import './App.css';

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

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((good1, good2) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return good1.localeCompare(good2);
        case SortType.LENGTH:
          return good1.length - good2.length;
        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  handlerStarter = () => {
    this.setState({ isStarted: true });
  };

  handlerReverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  handlerSortByAlpha = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handlerSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handlerReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const goods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        {!isStarted && (
          <Button
            variant="contained"
            color="secondary"
            type="button"
            className="btn"
            onClick={this.handlerStarter}
          >
            Start
          </Button>
        )}

        {isStarted && (
          <>
            <ButtonGroup
              size="large"
              aria-label="large button group"
              color="secondary"
              variant="contained"
            >
              <Button
                type="button"
                className="btn"
                onClick={this.handlerSortByAlpha}
              >
                Sort alphabetically
              </Button>

              <Button
                type="button"
                className="btn"
                onClick={this.handlerSortByLength}
              >
                Sort by length
              </Button>

              <Button
                type="button"
                className="btn"
                onClick={this.handlerReverse}
              >
                Reverse
              </Button>

              <Button
                type="button"
                className="btn"
                onClick={this.handlerReset}
              >
                Reset
              </Button>
            </ButtonGroup>
            <ul className="Goods">
              {goods.map(good => {
                return (
                  <li
                    className="Goods__item"
                    key={good}
                  >
                    {good}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  }
}
