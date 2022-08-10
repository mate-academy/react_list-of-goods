/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
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

const wordLengthFromServer = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];

enum SortType {
  NONE = 'none',
  ALPABET = 'string',
  LENGTH = 'number',
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
  minLength: number,
) {
  const visibleGoods = [...goods].filter(good => good.length >= minLength);

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.NONE:
        return 0;

      case SortType.ALPABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        throw new Error('unknown sort type in getReorderedGoods function');
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    minLength: 1,
  };

  handleSort(sortType: SortType) {
    this.setState({ sortType });
  }

  handleReverse() {
    this.setState(state => ({ isReversed: !state.isReversed }));
  }

  handleReset() {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
      minLength: 1,
    });
  }

  handleSelectChange = (event: SelectChangeEvent<number>) => {
    this.setState({ minLength: +event.target.value });
  };

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
      minLength,
    } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
      minLength,
    );

    const wordLengths = [...wordLengthFromServer];

    return (
      <div className="App">
        {!isStarted ? (
          <button
            type="button"
            onClick={() => this.setState({ isStarted: true })}
          >
            Start
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => this.handleSort(SortType.ALPABET)}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => this.handleSort(SortType.LENGTH)}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={() => this.handleReverse()}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => this.handleReset()}
            >
              Reset
            </button>

            <FormControl>
              <InputLabel id="length-select-label">Min length</InputLabel>
              <Select
                labelId="length-select-label"
                id="length-select"
                value={minLength}
                label="Age"
                onChange={event => this.handleSelectChange(event)}
              >
                {wordLengths.map(length => (
                  <MenuItem value={length}>{length}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <ul className="Goods">
              {visibleGoods.map((good => (
                <li
                  className="Goods__item"
                  key={good}
                >
                  {good}
                </li>
              )))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
