import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

export const goodsFromServer: string[] = [
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
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: false,
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {!isVisible && (
          <button
            className="App__button-start"
            type="button"
            onClick={() => (
              this.setState({ isVisible: !isVisible })
            )}
          >
            Start
          </button>
        )}
        {isVisible && <GoodsList goodsList={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
