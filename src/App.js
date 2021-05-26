import React from 'react';
import { GoodsList } from './GoodsList';
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
    buttonVisibile: false,
  };

  start = () => {
    this.setState(state => ({
      buttonVisibile: !state.buttonVisibile,
    }));
  }

  render() {
    const { buttonVisibile } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className="btn"
          onClick={this.start}
        >
          {buttonVisibile ? 'Close' : 'Start'}
        </button>

        {buttonVisibile && (<GoodsList goods={goodsFromServer} />)}
      </div>
    );
  }
}

export default App;
