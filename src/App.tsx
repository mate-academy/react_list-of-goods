/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import classNames from 'classnames';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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

  visibleGoods.sort((g1: string, g2: string) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      case SortType.LENGTH:
        return g1.length - g2.length;

      default:
        return 0;
    }
  });

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
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

  start = () => this.setState({ isStarted: true });

  sortAlphabet = () => this.setState({ sortType: SortType.ALPHABET });

  sortLength = () => this.setState({ sortType: SortType.LENGTH });

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isStarted, sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">

        {isStarted
          ? (
            <>
              <Button
                type="button"
                variant="outlined"
                onClick={this.sortAlphabet}
              >
                Sort alphabetically
              </Button>

              <Button
                type="button"
                variant="outlined"
                onClick={this.sortLength}
              >
                Sort by length
              </Button>

              <Button
                type="button"
                variant="outlined"
                onClick={this.reverse}
              >
                Reverse
              </Button>

              <Button
                type="button"
                variant="outlined"
                onClick={this.reset}
              >
                Reset
              </Button>

              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
                className="Goods"
              >
                {goods.map(good => (
                  <ListItem
                    key={good}
                    className="Goods__item"
                  >
                    <ListItemText primary={good} />
                  </ListItem>
                ))}
              </List>
            </>
          )

          : (
            <Button
              type="button"
              variant="outlined"
              onClick={this.start}
            >
              Start
            </Button>
          )}
      </div>
    );
  }
}
