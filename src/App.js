import React from 'react';
import './App.css';

import { GoodsList } from './components/GoodsList';
import { GoodsButtons } from './components/GoodsButtons';
import { GoodsSelect } from './components/GoodsSelect';

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
    initial: [...goodsFromServer],
    goods: [...goodsFromServer],
    isShowButton: true,
    selectValue: '1',
  }

  hiddenButton = () => {
    this.setState(state => ({
      isShowButton: !state.isShowButton,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  sortByAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...state.initial],
      initial: [...goodsFromServer],
      selectValue: '1',
    }));
  }

  changeSelect = (event) => {
    this.setState({
      selectValue: event.target.value,
      goods: [...goodsFromServer].filter(good => (
        good.length >= event.target.value
      )),
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.isShowButton
          ? (
            <button
              type="button"
              className="button is-link"
              onClick={this.hiddenButton}
            >
              Start
            </button>
          )
          : (
            <>
              <GoodsButtons
                reverse={this.reverse}
                sortByAlphabetically={this.sortByAlphabetically}
                sortByLength={this.sortByLength}
                reset={this.reset}
              />
              <GoodsList goods={this.state.goods} />
              <GoodsSelect
                initial={this.state.initial}
                selectValue={this.state.selectValue}
                changeSelect={this.changeSelect}
              />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
