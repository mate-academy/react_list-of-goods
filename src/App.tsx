import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings 🥟',
  'Carrot 🥕',
  'Eggs 🥚',
  'Ice cream 🍦',
  'Apple 🍏',
  'Bread 🍞',
  'Fish 🐟',
  'Honey 🍯',
  'Cake 🍰',
  'Garlic 🧄',
];

interface State {
  goods: string[]
  isVisible: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
  };

  showGoods = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAplhabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, secondGood) => firstGood.localeCompare(secondGood)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, secondGood) => firstGood.length - secondGood.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {this.state.isVisible
          ? (
            <section className="Goods">
              <ul className="Goods__list">
                {this.state.goods.map(good => (
                  <li key="good" className="Goods__item">
                    {good}
                  </li>
                ))}
              </ul>

              <div className="Goods__buttonList">
                <button
                  className="Goods__button Goods__button--reverse"
                  type="button"
                  onClick={this.reverseGoods}
                >
                  Reverse
                </button>

                <button
                  className="Goods__button Goods__button--sortname"
                  type="button"
                  onClick={this.sortByAplhabet}
                >
                  Sort by aplhabet
                </button>

                <button
                  className="Goods__button Goods__button--sortlength"
                  type="button"
                  onClick={this.sortByLength}
                >
                  Sort by words length
                </button>
                <button
                  className="Goods__button Goods__button--reset"
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            </section>
          )
          : (
            <div className="Goods__buttonList">
              <button
                className="Goods__button Goods__button--show"
                type="button"
                onClick={this.showGoods}
              >
                Show goods
              </button>
            </div>
          )}
      </div>
    );
  }
}
