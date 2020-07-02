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

  render() {
    const { initialGoods, isStarted } = this.state;

    return (
      <div className="App">
        { !isStarted
          ? (
            <button
              type="button"
              onClick={this.handleStartButton}
            >
              Start
            </button>
          ) : (
            <GoodsList
              initialGoods={initialGoods}
            />
          )
        }
        {initialGoods.length}
      </div>
    );
  }
}

export default App;
