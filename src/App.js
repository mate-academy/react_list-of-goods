import React from 'react';
import './App.css';
import { GoodList } from './components/GoodsList/GoodsList';

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
    isLoaded: false,
    goods: [...goodsFromServer],
    originalGoods: [...goodsFromServer],
    minLength: 1,
  };

  handleStart = () => {
    this.setState({
      isLoaded: true,
    });
  };

  handleReverseList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  handleSortAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  handleResetList = () => {
    this.setState(prevState => ({
      minLength: 1,
      goods: [...prevState.originalGoods],
    }));
  };

  handleSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  handleSelectList = ({ target }) => {
    this.setState(prevState => ({
      minLength: target.value,
      goods: prevState.originalGoods
        .filter(good => good.length >= target.value),
    }));
  };

  render() {
    const { goods, minLength, isLoaded } = this.state;

    return (
      <div className="app">
        <h1>Goods</h1>
        {
          isLoaded
            ? (
              <GoodList
                goods={goods}
                minLength={minLength}
                handleReverseList={this.handleReverseList}
                handleSortAlphabet={this.handleSortAlphabet}
                handleResetList={this.handleResetList}
                handleSortByLength={this.handleSortByLength}
                handleSelectList={this.handleSelectList}
              />
            )
            : (
              <button
                type="button"
                onClick={this.handleStart}
              >
                List
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
