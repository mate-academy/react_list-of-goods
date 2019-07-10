import React from 'react';
import GoodsList from './GoodsList';

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

const sortForGoods = arr => [...arr].reverse();

class App extends React.Component {
  state = {
    // goods: [],
    isLoaded: false,
    visiblegoods: [...goodsFromServer],
  };

  sortByReverse = () => {
    this.setState(prevGood => ({
      visiblegoods: sortForGoods(prevGood.visiblegoods),
    }));
  };

  loadClick = () => {
    this.setState({
      isLoaded: true,
      // goods: [...goodsFromServer],
      visiblegoods: [...goodsFromServer],
    });
  };

  render() {
    return (
      <div className="App">
        { this.state.isLoaded ? (
          <div className="App__wrapp">
            <h1>Goods</h1>
            <button type="button" onClick={this.sortByReverse}>Reverse</button>

            <GoodsList goods={this.state.visiblegoods} />
          </div>
        ) : (
          <div>
            <button type="button" onClick={this.loadClick}>
              Start
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
