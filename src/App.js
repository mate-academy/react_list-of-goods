import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { ButtonToShow } from './components/ButtonToShow';
import { ButtonToReset } from './components/ButtonToReset';
import { ButtonToReverse } from './components/ButtonToReverse';
import { ButtonToSortAlphabet } from './components/ButtonToSortAlphabet';
import { ButtonToSortLength } from './components/ButtonToSortLength';

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
    sortBy: '',
  }

  handleVisibility = () => {
    this.setState(state => ({
      isGoodsVisible: !state.isGoodsVisible,
      isButtonVisible: !state.isButtonVisible,
    }));
  }

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'Alphabet',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'Length',
    });
  }

  handleReset = () => {
    this.setState({
      sortBy: '',
    });
  }

  render() {
    const {
      isGoodsVisible,
      isButtonVisible,
      goods,
      isReversed,
      sortBy,
    } = this.state;

    const copiedGoods = [...goods];

    copiedGoods.sort((curr, next) => {
      switch (sortBy) {
        case 'Alphabet':
          return curr.localeCompare(next);

        case 'Length':
          return curr.length - next.length;

        default:
          return 0;
      }
    });

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
