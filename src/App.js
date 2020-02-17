import React from 'react';
import './App.css';
import { GoodsList } from './GoodList';

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
    showList: false,
    goods: [...goodsFromServer],
    initialGoods: [...goodsFromServer],
    selectedOption: 1,
  }

  handleStartClick = () => {
    this.setState({ showList: true });
  }

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleClickSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  handleClickReset = () => {
    this.setState(prevState => ({
      goods: [...prevState.initialGoods],
      selectedOption: 1,
    }));
  }

  handleClickSortByLength = () => this.setState(prevState => ({
    goods: [...prevState.goods].sort((a, b) => a.length - b.length),
  }))

  handleChangeSelect = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      selectedOption: value,
      goods: [...prevState.initialGoods]
        .filter(elem => elem.length >= value),
    }));
  };

  render() {
    const { showList, goods, selectedOption } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {showList
          ? (
            <GoodsList
              goods={goods}
              handleClickReverse={this.handleClickReverse}
              handleClickSort={this.handleClickSort}
              handleClickReset={this.handleClickReset}
              handleClickSortByLength={this.handleClickSortByLength}
              selectedOption={selectedOption}
              handleChangeSelect={this.handleChangeSelect}
            />
          )
          : (
            <button
              type="button"
              className="start-button"
              onClick={this.handleStartClick}
            >
          Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
