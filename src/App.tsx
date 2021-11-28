import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { GoodsList } from './components/GoodsList';
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
  goods: string[];
  started: boolean;
  reversed: boolean;
  sortBy: string;
  minLength: number;
};

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    started: false,
    reversed: false,
    sortBy: '',
    minLength: 1,
  };

  start: MouseEventHandler = (e) => {
    const button = e.target;

    (button as HTMLButtonElement).hidden = true;

    this.setState(state => {
      return { started: !state.started };
    });
  };

  reverse: MouseEventHandler = () => {
    this.setState((state) => {
      return { reversed: !state.reversed };
    });
  };

  sortAlphabetically: MouseEventHandler = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  reset: MouseEventHandler = () => {
    this.setState({
      reversed: false,
      sortBy: '',
      minLength: 1,
    });
  };

  sortByLength: MouseEventHandler = () => {
    this.setState({ sortBy: 'length' });
  };

  handleChange: ChangeEventHandler = (e) => {
    const { value } = (e.target as HTMLSelectElement);

    this.setState({ minLength: +value });
  };

  render() {
    const {
      goods,
      started,
      reversed,
      sortBy,
      minLength,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= minLength);

    visibleGoods.sort((firstGood, secondGood) => {
      switch (sortBy) {
        case 'alphabet':
          return firstGood.localeCompare(secondGood);

        case 'length':
          return firstGood.length - secondGood.length;

        default:
          return 0;
      }
    });

    if (reversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="app">
        <h1>Goods</h1>
        {(started) && (
          <>
            <GoodsList goods={visibleGoods} />

            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <form>
              <select
                value={minLength}
                onChange={this.handleChange}
              >
                {goods.map((good, index) => {
                  return (
                    <option
                      key={good}
                      value={index + 1}
                    >
                      {index + 1}
                    </option>
                  );
                })}
              </select>
            </form>
          </>
        )}
        <button
          type="button"
          onClick={this.start}
        >
          Start
        </button>
      </div>
    );
  }
}
