import React from 'react';
import './App.css';
import GoodsList from './components/goodsList/GoodsList';

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
  constructor(props) {
    super(props);

    this.state = {
      goodsItems: goodsFromServer,
      goods: [],
      isLoaded: false,
      selectValue: 0,
    };
  }

  showGoodsList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goodsItems],
      isLoaded: true,
    }));
  };

  reverseGoodsList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse()
    }));
  };

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort()
    }));
  };

  resetList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goodsItems],
      selectValue: 0,
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(function(a, b) {
        return a.length - b.length;
      })
    }));
  };

  selectLength = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      selectValue: value,
      goods: [...prevState.goodsItems]
        .filter(item => item.length >= +value + 1),
    }));
  };

  render() {
    return (
      <>
      {this.state.isLoaded ?
        <GoodsList
          goods = {this.state.goods}
          goodsItems = {this.state.goodsItems}
          reverse = {this.reverseGoodsList}
          sortAlphabetically = {this.sortAlphabetically}
          reset = {this.resetList}
          sortByLength = {this.sortByLength}
          selectLength = {this.selectLength}
        /> :
        <button className="btn" onClick={this.showGoodsList}>Start</button>
      }
      </>
    );
  }
}

export default App;
