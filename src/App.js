import React, { PureComponent } from 'react';
import './App.scss';

import { Content } from './components/Content';

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

const preparedGoods = goodsFromServer.map((good, id) => ({
  name: good,
  id,
}));

class App extends PureComponent {
  state = {
    isListVisible: false,
  }

  showList = () => {
    this.setState({
      isListVisible: true,
    });
  };

  render() {
    const { isListVisible } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">Goods</h1>

        {!isListVisible && (
          <button
            type="button"
            className="app__button button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {isListVisible && (
          <Content goods={preparedGoods} />
        )}
      </div>
    );
  }
}

export default App;
