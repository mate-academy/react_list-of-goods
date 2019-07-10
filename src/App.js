import React from 'react';
import GoodsList from './components/GoodsList';

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
    goods: [],
    isLoaded: false,
    isLoading: false,
  };

  handleClick = () => {
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        goods: goodsFromServer,
        isLoaded: true,
        isLoading: false,
      });
    }, 1000);
  };

  handleReverse = () => {
    this.setState({
      goods: goodsFromServer.reverse(),
    });
  };

  handleSortAlphabetically = () => {
    this.setState({
      goods: goodsFromServer.sort(),
    });
  };

  handleSortByLength = () => {
    this.setState({
      goods: goodsFromServer.sort((a, b) => {
        return a.length - b.length;
      }),
    })
  }

  render() {
    return (
      <main>
        { this.state.isLoaded ? (
          <GoodsList
            allGoods={this.state.goods}
            handleReverse={this.handleReverse}
            handleSortAlphabetically={this.handleSortAlphabetically}
            handleSortByLength={this.handleSortByLength}
          />
        ) : (
          <button
            type="button"
            className="loadData"
            onClick={this.handleClick}
          >
            {this.state.isLoading ? 'Loading...' : 'Load' }
          </button>
        )}
      </main>
    );
  }
}

export default App;
