import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

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
  buttonPressed: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    buttonPressed: false,
  };

  pressButton = () => {
    this.setState({ buttonPressed: true });
  };

  render() {
    const { buttonPressed } = this.state;

    return (
      <div className="app">
        <h1 className="app__heading">Goods</h1>
        { !buttonPressed
          ? (
            <button
              type="button"
              onClick={this.pressButton}
              className="app__button"
            >
              Start
            </button>
          )
          : <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
