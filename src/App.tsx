import React from 'react';
import './App.css';
import { List } from './components/List';

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

type State = {
  buttonVisibility: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    buttonVisibility: false,
  };

  buttonVisibility = () => {
    this.setState(state => ({
      buttonVisibility: !state.buttonVisibility,
    }));
  };

  render() {
    const { buttonVisibility } = this.state;

    return (
      <div className="App">
        {buttonVisibility
          ? (
            <List goods={goodsFromServer} />
          )
          : (
            <button
              className="button"
              type="button"
              onClick={this.buttonVisibility}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
