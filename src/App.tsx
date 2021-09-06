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
  showContent: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    showContent: false,
  };

  showGoodsList = () => {
    this.setState({
      showContent: true,
    });
  };

  render() {
    const { showContent } = this.state;
    const { showGoodsList } = this;

    return (
      <div className="App">
        <h1 className="h1 text-center">Goods</h1>
        {!showContent
          ? (
            <div className="d-grid gap-2">
              <button
                className="btn btn-success"
                type="button"
                onClick={showGoodsList}
              >
                Start
              </button>
            </div>
          )
          : <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}
