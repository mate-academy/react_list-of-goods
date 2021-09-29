import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

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
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
  goodsList: string[],
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
    isReversed: false,
    sortBy: '',
    goodsList: [...goodsFromServer],
  };

  showGoods = () => {
    this.setState({ isVisible: false });
  };

  reverse = () => {
    this.setState((currentState) => ({
      isReversed: !currentState.isReversed,
    }));
  };

  getVisibleGoods = () => {
    const {
      isReversed,
      goodsList,
      sortBy,
    } = this.state;

    let visibleGoodsList = goodsList;

    if (sortBy) {
      visibleGoodsList = [...visibleGoodsList]
        .sort((goodFirst, goodSecond) => {
          switch (sortBy) {
            case 'alphabet':
              return goodFirst.localeCompare(goodSecond);
            case 'length':
              return goodFirst.length - goodSecond.length;

            default:
              return 0;
          }
        });
    }

    if (isReversed) {
      visibleGoodsList = [...visibleGoodsList].reverse();
    }

    return visibleGoodsList;
  };

  sortByAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      goodsList: [...goodsFromServer],
    });
  };

  render() {
    const { isVisible } = this.state;

    const visibleGoods = this.getVisibleGoods();

    return (
      <div className="wrapper">
        <div className="App">
          {(isVisible)
            ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.showGoods}
              >
                Start
              </button>
            )
            : (
              <div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.reverse}
                  >
                    Reverse
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.sortByAlphabetically}
                  >
                    Sort alphabetically
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </button>
                </div>
                {visibleGoods.length !== 0 && (
                  <GoodsList goods={visibleGoods} />
                )}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;
