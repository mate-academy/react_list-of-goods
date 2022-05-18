import React from 'react';
import { GoodsList } from './components';
import './App.scss';

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
  isVisible: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
  };

  start = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">List of goods</h1>

        {isVisible && <GoodsList goodsList={goodsFromServer} />}

        {!isVisible && (
          <button
            type="button"
            onClick={this.start}
            className="App__button"
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
