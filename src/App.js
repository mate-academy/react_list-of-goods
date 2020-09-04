import React from 'react';
import classNames from 'classnames';
import { GoodList } from './GoodList';
import './App.scss';

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

function removeSpaces(value) {
  return value.split(' ').join('');
}

class App extends React.Component {
  state = {
    goods: [],
    isVisible: false,
  }

  showList = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
      isVisible: true,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  resetList = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => removeSpaces(a).length - removeSpaces(b).length),
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>

        <div className="App__buttons buttons">
          <button
            type="button"
            className={classNames({
              buttons__button: true,
              'buttons__button--green': true,
              invisible: isVisible,
              visible: !isVisible,
            })}
            onClick={this.showList}
          >
            Start
          </button>

          <button
            type="button"
            className={classNames({
              buttons__button: true,
              'buttons__button--green': true,
              invisible: !isVisible,
              visible: isVisible,
            })}
            onClick={this.reverseList}
          >
            Reverse
          </button>

          <button
            type="button"
            className={classNames({
              buttons__button: true,
              'buttons__button--yellow': true,
              invisible: !isVisible,
              visible: isVisible,
            })}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames({
              buttons__button: true,
              'buttons__button--red': true,
              invisible: !isVisible,
              visible: isVisible,
            })}
            onClick={this.resetList}
          >
            Reset
          </button>

          <button
            type="button"
            className={classNames({
              buttons__button: true,
              'buttons__button--magenta': true,
              invisible: !isVisible,
              visible: isVisible,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>

        <GoodList
          goods={this.state.goods}
          visibility={isVisible}
        />
      </div>
    );
  }
}

export default App;
