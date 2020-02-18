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
    isButtonClicked: false,
    goods: goodsFromServer,
  }

  startButtonCliked = () => {
    this.setState({
      isButtonClicked: true,
    });
  }

  hideList = () => {
    this.setState({
      isButtonClicked: false,
    });
  }

  reverse = () => {
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
    const { isButtonClicked, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isButtonClicked ? (
          <>
            <Goods goods={goods} />
            <SortButtons
              hideList={this.hideList}
              reverse={this.reverse}
              sortAlphabetically={this.sortAlphabetically}
              reset={this.reset}
              sortByLength={this.sortByLength}
              filterByLength={this.filterByLength}
            />
          </>
        ) : (
          <button type="button" onClick={this.startButtonCliked}>
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
