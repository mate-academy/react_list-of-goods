import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { Good } from './types/Good';

const goodsFromServer: Good[] = [
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

interface Props {
  isVisibleList: boolean;
}

class App extends React.PureComponent<{}, Props> {
  state = {
    isVisibleList: false,
  };

  changeVisibility = () => {
    this.setState(state => ({
      isVisibleList: !state.isVisibleList,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-Title">Goods</h1>
        <div className="App-List">
          {this.state.isVisibleList && (
            <GoodsList goods={goodsFromServer} />
          )}
          {!this.state.isVisibleList && (
            <button
              type="button"
              className="App-Button"
              onClick={this.changeVisibility}
            >
              Click me
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
