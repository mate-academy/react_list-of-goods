import React from 'react';
import { GoodsList } from './GoodsList';

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

interface State {
  listOfGoods: string[];
  isVisible: boolean;
}

type Props = {};

class App extends React.Component<Props, State> {
  state: State = {
    listOfGoods: goodsFromServer,
    isVisible: false,
  };

  start = () => {
    this.setState({
      isVisible: true,
    });
  };

  render() {
    const { listOfGoods, isVisible } = this.state;

    if (isVisible) {
      return (
        <GoodsList {...listOfGoods} />
      );
    }

    return (
      <div className="App">
        <h1>List of goods</h1>

        <button
          className="button"
          type="button"
          onClick={this.start}
        >
          Start
        </button>
      </div>
    );
  }
}

export default App;
