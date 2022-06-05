import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
  buttonHidden: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    buttonHidden: false,
  };

  buttonHidden = () => {
    this.setState(state => ({
      buttonHidden: !state.buttonHidden,
    }));
  };

  render() {
    const { buttonHidden } = this.state;

    return (
      <div className="App">
        {buttonHidden
          ? (
            <GoodsList goods={goodsFromServer} />
          )
          : (
            <button
              className="button is-success"
              type="button"
              onClick={this.buttonHidden}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
