import React from 'react';
import './App.css';

import { GoodList } from './components/GoodsList';

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
  start: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    start: false,
  };

  showList = () => {
    this.setState(state => ({
      start: !state.start,
    }));
  };

  render() {
    const { start } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {start && (
          <GoodList goods={goodsFromServer} />
        )}
        {start === false && (
          <button
            type="button"
            className="btn-main"
            onClick={this.showList}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}
