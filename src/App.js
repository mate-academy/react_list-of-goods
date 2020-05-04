import React from 'react';
import GoodList from './Goodlist';
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
    isVisible: true,
  };

  hideStartButton = () => {
    this.setState(
      { isVisible: false },
    );
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {
          isVisible
            ? (
              <button type="button" onClick={this.hideStartButton}>
                Push to start
              </button>
            ) : <GoodList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
