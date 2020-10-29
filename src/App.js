import React, { PureComponent } from 'react';
import { ButtonList } from './components/ButtonList';

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

class App extends PureComponent {
  state = {
    hidden: true,
    goods: goodsFromServer,
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
    });
  }

  sortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (
        a.length - b.length
      )),
    }));
  }

  render() {
    const { hidden, goods } = this.state;

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
        <div hidden={hidden} className="btn-group my-5">
          <ButtonList
            reverseGoods={this.reverseGoods}
            sortAlphabet={this.sortAlphabet}
            reset={this.reset}
            sortLength={this.sortLength}
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
