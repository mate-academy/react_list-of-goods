import React from 'react';
import classNames from 'classnames';

import GoodsList from './components/GoodsList';
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

class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    visibility: false,
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetList = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods, visibility } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={() => this.setState({ visibility: true })}
          className={classNames({
            startButton: visibility,
          })}
        >
          Start
        </button>
        {!visibility || <GoodsList listItems={goods} />}
        <div className={classNames({
          buttons: !visibility,
        })}
        >
          <button type="button" onClick={this.reverseList}>
            Reverse
          </button>
          <button type="button" onClick={this.sortList}>
            Sort alphabetically
          </button>
          <button type="button" onClick={this.resetList}>
            Reset
          </button>
          <button type="button" onClick={this.sortByLength}>
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

export default App;
