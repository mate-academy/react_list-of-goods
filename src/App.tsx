import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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
  goods: string[],
  isStarted: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isStarted: false,
  };

  start = () => {
    this.setState((prevState) => ({
      isStarted: !prevState.isStarted,
    }));
  };

  render() {
    const { isStarted, goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {
          isStarted && (
            <GoodsList goods={goods} />
          )
        }
        {!isStarted && (
          <button
            type="button"
            className="App__btn"
            onClick={this.start}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
