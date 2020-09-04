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
    clicked: '',
    show: '',
    vegetables: goodsFromServer,
  }

  show = () => {
    this.setState({ clicked: 'hiden' });
    this.setState({ show: 'show' });
  }

  render() {
    const { vegetables } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className={this.state.clicked}
          onClick={this.show}
        >
          Start
        </button>
        <ul className={`hiden ${this.state.show}`}>
          <GoodsList vegetables={vegetables} clicked={this.state.show} />
        </ul>
      </div>
    );
  }
}

export default App;
