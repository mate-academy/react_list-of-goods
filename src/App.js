import React from 'react';
import { GoodsList } from './GoodsList';
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

export class App extends React.Component {
  state = {
    isContentVisible: false,
    isReversed: false,
    sortedBy: '',
  };

  enableContent = (event) => {
    const button = event.target;

    button.hidden = true;
    this.setState({ isContentVisible: true });
  }

  sortAlphabetically = () => {
    this.setState({
      isReversed: false,
      sortedBy: 'name',
    });
  }

  sortByLength = () => {
    this.setState({
      isReversed: false,
      sortedBy: 'length',
    });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortedBy: '',
    });
  }

  render() {
    const {
      isContentVisible,
      isReversed,
      sortedBy,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          onClick={this.enableContent}
        >
          Start
        </button>

        <button
          type="button"
          disabled={!isContentVisible}
          onClick={() => {
            this.setState(state => ({ isReversed: !state.isReversed }));
          }}
        >
          Reverse
        </button>

        <button
          type="button"
          disabled={!isContentVisible}
          onClick={this.sortAlphabetically}
        >
          Sort by name
        </button>

        <button
          type="button"
          disabled={!isContentVisible}
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          disabled={!isContentVisible}
          onClick={this.reset}
        >
          Reset
        </button>

        {isContentVisible
          && (
            <GoodsList
              goods={goodsFromServer}
              reversed={isReversed}
              sortedBy={sortedBy}
            />
          )}
      </div>
    );
  }
}
