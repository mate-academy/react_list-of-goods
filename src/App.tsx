import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { GoodsList } from './GoodsList';
import { ButtonStart } from './ButtonStart';
import { ButtonReverse } from './ButtonReverse';
import { ButtonSort } from './ButtonSort';
import { ButtonReset } from './ButtonReset';

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
  goods: string[];
  isStarted: boolean;
  isReversed: boolean;
  sortBy: string;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isStarted: false,
    isReversed: false,
    sortBy: '',
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  getVisibleGoods = () => {
    const {
      goods,
      isReversed,
      sortBy,
    } = this.state;

    let visibleGoods = goods;

    if (sortBy) {
      switch (sortBy) {
        case 'a-z':
          visibleGoods = [...visibleGoods].sort((a, b) => a.localeCompare(b));
          break;
        case 'length':
          visibleGoods = [...visibleGoods].sort((a, b) => a.length - b.length);
          break;
        default:
          return visibleGoods;
      }
    }

    if (isReversed) {
      visibleGoods = [...visibleGoods].reverse();
    }

    return visibleGoods;
  };

  reverse = () => {
    this.setState((currentState) => ({
      isReversed: !currentState.isReversed,
    }));
  };

  sortGoods = (sortItem: 'a-z' | 'length') => {
    this.setState({ sortBy: sortItem, isReversed: false });
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      isStarted: false,
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const { isStarted } = this.state;

    const visibleGoods = this.getVisibleGoods();

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {!isStarted
          ? <div className="App__buttons"><ButtonStart start={this.start} /></div>
          : (
            <>
              <div className="App__buttons">
                <ButtonReverse reverse={this.reverse} />
                <ButtonSort sortGoods={this.sortGoods} sortBy="a-z" />
                <ButtonSort sortGoods={this.sortGoods} sortBy="length" />
                <ButtonReset reset={this.reset} />
              </div>
              <GoodsList goods={visibleGoods} />
            </>
          )}
      </div>
    );
  }
}

export default App;
