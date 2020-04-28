import React from 'react';
import './App.css';
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
    isExpanded: true,
  }

  handleExpand() {
    this.setState(state => ({
      isExpanded: !state.isExpanded,
    }));
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={() => this.handleExpand()}
        >
          {isExpanded ? 'Close' : 'Start'}
        </button>
        {isExpanded && <GoodsList goodsList={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
