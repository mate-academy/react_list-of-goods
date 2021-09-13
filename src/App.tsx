import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.css';

type State = {
  start: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    start: true,
  };

  startEndPage = () => {
    this.setState((prevState) => ({
      start: !prevState.start,
    }));
  };

  render() {
    const { start } = this.state;

    return (
      <div className="App">
        <div className="content">
          <div className="card">
            <h1 className="card-title">Goods</h1>
            <button
              type="button"
              className="card-button"
              onClick={this.startEndPage}
            >
              Start
            </button>
          </div>
          {start && (
            <GoodsList />
          )}
        </div>
      </div>
    );
  }
}

export default App;
