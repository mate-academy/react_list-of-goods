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

const goodsPrepared = goodsFromServer.map((item, index) => ({
  id: index,
  good: item,
}));

class App extends React.PureComponent {
  state = {
    isListVisible: false,
    isStartVisible: true,
    goods: goodsPrepared,
  }

  startHandle = () => {
    this.setState({
      isListVisible: true,
      isStartVisible: false,
    });
  }

  reverseHandle = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortHandle = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.good.localeCompare(b.good)),
    }));
  }

  sortLengthHandle = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.good.length - b.good.length),
    }));
  }

  resetHandle = () => {
    this.setState(state => ({
      goods: goodsPrepared,
    }));
  }

  render() {
    const { isListVisible, isStartVisible, goods } = this.state;

    return (
      <div className="app">
        {isStartVisible && <Button text="Start" onclick={this.startHandle} />}

        {isListVisible
          && (
            <div className="app__content">
              <div className="app__buttons">
                <Button text="Reverse" onclick={this.reverseHandle} />
                <Button text="Sort" onclick={this.sortHandle} />
                <Button text="Sort by length" onclick={this.sortLengthHandle} />
                <Button text="Reset" onclick={this.resetHandle} />
              </div>

              <GoodList goods={goods} />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
