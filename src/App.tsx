import React from 'react';
import { GoodsList } from './components/Goods';
import './App.scss';

interface State {
  isStarted: boolean;
}

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
  };

  startSort = () => {
    this.setState({ isStarted: true });
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isStarted && (
          <button
            onClick={this.startSort}
            type="button"
          >
            Start!
          </button>
        )}

        {isStarted && (
          <GoodsList />
        )}
      </div>
    );
  }
}
