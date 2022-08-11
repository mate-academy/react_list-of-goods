/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
import './App.scss';
import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

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

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods];

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPABET:
        return a.localeCompare(b);

      case SortType.LENGTH:
        return a.length - b.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleStart = () => {
    this.setState({ isStarted: true });
  };

  handleSortAlphabeticaly = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  handleSortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const sortedGoods = getReorderedGoods(
      goodsFromServer, sortType, isReversed,
    );

    return (
      <div className="App">
        {!isStarted
          && (
            <Button
              type="button"
              onClick={this.handleStart}
              variant="contained"
            >
              Start
            </Button>
          )}

        {isStarted
          && (
            <>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                sx={{}}
              >
                <Button type="button" onClick={this.handleSortAlphabeticaly}>
                  Sort alphabetically
                </Button>
                <Button type="button" onClick={this.handleSortLength}>
                  Sort by length
                </Button>
                <Button type="button" onClick={this.handleReverse}>
                  Reverse
                </Button>
                <Button type="button" onClick={this.handleReset}>
                  Reset
                </Button>
              </ButtonGroup>

              <Box>
                <List className="Goods">
                  {sortedGoods.map((good) => (
                    <ListItem className="Goods__item" key={good}>
                      {good}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </>
          )}
      </div>
    );
  }
}
