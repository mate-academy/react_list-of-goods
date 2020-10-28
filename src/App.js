import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Content } from './components/Content/Content';

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

const preparedGoods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

class App extends React.Component {
  state = {
    isVisibleGoods: false,
  }

  start = () => {
    this.setState(({ isVisibleGoods }) => ({
      isVisibleGoods: !isVisibleGoods,
    }));
  }

  render() {
    const {
      state: { isVisibleGoods },
      start,
    } = this;

    return (
      <div className="App m-auto">
        {
          !isVisibleGoods && (
            <button
              className="btn btn-warning"
              type="button"
              onClick={start}
            >
              Start
            </button>
          )
        }

        {isVisibleGoods && <Content goods={preparedGoods} />}
      </div>
    );
  }
}

export default App;
