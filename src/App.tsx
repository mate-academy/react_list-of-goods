import React from 'react';
import { Button } from 'react-bootstrap';
import './App.scss';

import { GoodsList } from './components/GoodsList';

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
  isReversed: boolean,
  Goods: string[],
  listHidden: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    Goods: goodsFromServer,
    listHidden: true,
  };

  startButton() {
    this.setState(prevState => ({
      listHidden: !(prevState.listHidden),
    }));
  }

  reverseGoods() {
    this.setState(prevState => ({
      isReversed: !(prevState.isReversed),
      Goods: [...prevState.Goods].reverse(),
    }));
  }

  sortByAlphabet() {
    this.setState(prevState => ({
      Goods: [...prevState.Goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByNameLength() {
    this.setState(prevState => ({
      Goods: [...prevState.Goods].sort((a, b) => a.length - b.length),
    }));
  }

  resetSort() {
    this.setState({ Goods: goodsFromServer });
  }

  render() {
    const { Goods } = this.state;

    return (
      <div className="App">
        <Button
          type="button"
          hidden={!this.state.listHidden}
          className="start-button btn btn-success"
          onClick={() => {
            this.startButton();
          }}
        >
          Start
        </Button>
        <div hidden={this.state.listHidden}>
          <Button
            type="button"
            onClick={() => (
              this.reverseGoods()
            )}
          >
            Reverse
          </Button>
          <Button
            type="button"
            onClick={() => (
              this.sortByAlphabet()
            )}
          >
            Sort By Alphabet
          </Button>
          <Button
            type="button"
            onClick={() => (
              this.sortByNameLength()
            )}
          >
            Sort By Name Length
          </Button>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => (
              this.resetSort()
            )}
          >
            Reset
          </Button>
          <GoodsList goods={Goods} />
        </div>
      </div>
    );
  }
}
