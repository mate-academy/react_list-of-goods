import React, { Component } from 'react';
import './App.css';
import { GoodList } from './components/GoodList/GoodList';
import { SortButtons } from './components/SortButtons/SortButtons';
import { Select } from './components/Select/Select';

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

export class App extends Component {
  state = {
    isStarted: false,
    defaultGoods: [...goodsFromServer],
    originalGoods: [...goodsFromServer],
    length: '1',
  };

  handleStart = () => {
    this.setState({
      isStarted: true,
    });
  };

  reverse = () => {
    this.setState(prevState => ({
      defaultGoods: prevState.defaultGoods.reverse(),
    }));
  };

  sortByAplh = () => {
    this.setState(prevState => ({
      defaultGoods: prevState.defaultGoods.sort(),
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      defaultGoods: prevState.defaultGoods.sort((a, b) => (
        a.length - b.length
      )),
    }));
  };

  resetParams = () => {
    this.setState(prevState => ({
      defaultGoods: [...prevState.originalGoods],
      length: '1',
    }));
  };

  handleSelect = ({ target }) => {
    this.setState(prevState => ({
      length: target.value,
      defaultGoods: prevState.originalGoods.filter(
        item => (target.value <= item.length),
      ),
    }));
  }

  render() {
    const {
      isStarted,
      length,
      defaultGoods,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isStarted
          ? (
            <>
              <SortButtons
                sortAplhBtn={this.sortByAplh}
                sortLengthBtn={this.sortByLength}
                reverseBtn={this.reverse}
                resetBtn={this.resetParams}
              />
              <Select
                quantity={length}
                quantityFunc={this.handleSelect}
              />
              <GoodList goods={defaultGoods} />
            </>
          )
          : (
            <button
              type="button"
              onClick={this.handleStart}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}
