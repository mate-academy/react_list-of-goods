import classNames from 'classnames';
import React from 'react';
import './App.css';
// import Page from './Page';

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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isHidden: true,
    isReversed: false,
    isSorted: false,
    isSortedByLength: false,
  }

  buttonSatus = () => {
    this.setState({
      isHidden: false,
    });
  }

  reverseMethod = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortMethod = () => {
    this.setState(state => ({
      isSorted: !state.isSorted,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      isSortedByLength: !state.isSortedByLength,
    }));
  }

  reset = () => {
    this.setState(state => ({
      isReversed: false,
      isSorted: '',
      isSortedByLength: '',
    }));
  }

  render() {
    const {
      goods,
      isHidden,
      isReversed,
      isSorted,
      isSortedByLength,
    } = this.state;

    const copyOfGoods = [...goods];

    if (isSorted) {
      copyOfGoods.sort();
    }

    if (isSortedByLength) {
      copyOfGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      copyOfGoods.reverse();
    }

    return (
      <div className="App">
        {isHidden && (
          <button
            type="button"
            onClick={this.buttonSatus}
          >
            Start
          </button>
        )}

        {!isHidden && (
          <>
            <ul className="list">
              {copyOfGoods.map(el => (
                <li key={el}>
                  {el}
                </li>
              ))}
            </ul>

            <div className="buttons">
              <button
                type="button"
                className={classNames(isReversed ? 'active' : '')}
                onClick={this.reverseMethod}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortMethod}
                className={classNames(isSorted ? 'active' : '')}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
                className={classNames(isSortedByLength ? 'active' : '')}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </>
        )}

      </div>
    );
  }
}

export default App;
