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

interface State {
  isVisible: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
  };

  showGoods = () => {
    this.setState(() => ({
      isVisible: true,
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">

        <h1>Goods</h1>

        {isVisible && (
          <GoodsList goods={goodsFromServer} />
        )}

        {!isVisible && (
          <button
            type="button"
            onClick={this.showGoods}
            className="btn btn-secondary"
          >
            show()
          </button>
        )}
      </div>
    );
  }
}

export default App;
