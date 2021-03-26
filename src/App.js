import React from 'react';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';
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
    isStarted: false,
    sortBy: '',
    goods: goodsFromServer,
    visibleGoods: goodsFromServer,
  };

  startHandler = () => {
    this.setState({ isStarted: true });
  };

  reverseHandler = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods].reverse(),
    }));
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
    this.sortGoods();
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
    this.sortGoods();
  };

  sortGoods = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods]
        .sort((prevProduct, currentProduct) => {
          switch (state.sortBy) {
            case 'name':
              return prevProduct.localeCompare(currentProduct);

            case 'length':
              return prevProduct.length - currentProduct.length;

            default:
              return 0;
          }
        }),
    }));
  };

  resetHandler = () => {
    this.setState(state => ({
      visibleGoods: [...state.goods],
    }));
  }

  render() {
    const { isStarted, visibleGoods } = this.state;

    return (
      <div className="App">
        {!isStarted
          && (
            <Button
              onClick={this.startHandler}
              text="Start"
            />
          )
        }

        {isStarted
          && (
            <>
              <h1>Goods list</h1>
              <GoodsList
                goods={visibleGoods}
                reverseHandler={this.reverseHandler}
                sortByName={this.sortByName}
                sortByLength={this.sortByLength}
                resetHandler={this.resetHandler}
              />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
