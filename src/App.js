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
    isGoodsVisible: false,
    goodsData: goodsFromServer,
    minProductLength: 1,
  }

  visibleGoods = () => {
    this.setState({
      isGoodsVisible: true,
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
      minProductLength: 0,
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
    const optionsAmountGoods
      = Array(goodsFromServer.length).fill().map((_, index) => index + 1);
    const { isGoodsVisible, minProductLength } = this.state;

    return (
      <div className="App">
        {
          isGoodsVisible
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
                  optionsAmountGoods={optionsAmountGoods}
                  minProductLength={minProductLength}
                />
              </>
            )
            : (
              <Button
                onClick={this.visibleGoods}
                value={minProductLength}
                text="Start"
              />
            )
        }
      </div>
    );
  }
}

export default App;
