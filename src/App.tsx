import React from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import classNames from 'classnames';
import { GoodsList } from './GoodsList';
import './App.css';

const goodsFromServer: string[] = [
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

enum SortBy {
  NoSort,
  Alphpabetical,
  Length,
}

type State = {
  goods: string[];
  isStarted: boolean;
  isReversed: boolean;
  goodLength: number;
  sort: SortBy;
  selectOptions: number[];

};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isStarted: false,
    isReversed: false,
    goodLength: 1,
    sort: SortBy.NoSort,
    selectOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  startApp = () => {
    this.setState({ isStarted: true });
  };

  reverseList = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetical = () => {
    this.setState({ sort: SortBy.Alphpabetical });
  };

  sortByLength = () => {
    this.setState({ sort: SortBy.Length });
  };

  resetList = () => {
    this.setState({
      goods: goodsFromServer,
      sort: SortBy.NoSort,
      goodLength: 1,
    });
  };

  handleChange = (event: SelectChangeEvent) => {
    this.setState({ goodLength: +String(event.target.value) });
  };

  render() {
    const {
      goods,
      isStarted,
      isReversed,
      goodLength,
      sort,
      selectOptions,
    } = this.state;

    const visibleGoods = goods.filter(
      good => good.length >= goodLength,
    );

    visibleGoods.sort((good1, good2) => {
      switch (sort) {
        case SortBy.Alphpabetical:
          return good1.localeCompare(good2);

        case SortBy.Length:
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!isStarted && (
          <Button
            type="button"
            className="App__start-button"
            variant="contained"
            color="success"
            onClick={this.startApp}
          >
            Start
          </Button>
        )}
        <div className={classNames(
          'container',
          { visible: isStarted },
        )}
        >
          {isStarted && <GoodsList goods={visibleGoods} />}
          <div className={classNames(
            'goods-list__button-container',
            { visible: isStarted },
          )}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filter by length</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={String(goodLength)}
                label="Filter by length"
                onChange={this.handleChange}
              >
                {selectOptions.map(option => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>

                ))}
              </Select>
            </FormControl>
            <Button
              type="button"
              variant="contained"
              color="success"
              onClick={this.sortAlphabetical}
            >
              Sort A-Z
            </Button>
            <Button
              type="button"
              variant="contained"
              color="success"
              onClick={this.sortByLength}
            >
              Sort by length
            </Button>
            <Button
              type="button"
              variant="contained"
              color="success"
              onClick={this.reverseList}
            >
              Reverse
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="error"
              onClick={this.resetList}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
