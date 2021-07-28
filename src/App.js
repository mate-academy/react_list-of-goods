import React from 'react';
import './App.css';
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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    isVisible: false,
    sortBy: '',
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  render() {
    const { isVisible, isReversed, goods, sortBy } = this.state;
    const { reverse, start, reset, sortAlphabetically, sortByLength } = this;
    const visibleGoods = [...goods];

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>

        {isVisible
          ? (
            <GoodsList
              visibleGoods={visibleGoods}
              sortAlphabetically={sortAlphabetically}
              reverse={reverse}
              start={start}
              reset={reset}
              sortByLength={sortByLength}
            />
          )
          : (
            <button type="button" onClick={this.start}>
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
