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

class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    isShowed: false,
  };

  showGoods = () => {
    this.setState({
      isShowed: true,
    });
  };

  revers = () => {
    this.setState({
      goods: [...goodsFromServer].reverse(),
    });
  };

  sortAlplabetically = () => {
    this.setState({
      goods: [...goodsFromServer].sort((a, b) => a.localeCompare(b)),
    });
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState({
      goods: [...goodsFromServer].sort((a, b) => (
        a.length - b.length
      )),
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>App</h1>
        {
          this.state.isShowed
            ? <>
                <GoodsList goods={goods} />
                  <button type="button" onClick={this.revers}>
                    Reverse
                  </button>
                  <button type="button" onClick={this.sortAlplabetically}>
                    Sort alphabetically
                  </button>
                  <button type="button" onClick={this.reset}>
                    Reset
                  </button>
                  <button type="button" onClick={this.sortByLength}>
                    Sort by length
                  </button>
                </>
            : <button type="button" onClick={this.showGoods}>
                Start
              </button>
        }
      </div>
    );
  }
}

export default App;
