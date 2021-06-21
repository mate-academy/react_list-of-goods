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
];

class App extends React.Component {
  state = {
    items: [...goodsFromServer],
    listIsVisible: false,
    isReversed: false,
    sortedBy: 'nothing',
    length: 1,
  }

  reverseList = () => {
    this.setState({
      isReversed: true,
    });
  }

  resetList = () => {
    this.setState({
      isReversed: false,
      sortedBy: 'nothing',
      length: 1,
      items: [...goodsFromServer],
    });
  }

  sortAlphabetically = () => {
    this.setState({
      sortedBy: 'alphabetically',
    });
  }

  sortByLength = () => {
    this.setState({
      sortedBy: 'by length',
    });
  }

  filterByLength = (chosenLength) => {
    this.setState({
      length: chosenLength,
    });
  }

  render() {
    const { listIsVisible, items, isReversed, sortedBy, length } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={(e) => {
            const startButton = e.target;

            startButton.hidden = true;
            this.setState({
              listIsVisible: true,
            });
          }}
        >
          Start
        </button>
        {listIsVisible
          ? <GoodsList
            items={items}
            isReversed={isReversed}
            sortedBy={sortedBy}
            reverseList={this.reverseList}
            resetList={this.resetList}
            sortAlphabetically={this.sortAlphabetically}
            sortByLength={this.sortByLength}
            length={length}
            filterByLength={this.filterByLength}
            />
          : null}
      </div>
    );
  }
}

export default App;
