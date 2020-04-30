import React from 'react';
import './App.css';
// import PropTypes from 'prop-types';

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
    clicked: false,
  }

  StartClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    const startButtonClicked = this.state.clicked;

    return (
      <div className="App">
        {startButtonClicked
          ? <GoodsList goods={this.state.goodsCopy} />
          : (
            <button
              type="button"
              onClick={this.StartClick}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

class GoodsList extends React.Component {
  state = {
    goodsCopy: [...goodsFromServer],
    select: 1,
  }

  reverseGoods = () => {
    this.setState(({ goodsCopy }) => ({
      goodsCopy: [...goodsCopy].reverse(),
    }));
  }

  sortGoods = () => {
    this.setState(({ goodsCopy }) => ({
      goodsCopy: [...goodsCopy].sort(),
    }));
  }

  resetGoods = () => {
    this.setState(() => ({
      goodsCopy: [...goodsFromServer],
    }));
  }

  sortByLengthGoods = () => {
    this.setState(({ goodsCopy }) => ({
      goodsCopy: [...goodsCopy].sort((a, b) => a.length - b.length),
    }));
  }

  sortBySelectedLength = (event) => {
    const { value } = event.target;

    this.setState({
      select: value,
      goodsCopy: [...goodsFromServer].filter(el => el.length >= value),
    });
  }

  render() {
    const listOfGoods = this.state.goodsCopy;
    const selectedArr = Array.from(Array(10).keys());

    return (
      <>
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.reverseGoods}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortGoods}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.resetGoods}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLengthGoods}
        >
          Sort by length
        </button>
        <select
          value={this.state.select}
          onChange={this.sortBySelectedLength}
        >
          {selectedArr.map(item => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
        <ul className="list">
          {listOfGoods.map(good => (
            <li className="list__item" key={good}>{good}</li>
          ))}
        </ul>
      </>
    );
  }
}

// GoodsList.propTypes = {
//   goodsCopy: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default App;
