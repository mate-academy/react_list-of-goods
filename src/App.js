import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

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
    goodsVisible: false,
  }

  visibleGoods = () => {
    this.setState({
      goodsVisible: true,
    });
  }

  render() {
    const { goodsVisible } = this.state;

    return (
      <div className="App">
        {goodsVisible
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.visibleGoods}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
