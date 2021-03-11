import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { ButtonToShow } from './components/ShowButton';
import { ButtonToReset } from './components/ResetButton';
import { ButtonToReverse } from './components/ReverseButton';
import { ButtonToSortAlphabet } from './components/SortByAlphabetButton';
import { ButtonToSortLength } from './components/SortByLengthButton';

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
    goods: [...goodsFromServer],
    isGoodsVisible: false,
    isButtonVisible: true,
    isReversed: false,
  }

  handleVisibility = () => {
    this.setState(prevState => ({
      isGoodsVisible: !prevState.isGoodsVisible,
      isButtonVisible: !prevState.isButtonVisible,
    }));
  }

  handleReverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  }

  sortByAlphabet = () => {
    this.setState({
      goods: [...goodsFromServer].sort((curr, next) => (
        curr.localeCompare(next)
      )),
    });
  }

  sortByLength = () => {
    this.setState({
      goods: [...goodsFromServer].sort((curr, next) => (
        curr.length - next.length
      )),
    });
  }

  handleReset = () => {
    this.setState({
      goods: [...goodsFromServer].sort(() => 0),
      isReversed: false,
    });
  }

  render() {
    const {
      isGoodsVisible,
      isButtonVisible,
      goods,
      isReversed,
    } = this.state;

    const copiedGoods = [...goods];

    if (isReversed) {
      copiedGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        {isButtonVisible && (
          <ButtonToShow visible={this.handleVisibility} />
        )}
        {isGoodsVisible && <GoodsList goods={copiedGoods} />}
        <ButtonToReverse reverse={this.handleReverse} />
        <ButtonToSortAlphabet sort={this.sortByAlphabet} />
        <ButtonToReset reset={this.handleReset} />
        <ButtonToSortLength sort={this.sortByLength} />
      </div>
    );
  }
}

export default App;
