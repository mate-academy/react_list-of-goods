import React from 'react';
import { GoodsList } from './Components/GoodsList';

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

interface State {
  isVisible: boolean,
  goodsArray: string[];
}

export class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    goodsArray: [...goodsFromServer],
  };

  getStart = () => {
    this.setState((currentState) => ({
      isVisible: !currentState.isVisible,
    }));
  };

  render() {
    const { goodsArray, isVisible } = this.state;

    return (
      <div className="App">
        {!isVisible && (
          <div className="start">
            <h1>List of goods</h1>
            <button
              className="App__button"
              type="button"
              onClick={this.getStart}
            >
              Start
            </button>
          </div>
        )}
        {this.state.isVisible && <GoodsList goods={goodsArray} />}
      </div>
    );
  }
}
