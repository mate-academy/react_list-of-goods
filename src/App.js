import React from 'react';
import { GoodsList } from './components/goodsList';

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
    visibility: false,
    goods: [...goodsFromServer],
    selected: 1,
  }

  start = () => {
    this.setState(
      {
        visibility: true,
      },
    );
  }

  reverse = () => {
    this.setState(prev => (
      {
        goods: [...prev.goods.reverse()],
      }
    ));
  }

  sort = () => {
    this.setState(prev => (
      {
        goods: [...prev.goods.sort()],
      }
    ));
  }

  sortLength = () => {
    this.setState(prev => (
      {
        goods: [...prev.goods.sort((a, b) => (a.length - b.length))],
      }
    ));
  }

  reset = () => {
    this.setState(() => (
      {
        goods: [...goodsFromServer],
        selected: 1,
      }
    ));
  }

  selectLength = (event) => {
    const length = Number(event.target.value);

    this.setState(() => ({
      goods: [...goodsFromServer.filter(item => (item.length >= length))],
      selected: length,
    }));
  }

  render() {
    const { visibility, goods, selected } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        <br />
        <button
          type="button"
          onClick={this.start}
          hidden={visibility}
        >
          START
        </button>
        {
          visibility
          && (
            <GoodsList
              list={goods}
              reverse={this.reverse}
              sort={this.sort}
              sortLength={this.sortLength}
              reset={this.reset}
              selectLength={this.selectLength}
              selected={selected}
            />
          )}
      </div>
    );
  }
}

export default App;
