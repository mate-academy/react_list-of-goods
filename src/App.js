import React from 'react';

import { Page } from './components/Page';

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

const preparedGoods = goodsFromServer.map(good => ({
  name: good,
  id: good,
}));

class App extends React.PureComponent {
  state = {
    isListVisible: false,
  }

  showList = () => {
    this.setState(state => ({
      isListVisible: !state.isListVisible,
    }));
  }

  render() {
    const { isListVisible } = this.state;

    return (
      <div className="App card w-50 font-weight-bolder">
        <div>
          {isListVisible ? (
            <Page goods={preparedGoods} />
          ) : (
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={this.showList}
            >
              Start
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
