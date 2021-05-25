import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
    visability: false,
  }

  start = () => {
    this.setState(state => ({ visability: !state.visability }));
  }

  render() {
    return (
      <div className="App">
        <button
          type="button"
          onClick={this.start}
        >
          Start
        </button>
        {this.state.visability && (
          <GoodsList goods={goodsFromServer} />
        )
        }
      </div>
    );
  }
}

export default App;
