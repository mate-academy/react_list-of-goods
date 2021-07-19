import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { GoodsList } from './components/GoodsList/GoodsList';

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

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  }

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        <h1 className="display-1">Goods</h1>
        {isStarted
          ? (
            <GoodsList goods={goodsFromServer} />
          )
          : (
            <Button innerText="Start" action={this.start} />
          )
        }
      </div>
    );
  }
}

export default App;
