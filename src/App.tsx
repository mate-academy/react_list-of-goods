import React from 'react';
import './App.scss';

import { GoodList } from './components/Goodlist/GoodList';

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

type Sorter = 'alphabetically' | 'length';

type StateTypes = {
  goods: string[],
  getStart: boolean,
  isReversed: boolean,
  sorter: Sorter | null,
  currentValue: number,
};

class App extends React.Component<{}, StateTypes> {
  state: StateTypes = {
    goods: goodsFromServer,
    getStart: false,
    isReversed: false,
    sorter: null,
    currentValue: 1,
  };

  letStart = () => this.setState({ getStart: true });

  reverse = () => this.setState((state) => ({ isReversed: !state.isReversed }));

  getSort = (condition: Sorter) => {
    this.setState({ sorter: condition });
  };

  reset = () => this.setState({ isReversed: false, sorter: null, currentValue: 1 });

  render() {
    const {
      goods, getStart, isReversed, sorter, currentValue,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= currentValue);

    if (sorter) {
      visibleGoods.sort((good1, good2) => {
        switch (sorter) {
          case 'alphabetically':
            return good1.localeCompare(good2);

          case 'length':
            return good1.length - good2.length;

          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {!getStart && (
          <button
            type="button"
            className="App__button"
            onClick={this.letStart}
          >
            Start
          </button>
        )}

        {getStart && (
          <div>
            <button
              type="button"
              className="App__button"
              onClick={this.reverse}
            >
              reverse
            </button>
            <button
              type="button"
              name="alphabetically"
              className="App__button"
              onClick={(elem) => this.getSort(elem.currentTarget.name as Sorter)}
            >
              sort by alphabetically
            </button>
            <button
              type="button"
              name="length"
              className="App__button"
              onClick={(elem) => this.getSort(elem.currentTarget.name as Sorter)}
            >
              sort by length
            </button>
            <button
              type="button"
              className="App__button"
              onClick={this.reset}
            >
              reset
            </button>
            <GoodList goods={visibleGoods} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
