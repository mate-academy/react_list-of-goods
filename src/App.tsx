import React from 'react';
import { ListOfGoods } from './ListOfGoods';
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
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {!this.state.isVisibleList
          ? <ListOfGoods goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.showList}
              className="button button__start"
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
