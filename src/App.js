import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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
    isLoaded: false,
    goodsList: [...goodsFromServer],
    isSorted: true,
    originalGoods: [...goodsFromServer],
    minLength: 1,
  }

  handleStart = () => {
    this.setState({
      isLoaded: true,
    });
  }

  reverseList = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.reverse(),
    }));
  }

  sortList = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.sort((a, b) => (
        prevState.isSorted ? a.localeCompare(b) : b.localeCompare(a)
      )),
      isSorted: !prevState.isSorted,
    }));
  }

  resetList = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.originalGoods],
      minLength: 1,
    }));
  }

  sortListByLength = () => {
    this.setState(prevState => ({
      goodsList: prevState.goodsList.sort((a, b) => a.length - b.length),
    }));
  }

  handleSelectChange = ({ target }) => {
    this.setState(prevState => ({
      minLength: target.value,
      goodsList: prevState.originalGoods.filter(item => (
        item.length >= target.value)),
    }));
  }

  render() {
    const { goodsList, isLoaded, minLength } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        { isLoaded
          ? (
            <>
              <button
                type="button"
                onClick={this.reverseList}
              >
                reverse
              </button>
              <button
                type="button"
                onClick={this.sortList}
              >
                sort
              </button>
              <button
                type="button"
                onClick={this.resetList}
              >
                reset
              </button>
              <button
                type="button"
                onClick={this.sortListByLength}
              >
                sortByLength
              </button>
              <select value={minLength} onChange={this.handleSelectChange}>
                {new Array(10).fill(1).map((_, i) => (
                  <option key={_} value={i + 1}>{i + 1}</option>))}
              </select>
              <GoodsList goods={goodsList} />
            </>
          )
          : (
            <button type="button" onClick={this.handleStart}>
              Start
            </button>
          )
        }
      </div>
    );
  }
}

GoodsList.propTypes = PropTypes.func.isRequired;
