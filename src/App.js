import React from 'react';
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
    goods: [],
    isGoodsLoaded: true,
  };

  startClick = () => {
    this.setState({
      goods: [...goodsFromServer],
      isGoodsLoaded: false,
    });
  }

  render() {
    const { isGoodsLoaded, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods List</h1>
        {
          (isGoodsLoaded)
            ? <button type="button" onClick={this.startClick}>Start</button>
            : <GoodsList goods={goods} />
        }
      </div>
    );
  }
}

export default App;
