import React from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

type State = {
  goods: string[];
  isStarted: boolean;
  isReversed: boolean;
  goodLength: number;
  sortBy: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isStarted: false,
    isReversed: false,
    goodLength: 1,
    sortBy: '',
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
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  resetList = () => {
    this.setState({ goods: goodsFromServer });
    this.setState({ sortBy: '' });
    this.setState({ goodLength: 1 });
  };

  // eslint-disable-next-line
  handleChange = (event: any) => {
    this.setState({ goodLength: event.target.value });
  };

  render() {
    const {
      goods,
      isStarted,
      isReversed,
      goodLength,
      sortBy,
    } = this.state;

    const visibleGoods = goods.filter(
      good => good.length > goodLength,
    );

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'length':
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
                value={this.state.goodLength}
                label="Filter by length"
                onChange={this.handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>

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
