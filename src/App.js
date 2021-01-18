import React from 'react';
import { GoodsList } from './components/GoodsList';
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
      goods: [...goodsFromServer],
      visible: false,
      isReversed: false,
    }

    showGoods = ({ target }) => {
      this.setState({
        visible: true,
      });
      const button = target;

      button.hidden = true;
    };

    sortAlphabetically = () => {
      this.setState({
        isReversed: false,
        sortBy: 'alphabet',
      });
    };

    sortbyLength = () => {
      this.setState({
        isReversed: false,
        sortBy: 'length',
      });
    };

    reset = () => {
      this.setState({
        isReversed: false,
        sortBy: 'index',
      });
    };

    reverse = () => {
      this.setState(state => ({
        isReversed: !state.isReversed,
      }));
    };

    render() {
      const { visible, isReversed, goods, sortBy } = this.state;

      goods.sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          case 'index':
            return goodsFromServer.indexOf(a) - goodsFromServer.indexOf(b);
          default:
            return 0;
        }
      });
      if (isReversed) {
        goods.reverse();
      }

      return (
        <div className="App">
          <h1>Goods</h1>
          <button
            type="button"
            onClick={(e) => {
              this.showGoods(e);
            }}
          >
            Show
          </button>
          {visible && <GoodsList goods={goods} />}
          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.sortbyLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      );
    }
}

export default App;
