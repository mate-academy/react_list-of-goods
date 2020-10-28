import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { GoodsList } from './components/GoodsList';

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

const preparedGoods = goodsFromServer.map((product, index) => (
  {
    name: product,
    id: index,
  }
));

class App extends React.PureComponent {
  state = {
    goods: preparedGoods,
    hidden: true,
  }

  showList = () => {
    this.setState({
      hidden: false,
    });
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  resetList = () => {
    this.setState({
      goods: preparedGoods,
    });
  }

  sortByName = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.name.localeCompare(b.name)
      )),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.name.length - b.name.length
      )),
    }));
  }

  render() {
    const { hidden, goods } = this.state;

    return (
      <div>
        <button
          type="button"
          className="button-start"
          hidden={!hidden}
          onClick={this.showList}
        >
          Start
        </button>

        <section hidden={hidden} className="app">
          <div className="button-block">
            <button
              type="button"
              className="ui olive large button"
              onClick={this.sortByName}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="ui yellow large button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="ui orange large button"
              onClick={this.reverseList}
            >
              Reverse
            </button>

            <button
              type="button"
              className="ui red large button"
              onClick={this.resetList}
            >
              Reset
            </button>
          </div>

          <div className="list-block">
            <h1 className="list-title">Goods</h1>
            <GoodsList goods={goods} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
