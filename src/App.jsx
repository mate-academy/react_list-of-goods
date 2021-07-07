import React from 'react';
import './App.scss';

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
    isVisible: false,
  }

  showList = () => {
    this.setState({ isVisible: true });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>

        {!this.state.isVisible ? (
          <button type="button" className="button" onClick={this.showList}>
            Start
          </button>
        ) : (
          <GoodsList goods={goodsFromServer} />
        )}

      </div>
    );
  }
}

export default App;
