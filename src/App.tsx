/* eslint-disable no-console */
import React from 'react';
import './App.css';
import { ListOfGoods } from './Components/ListOfGoods';

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
  listActivated: boolean,
  isReversed: boolean,
  sortBy: string,
  selectSize: number | undefined,
  itemsLength: null | number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    listActivated: false,
    isReversed: false,
    sortBy: 'reset',
    selectSize: undefined,
    itemsLength: null,
  };

  activateList = () => {
    this.setState((state) => ({
      listActivated: !(state.listActivated),
    }));
  };

  reverseList = () => {
    this.setState((state) => ({
      isReversed: !(state.isReversed),
    }));
  };

  sortByLetter = () => {
    this.setState({ sortBy: 'letter' });
  };

  itemLength = () => {
    this.setState({ sortBy: 'itemLength' });
  };

  resetList = () => {
    this.setState({
      sortBy: 'reset',
      itemsLength: null,
      isReversed: false,
    });
  };

  selectDesiredItemLength = (event: {
    target: { value: any }
  }) => {
    this.setState({ itemsLength: event.target.value });
  };

  createSelect = (selectSize: number | undefined = 10) => {
    const options = Array(selectSize);

    for (let i = 1; i <= selectSize; i += 1) {
      options.push(
        <option
          value={i}
          key={i}
        >
          {i}
        </option>,
      );
    }

    const select = (
      <form action="get">
        <select
          name="selectSize"
          id="select"
          onChange={this.selectDesiredItemLength}
          value={this.state.selectSize}
        >
          {options}
        </select>
      </form>
    );

    return select;
  };

  render() {
    const {
      listActivated,
      goods,
      isReversed,
      sortBy,
      selectSize,
      itemsLength,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!listActivated
        && (
          <button
            type="button"
            onClick={this.activateList}
          >
            Start
          </button>
        )}
        {listActivated
        && (
          <>
            <button
              type="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortByLetter}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.itemLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={this.resetList}
            >
              Reset
            </button>
            {this.createSelect(selectSize)}
            <ListOfGoods
              goods={goods}
              isReversed={isReversed}
              sortBy={sortBy}
              itemsLength={itemsLength}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
