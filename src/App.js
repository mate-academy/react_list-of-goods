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
    isPressedButton: false,
    goods: [...goodsFromServer],
    goodsSelected: [...goodsFromServer],
    selectValueNumber: '1',
  };

  checkButton = () => {
    this.setState({
      isPressedButton: true,
    });
  };

  reverseButton = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortButton = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  resetButton = ({ goodsSelected }) => {
    this.setState({
      selectValueNumber: '1',
      goods: goodsSelected,
    });
  };

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  selectButton = ({ target }) => {
    this.setState(prevState => ({
      selectValueNumber: target.value,
      goods: [...prevState.goodsSelected]
        .filter(good => good.length >= target.value),
    }));
  };

  render() {
    const { goods, goodsSelected, selectValueNumber } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {
          this.state.isPressedButton
            ? (
              <GoodList
                goods={goods}
                goodsSelected={goodsSelected}
                selectValueNumber={selectValueNumber}
                reverseButton={this.reverseButton}
                sortButton={this.sortButton}
                resetButton={this.resetButton}
                sortByLength={this.sortByLength}
                selectButton={this.selectButton}
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
