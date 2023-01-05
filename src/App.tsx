import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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
  NONE = 'none',
  ALPHABET = 'alpabet',
  LENGTH = 'length',
}

type State = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: State,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((productName1, productName2) => (
        productName1.localeCompare(productName2)
      ));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((product1, product2) => (
        product1.length - product2.length
      ));
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

export class App extends Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  goodsReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  resetButton = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const preparedGoods = (
      getReorderedGoods(goodsFromServer, this.state)
    );

    return (
      <>
        <div className="container">
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 1,
                mt: 30,
                mx: 'auto',
                width: 665,
                height: 500,
              },
            }}
          >
            <Paper
              variant="outlined"
              sx={{
                backgroundColor: 'text.disabled',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                fontSize: 24,
                fontWeight: 'bold',
              }}
            >
              <div className="section content">
                <div className="buttons">
                  <Button
                    variant="contained"
                    type="button"
                    className={sortType === SortType.ALPHABET
                      ? 'button is-info'
                      : 'button is-info is-light'}
                    onClick={this.sortByAlphabet}
                  >
                    Sort alphabetically
                  </Button>

                  <Button
                    variant="contained"
                    type="button"
                    className={sortType === SortType.LENGTH
                      ? 'button is-success'
                      : 'button is-success is-light'}
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </Button>

                  <Button
                    variant="contained"
                    type="button"
                    className={isReversed
                      ? 'button is-warning'
                      : 'button is-warning is-light'}
                    onClick={this.goodsReverse}
                  >
                    Reverse
                  </Button>

                  {(sortType !== SortType.NONE || isReversed)
                  && (
                    <Button
                      variant="outlined"
                      color="error"
                      type="button"
                      className="button is-danger"
                      onClick={this.resetButton}
                    >
                      Reset
                    </Button>
                  )}
                </div>
                <div className="list">
                  <ul>
                    {preparedGoods.map(product => (
                      <li data-cy="Good" key={product}>
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Paper>
          </Box>
        </div>

      </>
    );
  }
}
