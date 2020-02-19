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
    isLoad: false,
    goods: [...goodsFromServer],
    goodsSelected: [...goodsFromServer],
    minLength: '1',
  };

  checkButton = () => {
    this.setState({
      isLoad: true,
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
      minLength: '1',
      goods: [...prevState.goodsSelected],
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
      goods: [...prevState.goodsSelected]
        .filter(good => good.length >= target.value),
    }));
  };

  render() {
    const { goods, minLength, isLoad } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {
          isLoad
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
                onClick={this.checkButton}
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
