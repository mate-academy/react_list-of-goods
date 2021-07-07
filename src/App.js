import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
    isButtonVisible: true,
  }

  showGoodsFromServer = () => {
    this.setState({
      isButtonVisible: false,
    });
  }

  render() {
    const { isButtonVisible } = this.state;

    return (
      <div>
        {isButtonVisible
          ? (
            <button
              type="button"
              onClick={this.showGoodsFromServer}
            >
              Start
            </button>
          )
          : <GoodsList goodsList={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
