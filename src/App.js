import React, { PureComponent } from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { ListOptions } from './components/ListOptions';

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

const preparedGoods = goodsFromServer.map((good, id) => ({
  name: good,
  id,
}));

class App extends PureComponent {
  state = {
    isListVisible: false,
    isButtonVisible: true,
    goods: preparedGoods,
    minWordLength: 1,
  }

  showList = () => {
    this.setState(state => ({
      isListVisible: true,
      isButtonVisible: false,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prevGood, nextGood) => (
        prevGood.name.localeCompare(nextGood.name)
      )),
    }));
  };

  resetList = () => {
    this.setState(state => ({
      goods: preparedGoods,
      minWordLength: 1,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prevGood, nextGood) => (
        prevGood.name.length - nextGood.name.length
      )),
    }));
  }

  selectLength = (minWordLength) => {
    this.setState({
      goods: preparedGoods.filter(good => (
        good.name.length >= minWordLength
      )),
      minWordLength: +minWordLength,
    });
  }

  render() {
    const { goods, isListVisible, isButtonVisible, minWordLength } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">Goods</h1>

        {isButtonVisible && (
          <button
            type="button"
            className="app__button button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {isListVisible && (
          <div className="app__wrapper">
            <GoodsList goods={goods} />

            <ListOptions
              reverseList={this.reverseList}
              resetList={this.resetList}
              sortByAlphabet={this.sortByAlphabet}
              sortByLength={this.sortByLength}
              minWordLength={minWordLength}
              selectLength={this.selectLength}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
