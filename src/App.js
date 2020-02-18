import React from 'react';
import './App.css';
import { Goods } from './Goods';
import { SortButtons } from './SortButtons';

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

export class App extends React.Component {
  state = {
    isLoaded: false,
    goods: goodsFromServer,
  }

  handleStart = () => {
    this.setState({
      isLoaded: true,
    });
  }

  handleHide = () => {
    this.setState({
      isLoaded: false,
    });
  }

  handleReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  filterByLength = (event) => {
    event.persist();
    this.setState({
      goods: [...goodsFromServer]
        .filter(good => good.length >= Number(event.target.value)),
    });
  }

  render() {
    const { isLoaded, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isLoaded ? (
          <>
            <Goods goods={goods} />
            <SortButtons
              handleHide={this.handleHide}
              handleReverse={this.handleReverse}
              sortAlphabetically={this.sortAlphabetically}
              reset={this.reset}
              sortByLength={this.sortByLength}
              filterByLength={this.filterByLength}
            />
          </>
        ) : (
          <button type="button" onClick={this.handleStart}>
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
