import React from 'react';
import './App.css';
import {
  Button, ButtonGroup, List, ListItemText, Typography,
} from '@mui/material';

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
  visibleGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    visibleGoods: goodsFromServer,
  };

  showGoods = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  reversGood = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  resetGoods = () => {
    this.setState(state => ({
      goods: state.visibleGoods,
    }));
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByNameLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <Typography
          variant="h5"
          className="title"
        >
          Goods
        </Typography>
        {goods.length === 0
          ? (
            <Button
              color="secondary"
              className="btn"
              type="button"
              onClick={this.showGoods}
            >
              Start
            </Button>
          ) : (
            <ButtonGroup color="secondary" aria-label="large button group">
              <Button
                type="button"
                onClick={this.reversGood}
              >
                Reverse
              </Button>
              <Button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </Button>
              <Button
                type="button"
                onClick={this.resetGoods}
              >
                Reset
              </Button>
              <Button
                type="button"
                onClick={this.sortByNameLength}
              >
                Sort by length
              </Button>
            </ButtonGroup>
          )}
        <List className="list">
          {goods.map(good => (
            <ListItemText key={good} className="list">
              {good}
            </ListItemText>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
