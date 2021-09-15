import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';
import { StartButton } from './components/StartButton';

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
  goods: string[];
  isListVisible: boolean;
};

class App extends React.PureComponent<{}, State> {
  state = {
    goods: goodsFromServer,
    isListVisible: false,
  };

  renderedList = () => {
    this.setState(currentState => ({
      isListVisible: !currentState.isListVisible,
    }));
  };

  render() {
    const {
      goods,
      isListVisible,
    } = this.state;

    return (
      <div className="App d-flex justify-content-center align-items-center">
        <div>
          <h1>Goods</h1>

          {!isListVisible && (
            <StartButton method={this.renderedList} />
          )}

          {isListVisible && (
            <GoodsList
              goods={goods}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
