import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

interface State {
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
}

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    isReversed: false,
    sortBy: '',
  };

  showList = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
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

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const { isVisible, isReversed, sortBy } = this.state;
    const goodsCopy = goodsFromServer.slice();

    goodsCopy.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="container text-center">

        {!isVisible && (
          <button
            className="btn btn-success btn-lg"
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <h1>Goods</h1>

            <GoodsList products={goodsCopy} />

            <div className="buttons d-flex justify-content-evenly">
              <button
                className="btn btn-warning"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                className="btn btn-success"
                type="button"
                onClick={this.sortByName}
              >
                Sort alphabetically
              </button>

              <button
                className="btn btn-success"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                className="btn btn-danger"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
