import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    initialGoods: goodsFromServer,
    isStarted: false,
  };

  handleStartButton = () => {
    this.setState({
      isStarted: true,
    });
  }

  startDisplay = (isStarted, initialGoods) => {
    if (!isStarted) {
      return (
        <button
          type="button"
          onClick={this.handleStartButton}
        >
          Start
        </button>
      );
    }

    return (
      <GoodsList
        initialGoods={initialGoods}
      />
    );
  }

  render() {
    const { initialGoods, isStarted } = this.state;

    return (
      <div className="App">
        {
          this.startDisplay(
            isStarted,
            initialGoods,
          )
        }
        {initialGoods.length}
      </div>
    );
  }
}

export default App;
