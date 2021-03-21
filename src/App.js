import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
].map((name, index) => ({
  name,
  id: index + 1,
  length: name.length,
}));

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isStarted: false,
    isReversed: false,
    sortBy: 'id',
  };

  getStart = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  sortById = () => {
    this.setState({
      sortBy: 'id',
    });
  };

  sortByName = () => {
    this.setState({
      sortBy: 'name',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const {
      goods,
      isStarted,
      isReversed,
      sortBy,
    } = this.state;

    goods.sort((good1, good2) => {
      switch (sortBy) {
        case 'id':
        case 'length':
          return good1[sortBy] - good2[sortBy];

        case 'name':
          return good1[sortBy].localeCompare(good2[sortBy]);

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="goods">
        <h1>Goods</h1>
        {!isStarted
          && (
          <button
            type="button"
            onClick={this.getStart}
          >
            Start
          </button>
          )
        }
        {isStarted
          && (
          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          )
        }
        {' '}
        {isStarted
          && (
          <button
            type="button"
            onClick={this.sortByName}
          >
            Sort alphabetically
          </button>
          )
        }
        {' '}
        {isStarted
          && (
          <button
            type="button"
            onClick={this.sortById}
          >
            Reset
          </button>
          )
        }
        {' '}
        {isStarted
          && (
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          )
        }

        {isStarted
          && <GoodsList goods={goods} />
        }
      </div>
    );
  }
}

export default App;
