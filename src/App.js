import React from 'react';
import Goods from './components/Goods/Goods';
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
      goodsOriginal: goodsFromServer,
      goods: [],
      isStarted: false,
      selectedValue: 0,
    };

  showGoods = () => {
    this.setState({
      goods: [...goodsFromServer],
      isStarted: true,
    });
  }

  resetScreen = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectedValue: 0,
    });
  }

  reversGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAz = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  sortLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => a.length - b.length),
    }));
  }

  handleChangeSelect = (event) => {
    this.setState({
      selectedValue: event.target.value,
      goods: [...goodsFromServer]
        .filter(elem => elem.length >= event.target.value - -1),
    });
  }

  render() {
    return (
      <Goods
        sortAz={this.sortAz}
        sortLength={this.sortLength}
        resetScreen={this.resetScreen}
        reversGoods={this.reversGoods}
        showGoods={this.showGoods}
        handleChangeSelect={this.handleChangeSelect}
        isStarted={this.state.isStarted}
        selectedValue={this.state.selectedValue}
        goods={this.state.goods}
        goodsOriginal={this.state.goodsOriginal}
      />
    );
  }
}

export default App;
