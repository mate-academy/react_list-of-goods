import React from 'react';
import GoodsList from './GoodsList';

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
  state = {
    isStartBtnActive: true,
    goods: [...goodsFromServer],
    initialGoods: [...goodsFromServer],
    selectedOption: 1,
  };

  handleStart = () => {
    this.setState({
      isStartBtnActive: false,
    });
  };

  handleReverse = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.goods]
        .sort((a, b) => a.localeCompare(b)),
    }));
  };

  handleReset = () => {
    this.setState(prevState => ({
      ...prevState,
      selectedOption: 1,
      goods: [...prevState.initialGoods],
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  handleFilter = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      selectedOption: value,
      goods: [...prevState.initialGoods]
        .filter(item => item.length >= value),
    }));
  };

  render() {
    if (this.state.isStartBtnActive) {
      return (
        <button type="button" onClick={this.handleStart}>Start</button>
      );
    }

    return (
      <GoodsList
        handleReverse={this.handleReverse}
        sortAlphabetically={this.sortAlphabetically}
        handleReset={this.handleReset}
        sortByLength={this.sortByLength}
        handleFilter={this.handleFilter}
        goods={this.state.goods}
        selectedOption={this.state.selectedOption}
      />
    );
  }
}

export default App;
