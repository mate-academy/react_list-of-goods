import React from 'react';
import './App.css';
import GoodList from './component/GoodsList';

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
    isToggleOn: false,
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.isToggleOn ? <GoodList goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={() => this.setState({
                isToggleOn: true,
              })}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
