import React from 'react';
import './App.css';

const goodsFromServer = [
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

export class App extends React.Component {
  state = {
    goods: goodsFromServer,
    goodsListVisible: false,
    sortBy: '',
    doReset: false,
    doReverse: false,
  }

  changeListVisibility = () => {
    this.setState(prevState => ({
      ...prevState,
      goodsListVisible: true,
    }));
  }

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
      doReset: false,
      doReverse: false,
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      doReset: false,
      doReverse: false,
    });
  }

  reset = () => {
    this.setState({
      doReset: false,
      doReverse: false,
      sortBy: '',
    });
  }

  reverse = () => {
    this.setState(prevState => ({
      doReverse: !prevState.doReverse,
    }));
  }

  render() {
    const { goodsListVisible, sortBy, doReverse, doReset } = this.state;

    let visibleGoods = [...goodsFromServer];

    if (sortBy !== '') {
      visibleGoods.sort((good1, good2) => {
        switch (sortBy) {
          case 'length':
            return good1.length - good2.length;

          case 'alphabet':
            return good1.localeCompare(good2);

          default:
            return 0;
        }
      });
    }

    if (doReset) {
      visibleGoods = goodsFromServer;
    }

    if (doReverse) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>{`Goods: ${goodsFromServer.length}`}</h1>

        {!goodsListVisible
          && (
          <button
            type="button"
            onClick={this.changeListVisibility}
          >
            Start
          </button>
          )}

        {goodsListVisible
          && (
            <>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort by alphabet
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <br />
              <br />

              <ul>
                {visibleGoods.map(good => (
                  <li key={good}>{good}</li>
                ))}
              </ul>
            </>
          )}
      </div>
    );
  }
}
