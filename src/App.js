import React from 'react';
import './App.css';
import Goods from './components/Goods/Goods';

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
    isGoodsVisible: false,
  };

  changeGoodsStatus = () => {
    this.setState({
      isGoodsVisible: true,
    });
  };

  render() {
    const { isGoodsVisible } = this.state;

    return (
      <div>
        {!isGoodsVisible && (
        <button
          type="button"
          onClick={this.changeGoodsStatus}
        >
          Start
        </button>
        )}

        {isGoodsVisible
          && (
          <Goods
            goods={goodsFromServer}
          />
          )
        }

      </div>
    );
  }
}

export default App;
