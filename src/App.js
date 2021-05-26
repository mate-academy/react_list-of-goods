import React from 'react';

import { GoodsList } from './GoodsList';

import './App.css';

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
    listVisible: false,
  }

  showList = () => {
    this.setState(state => ({
      listVisible: !state.listVisible,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {
          this.state.listVisible
            ? <GoodsList list={goodsFromServer} />
            : (
              <button
                type="button"
                onClick={this.showList}
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
