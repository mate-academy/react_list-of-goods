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
    startButton: false,
  }

  onStart = () => {
    this.setState({
      startButton: true,
    });
  }

  render() {
    const { startButton } = this.state;

    return (
      <div className="App">
        <h1>List of Goods</h1>
        {startButton
          ? (<GoodsList listOfGoods={goodsFromServer} />)
          : (
            <button
              className="btn"
              type="button"
              onClick={this.onStart}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
