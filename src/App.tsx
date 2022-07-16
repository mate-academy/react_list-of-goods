import React from 'react';
import { GoodList } from './component/GoodList/index';
import './style/block/app/app.scss';

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
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goods: [],
  };

  showGoods = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  reverseGoods = () => {
    this.setState((state => ({
      goods: [...state.goods].reverse(),
    })));
  };

  sortAbcGoods = () => {
    this.setState((state => ({
      goods: [...state.goods].sort((a, b) => (a.localeCompare(b))),
    })));
  };

  sortLengthGoods = () => {
    this.setState((state => ({
      goods: [...state.goods].sort((a, b) => {
        return a.length - b.length;
      }),
    })));
  };

  resetGoods = () => {
    const defaulSelect = document.getElementById('defaultValue');

    this.setState({ goods: goodsFromServer });
    if (defaulSelect) {
      defaulSelect.setAttribute('selected', '');
      defaulSelect.removeAttribute('selected');
    }
  };

  lengthGoods = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      goods: [...goodsFromServer]
        .filter(good => good.length >= +event.currentTarget.value),
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">GOODS</h1>
        <div className="app__show">
          {!goods.length
            ? (
              <button
                type="button"
                className="button-start button "
                onClick={() => this.showGoods()}
              >
                Start
              </button>
            )
            : (
              <>
                <GoodList goods={goods} />
                <div className="buttons">
                  <button
                    type="button"
                    className="button-reverse button"
                    onClick={() => this.reverseGoods()}
                  >
                    Reverse
                  </button>

                  <button
                    type="button"
                    className="button-sort-abc button"
                    onClick={() => this.sortAbcGoods()}
                  >
                    Sort alphabetically
                  </button>

                  <button
                    type="button"
                    className="button-sort-length button"
                    onClick={() => this.sortLengthGoods()}
                  >
                    Sort by length
                  </button>

                  <button
                    type="button"
                    className="button-reset button"
                    onClick={() => this.resetGoods()}
                  >
                    Reset
                  </button>
                </div>
                <div className="select">
                  <select
                    name="goods"
                    onChange={(event) => this.lengthGoods(event)}
                  >
                    <option value="1" id="defaultValue">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </>
            )}
        </div>
      </div>
    );
  }
}
