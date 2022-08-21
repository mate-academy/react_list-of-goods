/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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
  ALPABET,
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
        case SortType.ALPABET:
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

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlpabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE });
    this.setState({
      isReversed: false,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const renderList = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <Stack direction="row" spacing={2}>
        <div className="App">
          {!isStarted && (
            <Button
              variant="outlined"
              type="button"
              onClick={() => {
                this.setState(state => ({
                  ...state,
                  isStarted: true,
                }));
              }}
            >
              Start
            </Button>
          )}

          {isStarted && (
            <>
              <Button
                className="button"
                type="button"
                variant="contained"
                onClick={this.sortByAlpabet}
              >
                Sort alphabetically
              </Button>
              <Button
                className="button"
                type="button"
                variant="contained"
                onClick={this.sortByLength}
              >
                Sort by length
              </Button>
              <Button
                className="button"
                variant="contained"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </Button>
              <Button
                variant="outlined"
                color="error"
                type="button"
                onClick={this.reset}
              >
                Reset
              </Button>
              <ul className="Goods">
                {renderList.map(good => (
                  <li key={good} className="goods">
                    {good}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Stack>
    );
  }
}
