import React from 'react';
import './App.css';

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

type State = {
  goods: string[],
  isVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
  };

  showList = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  sortReverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sort = (by: string) => {
    const newGoods = [...this.state.goods];

    newGoods.sort((goodA, goodB) => {
      switch (by) {
        case 'alph':
          return goodA.localeCompare(goodB);

        case 'len':
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });

    return (
      this.setState(state => ({
        ...state,
        goods: newGoods,
      }))
    );
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="app">
        <h1>List of Goods</h1>
        <button
          type="button"
          className={isVisible ? 'visible' : ''}
          onClick={this.showList}
        >
          Start
        </button>
        {
          isVisible && (
            <>
              <button
                type="button"
                onClick={this.sortReverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={() => this.sort('alph')}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={() => this.sort('len')}
              >
                Sort by Length
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <ul>
                {goods.map(good => (
                  <li
                    key={good}
                    className="list"
                  >
                    {good}
                  </li>
                ))}
              </ul>
            </>
          )
        }
      </div>
    );
  }
}
