import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { ButtonForList } from './components/ButtonForList';

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
    goods: [...goodsFromServer],
    isGoodsVisible: false,
    isButtonVisible: true,
  }

  handleVisibility = () => {
    this.setState(prevState => ({
      isGoodsVisible: !prevState.isGoodsVisible,
      isButtonVisible: !prevState.isButtonVisible,
    }));
  }

  handleReverse = () => {
    this.setState(({
      goods: [...goodsFromServer].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState({
      goods: [...goodsFromServer].sort((curr, next) => (
        curr.localeCompare(next)
      )),
    });
  }

  sortByLength = () => {
    this.setState({
      goods: [...goodsFromServer].sort((curr, next) => (
        curr.length - next.length
      )),
    });
  }

  handleReset = () => {
    this.setState({
      goods: [...goodsFromServer].sort(() => 0),
    });
  }

  render() {
    const {
      isGoodsVisible,
      isButtonVisible,
      goods,
    } = this.state;

    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        {isButtonVisible && (
          <ButtonForList
            onCLick={this.handleVisibility}
            text="Start"
          />
        )}
        {isGoodsVisible && <GoodsList goods={goods} />}
        <ButtonForList
          onCLick={this.handleReverse}
          text="Reverse"
        />
        <ButtonForList
          onCLick={this.sortByAlphabet}
          text="Sort alphabetically"
        />
        <ButtonForList
          onCLick={this.handleReset}
          text="Reset"
        />
        <ButtonForList
          onCLick={this.sortByLength}
          text="Sort by length"
        />
      </div>
    );
  }
}

export default App;
