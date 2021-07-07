import React from 'react';
import GoodList from './Goodlist';
import './App.css';

class App extends React.Component {
  state = {
    isVisible: true,
  };

  hideStartButton = () => {
    this.setState(
      { isVisible: false },
    );
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {
          isVisible
            ? (
              <button type="button" onClick={this.hideStartButton}>
                Push to start
              </button>
            ) : <GoodList />
        }
      </div>
    );
  }
}

export default App;
