/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;
    case SortType.NONE:
    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    isStarted: true,
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlpabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer, sortType, isReversed,
    );

    return (
      <div className="App">
        {isStarted && (
          <Button
            variant="contained"
            type="button"
            onClick={() => this.setState({ isStarted: !isStarted })}
          >
            Start
          </Button>
        )}

        {!isStarted && (
          <>
            <div className="Buttons">
              <Button
                variant="outlined"
                size="small"
                type="button"
                onClick={this.sortByAlpabet}
              >
                Sort alphabetically
              </Button>

              <Button
                variant="outlined"
                size="small"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </Button>

              <Button
                variant="outlined"
                size="small"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </Button>

              <Button
                variant="contained"
                size="small"
                type="button"
                onClick={this.reset}
              >
                Reset
              </Button>
            </div>

            <List className="Goods">
              {visibleGoods.map(good => (
                <>
                  <ListItem
                    disablePadding
                    key={good}
                    className="Goods__item"
                  >
                    <ListItemText
                      primary={good}
                    />
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </>
        )}
      </div>
    );
  }
}
