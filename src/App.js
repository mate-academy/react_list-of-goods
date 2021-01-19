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
    showGoods: false,
  }

  showContent = () => {
    this.setState({ showGoods: true });
    document.querySelector('.start').setAttribute('hidden', true);
  }

  render() {
    return (
      <div className="App">
        <button
          className="start"
          onClick={this.showContent}
          type="button"
        >
          Start
        </button>

        { this.state.showGoods ? <GoodsList goods={goodsFromServer} /> : null }

      </div>
    );
  }
}

export default App;
