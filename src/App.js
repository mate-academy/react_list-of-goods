import React from 'react';
import { GoodsList } from './components/GoodsList';
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

class App extends React.PureComponent {
  state = {
    goodsList: goodsFromServer,
    visibleGoods: false,
    isReverse: false,
    sortBy: '',
  };

  getReverseGoods = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  getSortGoods = (sortMethod) => {
    this.setState({
      sortBy: sortMethod,
    });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
    });
  };

  showGoods = () => {
    this.setState({
      visibleGoods: true,
    });
  };

  sortLength = () => {
    this.getSortGoods('length');
  };

  sortAlfabetically = () => {
    this.getSortGoods('alphabetically');
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Goods</h1>
          {goodsFromServer.length}
        </div>

        {!this.state.visibleGoods
          ? (
            <button
              type="button"
              onClick={this.showGoods}
            >
              start
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={this.getReverseGoods}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlfabetically}
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
                onClick={this.sortLength}
              >
                Sort by length
              </button>
              <GoodsList {...this.state} />
            </>
          )}

      </>
    );
  }
}

export default App;
