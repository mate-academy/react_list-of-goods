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
    button: true,
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {(this.state.button)
          ? (
            <button
              type="button"
              onClick={() => {
                this.setState(() => ({
                  button: false,
                }));
              }}
            >
              Start
            </button>
          )
          : <GoodsList goodsList={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
