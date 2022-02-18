import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

interface State {
  goods: string[],
  isGoodsVisible: boolean,
  display: string,
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
    display: 'block',
  };

  getHide = () => {
    this.setState({
      isGoodsVisible: true,
      display: 'none',
    });
  };

  render() {
    const { goods, isGoodsVisible, display } = this.state;

    return (
      <div>
        <h1>Goods</h1>
        <button
          type="submit"
          onClick={this.getHide}
          style={{ display: `${display}` }}
        >
          Show
        </button>
        {isGoodsVisible && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
