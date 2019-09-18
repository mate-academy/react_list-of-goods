import React from 'react';
import Goods from './Components/Goods/Goods';
import Start from './Components/Start/Start';

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
    this.setState(prevState => ({
      goods: [...prevState.goodsOriginal],
      isStarted: true,
    }));
  }

  resetScreen = () => {
    this.setState(prevState => ({
      goods: [...prevState.goodsOriginal],
      selectedValue: 0,
    }));
  }

  reversGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabet = () => {
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
    const { value } = event.target;

    this.setState(prevState => ({
      selectedValue: value,
      goods: [...prevState.goodsOriginal]
        .filter(elem => elem.length >= Number(value) + 1),
    }));
  }

  render() {
    return (
      <>
        {this.state.isStarted ? (
          <Goods
            sortAlphabet={this.sortAlphabet}
            sortLength={this.sortLength}
            resetScreen={this.resetScreen}
            reversGoods={this.reversGoods}
            handleChangeSelect={this.handleChangeSelect}
            selectedValue={this.state.selectedValue}
            goods={this.state.goods}
            goodsOriginal={this.state.goodsOriginal}
          />
        ) : (
          <Start showGoods={this.showGoods} />
        )
        }
      </>
    );
  }
}

export default App;
