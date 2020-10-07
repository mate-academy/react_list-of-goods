import React from 'react';
import List from './List';
import Buttons from './Buttons';

import './App.css';

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
    goods: goodsFromServer,
    selectValue: '1',
    selectItems: 10,
    showGoods: true,
  };

  addList = () => {
    this.setState({
      showGoods: false,
    });
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  initialList = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectValue: '1',
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [
        ...state.goods,
      ].sort((good1, good2) => good1.length - good2.length),
    }));
  }

  changeValue = (event) => {
    this.setState({
      selectValue: event.target.value,
      goods: goodsFromServer.filter(
        good => good.length >= +event.target.value,
      ),
    });
  }

  reset = () => {
    this.setState({
      selectValue: '1',
      goods: goodsFromServer,
    });
  }

  render() {
    const { goods, selectValue, showGoods, selectItems } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {showGoods
          && (
            <button type="button" onClick={this.addList}>
              Start
            </button>
          )
        }

        {!showGoods
          && (
            <>
              <List goods={goods} />
              <Buttons
                selectValue={selectValue}
                selectItems={selectItems}
                reverseList={this.reverseList}
                sortAlphabetically={this.sortAlphabetically}
                initialList={this.initialList}
                sortByLength={this.sortByLength}
                changeValue={this.changeValue}
                reset={this.reset}
              />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
