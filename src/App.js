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
    isButtonVisibile: false,
  };

  start = () => {
    this.setState(state => ({
      isButtonVisibile: !state.isButtonVisibile,
    }));
  }

  render() {
    const { isButtonVisibile } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className="btn"
          onClick={this.start}
        >
          Start
        </button>

        {isButtonVisibile && (<GoodsList goods={goodsFromServer} />)}
      </div>
    );
  }
}

export default App;
