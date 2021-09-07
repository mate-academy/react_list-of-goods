import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  isStarted: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
  };

  start = () => {
    this.setState((currentState) => ({
      isStarted: !currentState.isStarted,
    }));
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App d-flex flex-column align-items-center bg-light vh-100">
        <h1 className="display-1 text-center">
          Goods
        </h1>

        {!isStarted && (
          <button
            type="button"
            className="btn btn-success w-50"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isStarted && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
