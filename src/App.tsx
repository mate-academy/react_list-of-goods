import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <div className="head">
          <h1 className="App__title">Goods</h1>
          {!isVisible && (
            <button
              className="start-button"
              type="button"
              onClick={() => {
                this.setState({ isVisible: !isVisible });
              }}
            >
              Start
            </button>
          )}
        </div>
        {isVisible && <GoodsList goodsList={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
