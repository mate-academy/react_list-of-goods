import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodList';

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
    renderList: false,
    goods: [...goodsFromServer],
    unsortedGoods: [...goodsFromServer],
    selectedLength: '1',
  }

  handleClickStart = () => {
    this.setState({ renderList: true });
  }

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleClickSortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  handleClickReset = () => {
    this.setState(prevState => ({
      goods: [...prevState.unsortedGoods],
      selectedLength: 1,
    }));
  }

  handleClickSortByLength = () => this.setState(prevState => ({
    goods: [...prevState.goods].sort((a, b) => a.length - b.length),
  }))

  handleSelectLength = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      selectedLength: value,
      goods: [...prevState.unsortedGoods]
        .filter(elem => elem.length >= value),
    }));
  };

  render() {
    const { renderList, goods, selectedLength } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {renderList
          ? (
            <GoodsList
              goods={goods}
              handleClickReverse={this.handleClickReverse}
              handleClickSortAlphabetically={this.handleClickSortAlphabetically}
              handleClickReset={this.handleClickReset}
              handleClickSortByLength={this.handleClickSortByLength}
              selectedLength={selectedLength}
              handleSelectLength={this.handleSelectLength}
            />
          )
          : (
            <button
              type="button"
              className="start-button"
              onClick={this.handleClickStart}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
