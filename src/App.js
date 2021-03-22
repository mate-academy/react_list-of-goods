import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

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
    isVisible: false,
  }

  isVisibleGoods = () => {
    this.setState({ isVisible: true });
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: prevState.goods.reverse(),
    }));
  }

  reset = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  }

  sortGoodsAlphabetically = () => {
    const preparedGoods = [...goodsFromServer];

    this.setState({ goods: preparedGoods
      .sort((prevGood, currentGood) => prevGood.localeCompare(currentGood)) });
  }

  sortGoodsByLength = () => {
    const preparedGoods = [...goodsFromServer];

    this.setState({ goods: preparedGoods
      .sort((prevGood, currentGood) => prevGood.length - currentGood.length) });
  }

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isVisible ? (
          <button
            type="button"
            onClick={this.isVisibleGoods}
          >
            Start
          </button>
        ) : (
          <div>
            <button
              type="button"
              onClick={this.reverseGoods}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortGoodsAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.sortGoodsByLength}
            >
              Sort by length
            </button>
            <ul>
              <GoodsList goods={goods} />
            </ul>
          </div>
        )
        }
      </div>
    );
  }
}

export default App;
