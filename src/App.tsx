import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

interface State {
  goods: string[],
  isGoodsVisible: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    goods: [
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
    ],
    isGoodsVisible: false,
  };

  getHide = () => {
    this.setState({
      isGoodsVisible: true,
    });
  };

  render() {
    const { goods, isGoodsVisible } = this.state;

    return (
      <div>
        <h1>Goods</h1>
        {!isGoodsVisible
          && (
            <button
              type="submit"
              onClick={this.getHide}
            >
              Show
            </button>
          )}
        {isGoodsVisible && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
