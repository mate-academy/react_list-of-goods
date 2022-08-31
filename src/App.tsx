/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Slider from '@mui/material/Slider';

import { Goods } from './components/Goods/Goods';

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
  minLength: number,
) {
  const visibleGoods = [...goods].filter(good => good.length >= minLength);

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
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isInitial: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: number,
};

const initialState: State = {
  isStarted: false,
  isInitial: true,
  isReversed: false,
  sortType: SortType.NONE,
  minLength: 1,
};

export class App extends Component {
  state: Readonly<State> = { ...initialState };

  start = () => this.setState({
    isStarted: true,
  });

  sort = (sortType: SortType) => this.setState({
    sortType,
    isInitial: false,
  });

  reverse = () => this.setState((state: State) => ({
    isReversed: !state.isReversed,
    isInitial: false,
  }));

  adjustLength = (_1: Event, newValue: number | number[]) => this.setState({
    minLength: +newValue,
    isInitial: false,
  });

  reset = () => this.setState({
    ...initialState,
    isStarted: true,
  });

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
      minLength,
      isInitial,
    } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
      minLength,
    );

    return (
      <Box>
        <Grid
          className="App"
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid
            className="App__controls"
            item
            sx={{
              marginBottom: '24px',
            }}
          >
            {!isStarted && (
              <Button
                type="button"
                onClick={this.start}
                variant="contained"
                color="success"
              >
                Start
              </Button>
            )}

            {isStarted && (
              <Stack direction="column" spacing={2}>
                <ButtonGroup variant="contained">
                  <Button
                    type="button"
                    onClick={() => this.sort(SortType.ALPABET)}
                    color={
                      sortType === SortType.ALPABET
                        ? 'success'
                        : 'primary'
                    }
                  >
                    Sort alphabetically
                  </Button>

                  <Button
                    type="button"
                    onClick={() => this.sort(SortType.LENGTH)}
                    color={
                      sortType === SortType.LENGTH
                        ? 'success'
                        : 'primary'
                    }
                  >
                    Sort by length
                  </Button>

                  <Button
                    type="button"
                    onClick={this.reverse}
                    color={
                      isReversed
                        ? 'success'
                        : 'primary'
                    }
                  >
                    Reverse
                  </Button>

                  <Button
                    type="button"
                    onClick={this.reset}
                    color="error"
                    variant={
                      isInitial
                        ? 'outlined'
                        : 'contained'
                    }
                  >
                    Reset
                  </Button>
                </ButtonGroup>
                <Stack direction="row" spacing={2}>
                  <Typography
                    variant="button"
                    display="block"
                    sx={{
                      whiteSpace: 'nowrap',
                      margin: 'auto',
                    }}
                  >
                    {'Minimal good\'s length: '}
                  </Typography>
                  <Slider
                    value={minLength}
                    marks
                    min={1}
                    max={10}
                    valueLabelDisplay="auto"
                    onChange={this.adjustLength}
                  />
                </Stack>
              </Stack>
            )}
          </Grid>
          {isStarted && <Goods visibleGoods={visibleGoods} />}
        </Grid>
      </Box>
    );
  }
}
