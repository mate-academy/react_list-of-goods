import React from 'react';
import { GoodsList } from './components/GoodsList';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    isListVisible: false,
  };

  showGoods = () => {
    this.setState({
      isListVisible: true,
    });
  };

  render() {
    const { isListVisible } = this.state;

    return (
      <div>
        {!isListVisible && (
          <button
            type="button"
            onClick={this.showGoods}
          >
            Start
          </button>
        )}

        {isListVisible && (
          <GoodsList goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
