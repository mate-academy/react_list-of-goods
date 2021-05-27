import React from 'react';
import { GoodsList } from './components/GoodsList';
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
    listVisebility: false,
  }

  showGoods = (event) => {
    this.setState({
      listVisebility: true,
    });
    const startButton = event;

    startButton.target.style.visibility = 'hidden';
  }

  render() {
    const { listVisebility } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button type="button" onClick={this.showGoods}>Start</button>
        {listVisebility && (
          <GoodsList goodsList={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
