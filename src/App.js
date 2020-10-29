import React, { PureComponent } from 'react';
import { Options } from './components/Options';

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

const selectList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends PureComponent {
  state = {
    hidden: true,
    goods: goodsFromServer,
    goodLength: 1,
  }

  start = () => {
    this.setState(({ hidden }) => ({
      hidden: !hidden,
    }));
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (
        a.localeCompare(b)
      )),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      goodLength: 1,
    });
  }

  sortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (
        a.length - b.length
      )),
    }));
  }

  minLength = (e) => {
    const { value } = e.target;

    this.setState({
      goodLength: value,
      goods: goodsFromServer.filter(good => good.length >= value),
    });
  }

  render() {
    const { hidden, goods, goodLength } = this.state;

    return (
      <div className="container text-center my-5">
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.start}
          hidden={!hidden}
        >
          Start
        </button>
        {/* eslint-disable-next-line */}
        <select
          hidden={hidden}
          className="form-control w-25 mx-auto text-center"
          value={goodLength}
          onChange={this.minLength}
        >
          {selectList.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <div hidden={hidden} className="btn-group my-5">
          <Options
            reverseGoods={this.reverseGoods}
            sortAlphabet={this.sortAlphabet}
            reset={this.reset}
            sortLength={this.sortLength}
            minLength={this.minLength}
          />
        </div>

        <ul className="list-group mx-auto w-25" hidden={hidden}>
          {goods.map(item => (
            <li key={item} className="list-group-item text-center">
              {item}
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default App;
