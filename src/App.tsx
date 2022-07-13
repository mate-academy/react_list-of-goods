import React from 'react';

import './App.css';

import GoodsList from './components/GoodsList';

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

class App extends React.PureComponent<{}, State> {
  state: State = {
    isStarted: false,
  };

  handleStartButtonClick = () => {
    this.setState({
      isStarted: true,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="box container is-max-desktop">
          <h1 className="title">Goods</h1>

          {this.state.isStarted
            ? (
              <GoodsList goods={goodsFromServer} />
            )
            : (
              <button
                type="button"
                className="button is-primary is-fullwidth"
                onClick={this.handleStartButtonClick}
              >
                Start
              </button>
            )}
        </div>
      </div>
    );
  }
}

export default App;
