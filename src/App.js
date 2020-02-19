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
    goodsList: [...goodsFromServer],
    goodsListCopy: [...goodsFromServer],
    length: '1',
  };

  handleStart = () => {
    this.setState({
      isStarted: true,
    });
  };

  reverse = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.reverse(),
    }));
  };

  sortByAplh = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.sort(),
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.sort((a, b) => (
        a.length - b.length
      )),
    }));
  };

  resetParams = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsListCopy],
      length: '1',
    }));
  };

  handleSelect = ({ target }) => {
    this.setState(prevState => ({
      length: target.value,
      goodsList: prevState.goodsListCopy.filter(item => (
        target.value <= item.length)),
    }));
  }

  render() {
    const {
      isStarted,
      length,
      goodsList,
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
              <GoodList goods={goodsList} />
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
