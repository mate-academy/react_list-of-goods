import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { List } from './components/List';

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

class App extends React.PureComponent {
  state = {
    showList: false,
    isReversed: false,
    sortBy: '',
  }

  start = () => {
    this.setState(state => ({
      showList: !state.showList,
    }));
  }

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortBYABC = () => {
    this.setState({
      sortBy: 'name',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  resetGoods = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  }

  render() {
    const {
      state,
      start,
      resetGoods,
      sortBYABC,
      sortByLength,
      reverseGoods,
    } = this;

    const { showList, isReversed, sortBy } = state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {showList || (
          <Button
            className="show"
            onClick={start}
            text="Show Me"
          />
        )}
        {showList && (
          <>
            <List
              list={goodsFromServer}
              state={{
                showList,
                isReversed,
                sortBy,
              }}
            />
            <div className="button-container">
              <Button
                className="reset"
                onClick={resetGoods}
                text="Reset Me"
              />
              <Button
                className="sort--ABC"
                onClick={sortBYABC}
                text="Sort Me ABC"
              />
              <Button
                className="sort--length"
                onClick={sortByLength}
                text="Sort Me by My length"
              />
              <Button
                className="reverse"
                onClick={reverseGoods}
                text="Reverse Me"
              />
            </div>

          </>
        )}
      </div>
    );
  }
}

export default App;
