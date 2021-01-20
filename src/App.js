import React from 'react';
import './App.css';
import { GoodList } from './GoodList';

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

const classNames = require('classnames');

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    visible: false,
    reversed: false,
    sort: '',
  }

  start = () => {
    this.setState({ visible: true });
  }

  reverse = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  }

  reset = () => {
    this.setState({
      reversed: false,
      sort: '',
    });
  }

  getGoodsOrder = ({ goods, sort, reversed }) => {
    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sort) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (reversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  }

  render() {
    const { visible, goods, reversed, sort } = this.state;

    const visibleGoods = this.getGoodsOrder({
      goods, sort, reversed,
    });

    return (
      <div className="App">
        <button
          className={classNames('button button--start', { hidden: visible })}
          type="button"
          onClick={this.start}
        >
          Start
        </button>

        <div className={classNames({ hidden: !visible })}>

          <h1>Goods</h1>

          <GoodList goods={visibleGoods} />

          <button
            className="button"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.setState({ sort: 'alphabet' })}
          >
            Sort A-Z
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.setState({ sort: 'length' })}
          >
            Sort by length
          </button>

          <button
            className="button button--reset"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
