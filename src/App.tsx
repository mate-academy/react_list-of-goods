import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    isStarted: false,
  };

  getStarted = () => {
    this.setState({
      isStarted: true,
    });
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Goods</h1>
        {isStarted
          ? (
            <GoodsList />
          )
          : (
            <button
              type="button"
              className="button app__button"
              onClick={this.getStarted}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
