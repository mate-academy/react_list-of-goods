import React, { Component } from 'react';
import { GoodsList } from './Components/GoodsList';
import { Button } from './Components/Button';
import { Select } from './Components/Select';
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

class App extends Component {
  state = {
    goodsVisible: false,
    goodsData: goodsFromServer,
  }

  visibleGoods = () => {
    this.setState({
      goodsVisible: true,
    });
  }

  reverseListOfGoods = () => (
    this.setState(state => ({
      goodsData: [...state.goodsData].reverse(),
    }))
  )

  sortAlphabetically = () => (
    this.setState(state => ({
      goodsData: [...state.goodsData].sort((a, b) => a.localeCompare(b)),
    }))
  )

  resetListOfGoods = () => (
    this.setState({
      goodsData: goodsFromServer,
    })
  )

  sortByLength = () => (
    this.setState(state => ({
      goodsData: [...state.goodsData].sort((a, b) => a.length - b.length),
    }))
  )

  filterGoodsByLength = event => (
    this.setState({
      goodsData:
        goodsFromServer.filter(item => item.length >= event.target.value),
    })
  );

  render() {
    const dataAmountGoods
      = Array(goodsFromServer.length).fill().map((_, index) => index + 1);
    const { goodsVisible } = this.state;

    return (
      <div className="App">
        {
          goodsVisible
            ? (
              <>
                <GoodsList goods={this.state.goodsData} />
                <Button
                  onClick={this.reverseListOfGoods}
                  text="Reverse"
                />
                <Button
                  onClick={this.sortAlphabetically}
                  text="Sort alphabetically"
                />
                <Button
                  onClick={this.resetListOfGoods}
                  text="Reset"
                />
                <Button
                  onClick={this.sortByLength}
                  text="Sort by length"
                />
                <Select
                  onChange={this.filterGoodsByLength}
                  dataAmountGoods={dataAmountGoods}
                />
              </>
            )
            : (
              <>
                <button
                  onClick={this.visibleGoods}
                  type="button"
                >
                  Start
                </button>
              </>
            )
        }
      </div>
    );
  }
}

export default App;
