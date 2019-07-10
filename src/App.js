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

class App extends React.Component {
  state = {
    goods: [],
    isLoaded: false,
    // visiblegoods: [],
  };

  loadClick = () => {
    this.setState({
      isLoaded: true,
      goods: goodsFromServer,
    });
  };

  render() {
    return (
      <div className="App">
        { this.state.isLoaded ? (
          <div>
            <h1>Goods</h1>
            <button type="button" onClick={this.sortBy}>sortBy</button>
            <GoodsList goods={this.state.goods} />
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
