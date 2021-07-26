import React from 'react';
import Goods from './Goods';

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
    goods: goodsFromServer,
    showList: false,
  };

  start = () => {
    this.setState({
      showList: true,
    });
  };

  render() {
    const { showList, goods } = this.state;

    if (showList) {
      return (
        <div className="App">
          <Goods goods={goods} />
        </div>
      );
    }

    return (
      <div>
        <h1>Goods</h1>
        <button onClick={this.start} type="button">
          Start
        </button>
      </div>
    );
  }
}

export default App;
