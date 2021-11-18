import React from 'react';
import './App.scss';
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
  isShowed: boolean
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isShowed: false,
  };

  showGoods = () => {
    this.setState({
      isShowed: true,
    });
  };

  revers = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlplabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.length - b.length
      )),
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: goodsFromServer,
      isShowed: true
    }))
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>App</h1>
        {
          this.state.isShowed
            ? (
              <>
                <GoodsList goods={goods} />
                <button type="button" onClick={this.revers}>
                  Reverse
                </button>
                <button type="button" onClick={this.sortAlplabetically}>
                  Sort alphabetically
                </button>
                <button type="button" onClick={this.sortByLength}>
                  Sort by length
                </button>
                <button type="button" onClick={this.reset}>
                  Reset
                </button>
              </>
            )
            : (
              <button type="button" onClick={this.showGoods}>
                Start
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
