import React from 'react';
import GoodsList from './GoodsList';
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
    value: false,
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.value
          ? <GoodsList goodsList={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={() => {
                this.setState({
                  value: true,
                });
              }}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
