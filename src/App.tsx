import React from 'react';
import './App.css';

import { ListOfGoods } from './goodsList';

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
  isVisibleList: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisibleList: true,
  };

  showList = () => {
    this.setState({ isVisibleList: false });
  };

  render() {
    return (
      <div>
        <h1>Goods</h1>
        {!this.state.isVisibleList
          ? <ListOfGoods goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.showList}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
