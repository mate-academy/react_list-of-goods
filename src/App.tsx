import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

interface State {
  isListVisible: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    isListVisible: false,
  };

  start = () => {
    this.setState({
      isListVisible: true,
    });
  };

  render() {
    const { isListVisible } = this.state;

    if (isListVisible) {
      return (
        <GoodsList />
      );
    }

    return (
      <div>
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.start}
        >
          Start
        </button>
      </div>
    );
  }
}

export default App;
