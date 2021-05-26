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
    isDisplayed: false,
  }

  render() {
    const { isDisplayed } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isDisplayed && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isDisplayed: true });
            }}
          >
            Start
          </button>
        )}
        {isDisplayed && (
          <GoodsList goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
