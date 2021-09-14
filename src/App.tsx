import React from 'react';

import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';

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
  isStartButton: boolean;
  listOfGoods: string[];
  sortBy: string;
  isReversed: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    isStartButton: false,
    listOfGoods: [...goodsFromServer],
    sortBy: '',
    isReversed: false,
  };

  start = () => {
    this.setState(({ isStartButton }) => ({
      isStartButton: !isStartButton,
    }));
  };

  sortByOption = (option: string) => {
    this.setState({ sortBy: option });
  };

  reverse = () => {
    this.setState((prevState) => ({
      isReversed: !prevState.isReversed,
    }));
  };

  getSortedGoods = () => {
    const { listOfGoods, sortBy, isReversed } = this.state;

    let sortedGoods = [...listOfGoods];

    if (sortBy) {
      sortedGoods = [...sortedGoods].sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      sortedGoods = [...sortedGoods].reverse();
    }

    return sortedGoods;
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  render() {
    const sortedGoods = this.getSortedGoods();

    return (
      <div className="App">
        {this.state.isStartButton ? (
          <div className="">
            <h1>Goods-list:</h1>
            <ListOfGoods
              reverseGoods={this.reverse}
              sortByOption={this.sortByOption}
              reset={this.reset}
              goods={sortedGoods}
            />
          </div>
        ) : (
          <div className="container">
            <div className="row h-100">
              <div className="col-sm-12 my-auto">
                <button
                  type="button"
                  className="btn btn-info text-center"
                  onClick={this.start}
                >
                  <span>Start</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
