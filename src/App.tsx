import React from 'react';
import { ListOfGoods } from './components/ListOfGoods';
import './App.scss';

const goodsFromServer: string[] = [
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

interface State {
  isShow: boolean,
  goods: string[],
}

class App extends React.PureComponent<{}, State> {
  state = {
    isShow: false,
    goods: goodsFromServer,
  };

  showGoodsList = () => {
    this.setState((state) => ({
      ...state,
      isShow: true,
    }));
  };

  reverse = () => {
    this.setState(state => {
      const newGoods = [...state.goods];

      newGoods.reverse();

      return { goods: newGoods };
    });
  };

  sortByName = () => {
    this.setState(state => {
      const newGoods = [...state.goods];

      newGoods.sort((a, b) => a.localeCompare(b));

      return { goods: newGoods };
    });
  };

  sortByLength = () => {
    this.setState(state => {
      const newGoods = [...state.goods];

      newGoods.sort((a, b) => a.length - b.length);

      return { goods: newGoods };
    });
  };

  reset = () => {
    this.setState(() => {
      return { goods: goodsFromServer };
    });
  };

  render() {
    const { isShow, goods } = this.state;

    return (
      <div className="App">
        <button
          className={`button ${isShow ? 'disabled' : ''}`}
          type="button"
          onClick={this.showGoodsList}
        >
          Start
        </button>

        {isShow && (
          <>
            <button
              className="button"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              className="button"
              type="button"
              onClick={this.sortByName}
            >
              Sort by Alphabetical
            </button>

            <button
              className="button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              className="button"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <ListOfGoods goods={goods} />
          </>
        )}
      </div>
    );
  }
}

export default App;
