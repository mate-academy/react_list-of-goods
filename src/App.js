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
    renderStart: true,
  };

  startClick = () => {
    this.setState({
      goods: [...goodsFromServer],
      renderStart: false,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods List</h1>
        {
          (this.state.renderStart)
            ? <button type="button" onClick={this.startClick}>Start</button>
            : <GoodsList goods={this.state.goods} />
        }
      </div>
    );
  }
}

export default App;
