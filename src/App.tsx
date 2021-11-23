import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

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

interface State {
  goods: string[],
  isShowList: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isShowList: false,
  };

  showList = () => {
    this.setState({ isShowList: true });
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortListByAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  sortListByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((prevGood, nextGood) => prevGood.length - nextGood.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    const { goods, isShowList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {isShowList
          ? (
            <GoodsList goods={goods} />
          )
          : (
            <button
              onClick={this.showList}
              type="button"
            >
              Start
            </button>
          )}

        {isShowList
          && (
            <div>
              <button
                onClick={this.reverseList}
                type="button"
              >
                Reverse list
              </button>

              <button
                onClick={this.sortListByAlphabetically}
                type="button"
              >
                Sort alphabetically
              </button>

              <button
                onClick={this.sortListByLength}
                type="button"
              >
                Sort by length
              </button>

              <button
                onClick={this.reset}
                type="button"
              >
                Reset
              </button>
            </div>
          )}
      </div>
    );
  }
}

export default App;
