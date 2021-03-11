import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { ShowButton } from './components/ShowButton';
import { ResetButton } from './components/ResetButton';
import { ReverseButton } from './components/ReverseButton';
import { SortByAlphabetButton } from './components/SortByAlphabetButton';
import { SortByLengthButton } from './components/SortByLengthButton';

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
          <ShowButton visible={this.handleVisibility} />
        )}
        {isGoodsVisible && <GoodsList goods={copiedGoods} />}
        <ReverseButton reverse={this.handleReverse} />
        <SortByAlphabetButton sort={this.sortByAlphabet} />
        <ResetButton reset={this.handleReset} />
        <SortByLengthButton sort={this.sortByLength} />
      </div>
    );
  }
}

export default App;
