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
  isVisibleStart: boolean;
  isVisibleList: boolean,
  goodsArray: string[];
}

export class App extends React.Component<{}, State> {
  state = {
    isVisibleList: false,
    isVisibleStart: true,
    goodsArray: [...goodsFromServer],
  };

  getStart = () => {
    this.setState((currentState) => ({
      isVisibleStart: !currentState.isVisibleStart,
      isVisibleList: !currentState.isVisibleList,
    }));
  };

  render() {
    const { goodsArray, isVisibleStart } = this.state;

    return (
      <div className="App">
        {isVisibleStart && (
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
        {this.state.isVisibleList && <GoodsList goods={goodsArray} />}
      </div>
    );
  }
}
