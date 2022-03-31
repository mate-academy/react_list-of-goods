import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import GoodList from './components/GoodsList';
import './App.scss';

interface Good {
  name: string;
  id: string;
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  name: good,
  id: uuidv4(),
}));

type State = {
  goods: Good[],
  isReverse: boolean,
  sortBy: string;
  isVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isReverse: false,
    sortBy: 'none',
    isVisible: false,
  };

  changeVisibility = () => {
    this.setState({ isVisible: true });
  };

  reverseList = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  resetByDefault = () => {
    this.setState({
      isReverse: false,
      sortBy: 'none',
    });
  };

  sortByAbc = () => {
    this.setState({
      sortBy: 'abc',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'len',
    });
  };

  createListOfGoods = () => {
    const { goods, isReverse, sortBy } = this.state;
    const preparedGoods = [...goods].sort((currGood, nextGood) => {
      switch (sortBy) {
        case 'abc':
          return currGood.name.localeCompare(nextGood.name);

        case 'len':
          return currGood.name.length - nextGood.name.length;

        default:
          return 0;
      }
    });

    if (isReverse) {
      preparedGoods.reverse();
    }

    return preparedGoods;
  };

  render() {
    const { isVisible } = this.state;
    const createdList = this.createListOfGoods();

    return (
      <div className="app">
        {!isVisible
          ? (
            <div className="app__button-wrapper">
              <button
                type="button"
                className="app__button app__button--start"
                onClick={this.changeVisibility}
              >
                Start
              </button>
            </div>
          )
          : (
            <div className="app__wrapper">
              <h1 className="app__title">
                Goods
              </h1>

              <div className="app__frame">
                <div className="app__action">
                  <button
                    type="button"
                    className="app__button"
                    onClick={this.sortByAbc}
                  >
                    Sort by alphabet
                  </button>

                  <button
                    type="button"
                    className="app__button"
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </button>
                </div>

                <GoodList goods={createdList} />

                <div className="app__action">
                  <button
                    type="button"
                    className="app__button"
                    onClick={this.reverseList}
                  >
                    Reverse
                  </button>

                  <button
                    type="button"
                    className="app__button"
                    onClick={this.resetByDefault}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}
