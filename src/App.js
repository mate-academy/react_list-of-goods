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
    isReversed: false,
    sortBy: '',
    goods: goodsFromServer,
  }

  startHandler = () => {
    this.setState({ isStarted: true });
  }

  reverseHandler = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  resetHandler = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { isStarted, isReversed, sortBy, goods } = this.state;
    const visibleGoods = [...goods];

    visibleGoods.sort((prevProduct, currentProduct) => {
      switch (sortBy) {
        case 'name':
          return prevProduct.localeCompare(currentProduct);

        case 'length':
          return prevProduct.length - currentProduct.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!isStarted
          && (
            <Button
              handler={this.startHandler}
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
