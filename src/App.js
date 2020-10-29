import React from 'react';
import GoodList from './components/GoodList/GoodList';
import Button from './components/Button/Button';

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

const goodsPrepared = goodsFromServer.map((good, index) => ({
  id: index,
  good,
}));

class App extends React.PureComponent {
  state = {
    isListVisible: false,
    isStartVisible: true,
    goods: goodsPrepared,
  }

  start = () => {
    this.setState({
      isListVisible: true,
      isStartVisible: false,
    });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),

    }));
  }

  sort = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.good.localeCompare(b.good)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.good.length - b.good.length),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: goodsPrepared,
    }));
  }

  render() {
    const { isListVisible, isStartVisible, goods } = this.state;

    return (
      <div className="app">
        {isStartVisible
          ? (
            <button
              className="app__button"
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )
          : null
        }

        {isListVisible
          ? (
            <div className="app__content">
              <div className="app__buttons">
                <Button text="Reverse" onclick={this.reverse} />
                <Button text="Sort" onclick={this.sort} />
                <Button text="Sort by length" onclick={this.sortByLength} />
                <Button text="Reset" onclick={this.reset} />
              </div>

              <GoodList goods={goods} />
            </div>
          )
          : null
        }
      </div>
    );
  }
}

export default App;
