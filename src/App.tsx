import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  goods: string[]
  started: boolean
  reversed: boolean
  sortedBy: string
  curentLength: string
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    started: false,
    reversed: false,
    sortedBy: '',
    curentLength: '1',
  };

  start = () => (
    this.setState({ started: true })
  );

  reverse = () => (
    this.setState((state) => ({
      ...state,
      reversed: !state.reversed,
    }))
  );

  sortAlf = () => (
    this.setState({
      sortedBy: 'Alf',
    })
  );

  SortByLength = () => (
    this.setState({
      sortedBy: 'Length',
    })
  );

  reset = () => (
    this.setState({
      goods: [...goodsFromServer],
      reversed: false,
      sortedBy: '',
      curentLength: '1',
    })
  );

  setLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      curentLength: event.currentTarget.value,
    });
  };

  render() {
    const {
      goods,
      started,
      reversed,
      sortedBy,
      curentLength,
    } = this.state;

    let visibleGoods = goods;

    visibleGoods = goods.filter(good => good.length >= +curentLength);

    switch (sortedBy) {
      case 'Alf': visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
        break;
      case 'Length': visibleGoods.sort((g1, g2) => g1.length - g2.length);
        break;

      default:
        break;
    }

    if (reversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {(started)
          ? (
            <>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlf}
              >
                Sort
              </button>
              <button
                type="button"
                onClick={this.SortByLength}
              >
                SortByLength
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <select
                value={curentLength}
                onChange={(event) => {
                  this.setLength(event);
                }}
              >
                {options.map(el => (
                  <option value={`${el}`}>{el}</option>
                ))}
              </select>
              <GoodsList goods={visibleGoods} />
            </>
          )
          : (
            <button
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
