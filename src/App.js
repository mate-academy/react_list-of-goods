import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { ShowButton } from './components/ShowButton';
import { ButtonHandler } from './components/ButtonHandler';

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
          <ShowButton visible={this.handleVisibility} />
        )}
        {isGoodsVisible && <GoodsList goods={goods} />}
        <ButtonHandler
          handler={this.handleReverse}
          text="Reverse"
        />
        <ButtonHandler
          handler={this.sortByAlphabet}
          text="Sort alphabetically"
        />
        <ButtonHandler
          handler={this.handleReset}
          text="Reset"
        />
        <ButtonHandler
          handler={this.sortByLength}
          text="Sort by length"
        />
      </div>
    );
  }
}

export default App;
