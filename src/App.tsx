import React from 'react';
import { GoodsList } from './components';
import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings ',
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
  start: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    start: false,
  };

  startingApp = () => {
    this.setState({
      start: true,
    });
  };

  render() {
    const { start } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div
            className="
              GoodsList__wrapper
              row
              d-flex
              justify-content-center
              align-items-center"
          >
            {!start && <button type="button" onClick={this.startingApp} className="btn btn-danger col-lg-3">Start</button>}
            {start && <GoodsList goods={goodsFromServer} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
