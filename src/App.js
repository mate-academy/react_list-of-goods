import React from 'react';
import { Controller } from './components/Controller/Controller';
import { GoodsList } from './components/GoodsList/GoodsList';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
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

export class App extends React.Component {
  state = {
    initialGoods: [],
    goods: [],
    isStarted: false,
    currentSelected: 'length',
  };

  handleStart = () => {
    this.setState(prevState => ({
      initialGoods: [...goodsFromServer],
      goods: [...goodsFromServer],
      isStarted: true,
    }));
  };

  handleReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .reverse(),
    }));
  };

  handleReset = () => {
    this.setState(prevState => ({
      goods: [...prevState.initialGoods],
      currentSelected: 'length',
    }));
  };

  handleSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  handleSelect = (e) => {
    const minLength = e.target.value === 'length'
      ? 1
      : e.target.value;

    this.setState(prevState => ({
      goods: prevState.initialGoods.filter(el => el.length >= minLength),
      currentSelected: minLength,
    }));
  };

  handleSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.localeCompare(b)),
    }));
  };

  render() {
    const { goods, isStarted, currentSelected } = this.state;

    return (
      <div className="App container">
        <h1>Goods</h1>
        {
          isStarted
            ? (
              <>
                <Controller
                  reset={this.handleReset}
                  sort={this.handleSort}
                  reverse={this.handleReverse}
                  sortLength={this.handleSortByLength}
                  onselect={this.handleSelect}
                  currentSelected={currentSelected}
                />
                <GoodsList goods={goods} />
              </>
            )
            : (
              <button
                type="button"
                onClick={this.handleStart}
                className="btn btn-danger btn-sm "
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}
