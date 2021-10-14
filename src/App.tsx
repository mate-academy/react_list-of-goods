import React from 'react';
import './App.scss';

import { Goods } from './components/Goods';

interface State {
  isStarted: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
  };

  startSystem = () => {
    this.setState({ isStarted: true });
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="list">
        <h1 className="list__title">List of Goods:</h1>
        {!isStarted && (
          <button
            onClick={this.startSystem}
            type="button"
          >
            Start System!
          </button>
        )}

        {isStarted && (
          <Goods />
        )}
      </div>
    );
  }
}

export default App;
