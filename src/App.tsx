import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Goods from './components/Goods/Goods';

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

const filterNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  showGoods: boolean,
  sortBy: string,
  isReversed: boolean,
  filterLength: number,
};

const startBtnStyled = {
  mx: 'auto',
  width: '200px',
  height: '60px',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const mainBoxStyled = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  bgcolor: 'background.paper',
};

class App extends React.Component<{}, State> {
  state = {
    showGoods: false,
    sortBy: '',
    isReversed: false,
    filterLength: 1,
  };

  showGoods = () => {
    this.setState((prevState) => ({
      showGoods: !prevState.showGoods,
    }));
  };

  sortAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  resetSort = () => {
    this.setState({
      sortBy: 'initial',
      filterLength: 1,
    });
  };

  filterByLength = (value: number) => {
    this.setState({ filterLength: value });
  };

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  render() {
    const {
      showGoods,
      sortBy,
      isReversed,
      filterLength,
    } = this.state;

    return (
      <Box sx={mainBoxStyled}>
        {!showGoods && (
          <Button
            variant="contained"
            onClick={this.showGoods}
            sx={startBtnStyled}
          >
            Start
          </Button>
        )}

        {showGoods && (
          <div className="content">
            <Goods
              goods={goodsFromServer}
              sortBy={sortBy}
              isReversed={isReversed}
              filterLength={filterLength}
            />

            <Box sx={{ width: '100%', display: 'grid', gap: '20px' }}>
              <Button
                variant="contained"
                onClick={this.sortAlphabet}
              >
                Sort alphabetically
              </Button>

              <Button
                variant="contained"
                onClick={this.sortByLength}
              >
                Sort by length
              </Button>

              <Button
                variant="contained"
                onClick={this.reverse}
              >
                Reverse
              </Button>

              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={this.resetSort}
                color="error"
              >
                Reset
              </Button>

              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filterLength}
                  onChange={(e) => {
                    this.filterByLength(+e.target.value);
                  }}
                >
                  {filterNumbers.map(num => (
                    <MenuItem
                      key={num}
                      value={num}
                    >
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        )}
      </Box>
    );
  }
}

export default App;
