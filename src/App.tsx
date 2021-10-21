import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

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
  goodsList: string[],
  isListVisible: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    goodsList: goodsFromServer,
    isListVisible: false,
  };

  start = () => {
    this.setState({
      isListVisible: true,
    });
  };

  render() {
    const { isListVisible, goodsList } = this.state;

    if (isListVisible) {
      return (
        <GoodsList {...goodsList} />
      );
    }

    return (
      <div>
        <h1>Goods</h1>
        <button
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
