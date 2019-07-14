import React from 'react';
import './styles/style.css';
import Changers from './components/Changers';
import Goods from './components/Goods';

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
    currentValue: 1,
  }

  handleReset = () => {
    this.setState({
      goods: [...goodsFromServer],
      currentValue: 1,
    });
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.localeCompare(b)),
    }));
  }

  SortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => (a.length - b.length)),
    }));
  }

  handleRverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  hendleSelect = (event) => {
    const { value } = event.target;
    this.setState(state => ({
      currentValue: value,
      goods: state.goods.filter(item => (item.length >= value)),
    }));
  }

  render() {
    return (
      <div className="app">
        <Changers
          handleReset={this.handleReset}
          SortByLength={this.SortByLength}
          currentValue={this.state.currentValue}
          hendleSelect={this.hendleSelect}
          handleRverse={this.handleRverse}
          sortByAlphabet={this.sortByAlphabet}
        />
        <Goods goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
