import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
    isStarted: false,
  }

  render() {
    const { isStarted } = this.state;

    return (
      isStarted
        ? <GoodsList goodsFromServer={goodsFromServer} />
        : (
          <button
            type="button"
            onClick={() => this.setState(
              {
                isStarted: true,
              },
            )}
          >
            START
          </button>
        )
    );
  }
}

export default App;
