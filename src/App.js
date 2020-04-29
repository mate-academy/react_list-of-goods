import React from 'react';
import PropTypes from 'prop-types';
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

const maxItemLength = Math.max(...goodsFromServer.map(item => item.length));
const arrOfItemLengths = [];

// eslint-disable-next-line no-plusplus
for (let i = 1; i <= maxItemLength + 1; i++) {
  arrOfItemLengths.push(i);
}

class App extends React.Component {
  state = {
    isVisible: false,
    goodsList: [...goodsFromServer],
    wordMaxLength: 0,
  }

  limitByWordLength = (event) => {
    const maxWordLength = event.target.value;

    this.setState({
      wordMaxLength: maxWordLength,
      goodsList: goodsFromServer.filter(item => item.length >= maxWordLength),
    });
  }

  handleVisibility = () => {
    this.setState(prev => ({ isVisible: !prev.isVisible }));
  }

  handleReverse = () => {
    this.setState(state => ({ goodsList: [...state.goodsList].reverse() }));
  }

  handleReset = () => {
    this.setState((
      {
        wordMaxLength: 0,
        goodsList: [...goodsFromServer],
      }
    ));
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.length - b.length),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  }

  render() {
    const { isVisible, goodsList, wordMaxLength } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <h2>{goodsFromServer.length}</h2>
        <GoodsList visibility={isVisible} goodsList={goodsList} />
        <button
          type="button"
          hidden={isVisible}
          onClick={this.handleVisibility}
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.handleReverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortByAlphabet}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <select
          value={wordMaxLength}
          onChange={this.limitByWordLength}
        >
          {arrOfItemLengths
            .map(itemLength => (
              <option
                value={itemLength}
              >
                {itemLength}
              </option>
            ))}
        </select>
      </div>
    );
  }
}

const GoodsList = ({ visibility, goodsList }) => (
  <ul hidden={!visibility}>
    {goodsList.map(itemName => <Item key={itemName} item={itemName} />)}
  </ul>
);

const Item = ({ item }) => (
  <li>{item}</li>
);

GoodsList.propTypes = {
  visibility: PropTypes.bool.isRequired,
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

export default App;
