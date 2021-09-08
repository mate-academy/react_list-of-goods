import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { GoodsList } from './component/GoodsList';

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
  startButton: boolean,
  isReversed: boolean,
  sortByAlphabet: boolean,
  sortByLength: boolean,
  showLength: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    startButton: false,
    isReversed: false,
    sortByAlphabet: false,
    sortByLength: false,
    showLength: 1,
  };

  visibleGoods = () => {
    const {
      goods,
      isReversed,
      sortByAlphabet,
      sortByLength,
      showLength,
    } = this.state;

    let visibleGoods = goods.filter(good => good.length > showLength);

    if (isReversed) {
      visibleGoods = [...visibleGoods].reverse();
    }

    if (sortByAlphabet) {
      visibleGoods = [...visibleGoods]
        .sort((a: string, b: string) => (
          a.localeCompare(b)
        ));
    }

    if (sortByLength) {
      visibleGoods = [...visibleGoods]
        .sort((a, b) => a.length - b.length);
    }

    return visibleGoods;
  };

  reverse = () => {
    this.setState((currentState) => ({
      sortByLength: false,
      isReversed: !currentState.isReversed,
    }));
  };

  sortBy = (sortBy: string) => {
    if (sortBy === 'alphabet') {
      this.setState((currentState) => ({
        sortByAlphabet: !currentState.sortByAlphabet,
      }));
    }

    if (sortBy === 'length') {
      this.setState((currentState) => ({
        sortByLength: !currentState.sortByLength,
      }));
    }
  };

  showByLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState(() => ({
      showLength: +value,
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: goodsFromServer,
      startButton: false,
      isReversed: false,
      sortByAlphabet: false,
      sortByLength: false,
      showLength: 1,
    }));
  };

  render() {
    const visibleGoods = this.visibleGoods();

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {!this.state.startButton && (
          <Button
            type="button"
            variant="outline-secondary"
            onClick={() => {
              this.setState({ startButton: true });
            }}
          >
            START
          </Button>
        )}

        {this.state.startButton && (
          <GoodsList
            goods={visibleGoods}
            showByLength={this.showByLength}
            reverse={this.reverse}
            sortBy={this.sortBy}
            isAlphabet={this.state.sortByAlphabet}
            reset={this.reset}
          />
        )}
      </div>
    );
  }
}

export default App;
