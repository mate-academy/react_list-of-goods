import React, { Component } from 'react';
import './App.css';
import { ListOfGoods } from './Components/ListOfGoods/ListOfGoods';
import { Buttons } from './Components/Buttons/Buttons';

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
    isGoodsLoaded: false,
    goods: [...goodsFromServer],
    originalGoods: [...goodsFromServer],
    minLength: 1,
  }

  loadGoods = () => {
    this.setState({
      isGoodsLoaded: true,
    });
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      minLength: 1,
      goods: [...prevState.originalGoods],
    }));
  }

  sortByLength = () => this.setState(prevState => ({
    goods: [...prevState.goods]
      .sort((good, good1) => good.length - good1.length),
  }))

  handleChangeSelect = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      minLength: value,
      goods: prevState.originalGoods
        .filter(good => good.length >= value),
    }));
  }

  render() {
    const { isGoodsLoaded, goods, minLength } = this.state;

    return (
      <div className="App">
        <h1>List of goods</h1>
        {
          isGoodsLoaded
            ? (
              <>
                <Buttons
                  reverseGoods={this.reverseGoods}
                  sortAlphabetically={this.sortAlphabetically}
                  reset={this.reset}
                  sortByLength={this.sortByLength}
                  handleChangeSelect={this.handleChangeSelect}
                  minLength={minLength}
                />
                <ListOfGoods goods={goods} />
              </>
            )
            : (
              <button
                type="button"
                onClick={this.loadGoods}
              >
              Load
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
