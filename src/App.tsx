import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

const goodsFromServer: string[] = [
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
    isVisible: false,
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isVisible
          ? <GoodsList goodsList={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={() => this.setState({ isVisible: true })}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
