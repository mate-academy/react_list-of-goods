import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.css';

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
  state: State = {
    isVisible: false,
  };

  showGoodsList = () => {
    this.setState({ isVisible: true });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods List</h1>
        {isVisible
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              className="button__start"
              onClick={this.showGoodsList}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
