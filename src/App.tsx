import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Goods } from './types';

const goodsFromServer: string[] = [
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

interface State {
  initialGoods: Goods;
  isStarted: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
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
              initial={initialGoods}
            />
          )
        }
        {initialGoods.length}
      </div>
    );
  }
}

export default App;
