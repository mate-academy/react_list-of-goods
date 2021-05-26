import React from 'react';
import './App.css';
// eslint-disable-next-line import/named
import { Start } from './Start';

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
    isVisible: false,
  }

  start = () => {
    this.setState({
      isVisible: true,
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className={isVisible ? 'button-start' : ''}
          onClick={this.start}
        >
          Start
        </button>
        {isVisible && <Start goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
