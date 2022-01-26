import React from 'react';
import './App.css';
import { GoodList } from './components/GoodsList';

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
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: true,
  };

  showGoodsList = () => {
    this.setState({
      isVisible: false,
    });
  };

  reverseList = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphavet = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  resetList = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render(): React.ReactNode {
    const { goods, isVisible } = this.state;

    return (
      <div className="App">
        {isVisible ? (
          <button type="button" onClick={this.showGoodsList} className="btn btn-success">
            Start
          </button>
        ) : (
          <>
            <button type="button" onClick={this.reverseList} className="btn btn-primary">
              Reverse
            </button>
            <button type="button" onClick={this.sortAlphavet} className="btn btn-primary">
              Sort alphabetically
            </button>
            <button type="button" onClick={this.resetList} className="btn btn-primary">
              Reset
            </button>
            <button type="button" onClick={this.sortByLength} className="btn btn-primary">
              Sort by length
            </button>
            <GoodList goodsFromServer={goods} />
          </>
        )}
      </div>
    );
  }
}

export default App;
