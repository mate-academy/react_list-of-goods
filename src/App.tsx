import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

export const goodsFromServer: string[] = [
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

type State = {
  initialGoods: string[];
  hideGoods: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    initialGoods: goodsFromServer,
    hideGoods: true,
  };

  showGoods = () => {
    this.setState(state => ({
      hideGoods: !state.hideGoods,
    }));
  };

  render() {
    const { initialGoods, hideGoods } = this.state;

    return (
      <div className="App container is-fluid">
        <h1 className="title is-1">Goods</h1>
        {
          hideGoods
            ? (
              <>
                <button
                  className="button is-success"
                  type="button"
                  onClick={this.showGoods}
                >
                  Start
                </button>
              </>
            )
            : (<GoodsList goods={initialGoods} />)
        }
      </div>
    );
  }
}

export default App;
