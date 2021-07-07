import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList/GoodsList';

class App extends React.Component {
  state = {
    showStartButton: true,
  }

  toggleList = () => {
    this.setState(prev => ({
      showStartButton: !prev.showStartButton,
    }));
  }

  render() {
    return (
      <div className="App">
        {this.state.showStartButton
          ? (
            <button
              type="button"
              onClick={this.toggleList}
            >
              Start
            </button>
          )
          : (
            <GoodsList />
          )}
      </div>
    );
  }
}

export default App;
