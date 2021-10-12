import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.css';

type State = {
  isStarted: boolean;
  isHidden: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isStarted: true,
    isHidden: false,

  };

  startEndPage = () => {
    this.setState((prevState) => ({
      isStarted: !prevState.isStarted,
      isHidden: true,
    }));
  };

  render() {
    const { isStarted, isHidden } = this.state;

    return (
      <div className="App">
        <div className="content">
          <div className="card">
            <h1 className="card-title">Goods</h1>
            {!isHidden && (
              <button
                type="button"
                className="button card-button"
                onClick={this.startEndPage}
              >
                Start
              </button>
            )}
          </div>

          {!isStarted && (
            <GoodsList />
          )}
        </div>
      </div>
    );
  }
}

export default App;
