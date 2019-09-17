import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';
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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isStarted: false,
    standartGoods: [...goodsFromServer],
    selected: 1,
  };

  handleStart = () => {
    this.setState(prevState => ({ isStarted: !prevState.isStarted }));
  };

  handleReverse = () => {
    this.setState(prevState => ({ goods: prevState.goods.reverse() }));
  };

  handleReset = () => {
    this.setState(prevState => ({
      goods: [...prevState.standartGoods],
      selected: 1,
    }));
  };

  handleSort = () => {
    this.setState(prevState => ({ goods: prevState.goods.sort() }));
  };

  handleSortLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => a.length - b.length),
    }));
  };

  handleChange = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      selected: value,
      goods: [...prevState.standartGoods].filter(elem => elem.length >= value),
    }));
  };

  render() {
    return (
      <div className="App">
        {this.state.isStarted ? (
          <GoodsList
            Goods={this.state.goods}
            handleReverse={this.handleReverse}
            handleReset={this.handleReset}
            handleSort={this.handleSort}
            handleSortLength={this.handleSortLength}
            selected={this.state.selected}
            handleChange={this.handleChange}
          />
        ) : (
          <button
            type="button"
            onClick={this.handleStart}
            className="ui massive primary button button-start"
          >
            START
          </button>
        )}
      </div>
    );
  }
}

export default App;
