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

type State = {
  listIsVisible: boolean,
  copyOfGoods: string[],
  initialGoods: string[],
  listIsReversed: boolean,
  sortBy: string,
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<{}, State> {
  state = {
    listIsVisible: false,
    // eslint-disable-next-line react/no-unused-state
    copyOfGoods: goodsFromServer,
    listIsReversed: false,
    initialGoods: goodsFromServer,
    sortBy: '',
  };

  showList = () => {
    return this.setState({ listIsVisible: true });
  };

  reverseGoods = () => {
    this.setState(prevstate => (
      {
        copyOfGoods: [...prevstate.initialGoods],
        listIsReversed: !prevstate.listIsReversed,
      }
    ));
  };

  sortAlphabetically = () => {
    this.reset();
    this.setState(prevstate => (
      {
        copyOfGoods: [...prevstate.initialGoods],
        sortBy: 'alphabet',
      }
    ));
  };

  sortByLength = () => {
    this.reset();
    this.setState(prevstate => (
      {
        copyOfGoods: [...prevstate.initialGoods],
        sortBy: 'length',
      }
    ));
  };

  reset = () => {
    this.setState(prevstate => (
      {
        copyOfGoods: [...prevstate.initialGoods],
        sortBy: '',
        listIsReversed: false,
      }
    ));
  };

  render() {
    const {
      listIsReversed, listIsVisible, copyOfGoods, sortBy,
    } = this.state;

    if (sortBy === 'length') {
      copyOfGoods.sort((a, b) => {
        return (a.length - b.length);
      });
    }

    if (sortBy === 'alphabet') {
      copyOfGoods.sort();
    }

    if (listIsReversed) {
      copyOfGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {listIsVisible && (
          <>
            <GoodsList goods={copyOfGoods} />
            <div>
              <button
                type="button"
                className="btn"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>
            </div>

            <div>
              <button
                type="button"
                className="btn"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
            </div>

            <div>
              <button
                type="button"
                className="btn"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <div>
              <button
                type="button"
                className="btn"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </div>
          </>
        )}
        {!this.state.listIsVisible && (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
