import React, { ChangeEvent } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
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

type State = {
  visibleGoods: string[],
  isStartVisible: boolean,
  lengths: string,
};

class App extends React.Component<{}, State> {
  state = {
    visibleGoods: goodsFromServer,
    isStartVisible: true,
    lengths: '1',
  };

  hideStart = () => {
    this.setState({
      isStartVisible: false,
    });
  };

  reverseOrder = () => (
    this.setState((state) => ({
      visibleGoods: [...state.visibleGoods].reverse(),
    }))
  );

  sortAlphabetically = () => (
    this.setState((state) => ({
      visibleGoods: [...state.visibleGoods]
        .sort((good1, good2) => good1.localeCompare(good2)),
    }))
  );

  sortByLength = () => {
    this.setState((state) => ({
      visibleGoods: [...state.visibleGoods]
        .sort((good1, good2) => good1.length - good2.length),
    }));
  };

  resetDefaults = () => {
    this.setState({
      visibleGoods: goodsFromServer,
      lengths: '1',
    });
  };

  handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      lengths: event.target.value,
    });
  };

  render() {
    const { isStartVisible, visibleGoods, lengths } = this.state;

    const filteredGoods = visibleGoods.filter(good => good.length >= +lengths);

    return (
      <div className="App container mt-5">
        <h1 className="title">Goods</h1>
        {isStartVisible
          ? (
            <button
              type="button"
              onClick={this.hideStart}
              className="button m-2 is-success"
            >
              Start
            </button>
          )
          : (
            <div>
              <button
                type="button"
                onClick={this.reverseOrder}
                className="button mr-2 mt-2"
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
                className="button m-2"

              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
                className="button m-2"

              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.resetDefaults}
                className="button m-2 ml-6 is-danger"

              >
                Reset
              </button>
              <select
                className="select m-3"
                name="lengths"
                value={lengths}
                onChange={this.handleChange}

              >
                <option value="1">1</option>
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

              <GoodsList goods={filteredGoods} />
            </div>
          )}
      </div>
    );
  }
}

export default App;
