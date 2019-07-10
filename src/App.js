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

  handleRevers = () => {
    this.setState({
      goods: goodsFromServer.reverse(),
    });
  };

  render() {
    return (
      <main>
        { this.state.isLoaded ? (
          <GoodsList
            allGoods={this.state.goods}
            handleRevers={this.handleRevers}
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
