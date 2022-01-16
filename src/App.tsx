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
  isListVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    isListVisible: false,
  };

  showList = () => {
    this.setState({ isListVisible: true });
  };

  render() {
    const { isListVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {isListVisible
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              className="App__start-button"
              onClick={this.showList}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}
