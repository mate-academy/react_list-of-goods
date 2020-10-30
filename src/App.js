import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import 'semantic-ui-css/semantic.min.css';

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

const preperedGoods = goodsFromServer.map(good => ({
  name: good,
}));

class App extends React.Component {
  state = {
    goods: [...preperedGoods],
    isVisible: false,
  }

  start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  sort = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...preperedGoods],
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.name.length - b.name.length),
    }));
  }

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        {isVisible
          ? (
            <div>
              <button
                className="ui primary button"
                onClick={this.reverse}
                type="button"
              >
                Reverse
              </button>

              <button
                className="ui primary button"
                type="button"
                onClick={this.sort}
              >
                Sort alphabetically
              </button>

              <button
                className="ui primary button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <button
                className="ui primary button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <GoodsList goods={goods} />
            </div>
          )
          : (
            <button
              className="ui primary button"
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
