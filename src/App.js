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

const filterOptions = Array.from(Array(10).keys());

export class App extends React.Component {
  state = {
    isContentVisible: false,
    isReversed: false,
    sortedBy: '',
    lengthFilter: '1',
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

  handleFilter = (event) => {
    const { value } = event.target;

    this.setState({
      lengthFilter: value,
    });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortedBy: '',
      lengthFilter: '1',
    });
  }

  processGoodsList = (list) => {
    const { isReversed, sortedBy, lengthFilter } = this.state;

    const processedList = [...list]
      .filter(item => item.length >= +lengthFilter);

    switch (sortedBy) {
      case 'name':
        processedList.sort((a, b) => (a.localeCompare(b)));
        break;

      case 'length':
        processedList.sort((a, b) => a.length - b.length);
        break;

      default:
    }

    if (isReversed) {
      processedList.reverse();
    }

    return processedList;
  }

  render() {
    const { isContentVisible, lengthFilter } = this.state;

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

        <select
          disabled={!isContentVisible}
          name="lengthFilter"
          value={lengthFilter}
          onChange={this.handleFilter}
        >
          {filterOptions.map(number => (
            <option value={`${number + 1}`} key={number + 1}>
              {number + 1}
            </option>
          ))}
        </select>

        {isContentVisible
          && (
            <GoodsList
              goods={this.processGoodsList(goodsFromServer)}
            />
          )}
      </div>
    );
  }
}
