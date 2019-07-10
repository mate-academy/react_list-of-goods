import React from 'react';
import './App.css';
import Buttons from './components/Buttons';

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

class App extends React.Component {
  state={
    isGoodsLoaded: false,
    goods: [...goodsFromServer],
    sortAlphabetOrder: 1,
    sortLengthOrder: 1,
    selectLengthValue: 1,
  }

  shownClick = () => {
    this.setState({
      isGoodsLoaded: true,
    });
  }

  reverseClick = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  sortAlphabetical = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => (
        prevState.sortAlphabetOrder * a.localeCompare(b))),
      sortAlphabetOrder: -prevState.sortAlphabetOrder,
    }));
  }

  resetToInitial = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(
        (a, b) => prevState.sortLengthOrder * (a.length - b.length)
      ),
      sortLengthOrder: -prevState.sortLengthOrder,
    }));
  }

  handleSelect = (event) => {
    const { value } = event.target;

    this.setState({
      selectLengthValue: value,
    });

    this.setState(prevState => ({
      goods: goodsFromServer.filter(item => item.length >= value),
    }));
  }

  resetSelect = () => {
    this.setState({
      selectLengthValue: 1,
      goods: [...goodsFromServer],
    });
  }

  render() {
    const showListButton = this.state.isGoodsLoaded
    || (
      <button
        type="button"
        className="button"
        onClick={this.shownClick}
      >
      Start
      </button>
    );

    const listOfGoodGenerator = this.state.goods
      .map(item => (
        <li key={item}>
          {item}
          {' '}
          {item.length}
        </li>
      ));

    const optionValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const optionLength = optionValue
      .map(item => <option key={item} value={item}>{item}</option>);

    const selectLength = (
      <div>
        <select
          value={this.state.selectLengthValue}
          onChange={this.handleSelect}
          className="select-length"
        >
          {optionLength}
        </select>
      </div>
    );

    const resetSelectButton = (
      <button
        type="button"
        className="button button--select"
        onClick={this.resetSelect}
      >
      Reset Select
      </button>
    );

    const display = this.state.isGoodsLoaded
      && (
        <>
          <Buttons
            reverseClick={this.reverseClick}
            sortAlphabetical={this.sortAlphabetical}
            resetToInitial={this.resetToInitial}
            sortByLength={this.sortByLength}
          />
          <div className="select-container">
            {selectLength}
            {resetSelectButton}
          </div>
          {listOfGoodGenerator}
        </>
      );

    return (
      <div className="App">
        <h1>Goods 1</h1>
        {showListButton}
        <ul className="list">
          {display}
        </ul>
      </div>
    );
  }
}

export default App;
