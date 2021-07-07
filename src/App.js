import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

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

const App = () => (
  <div className="App">
    <h1>Goods</h1>
    <GoodsList goods={goodsFromServer} />
  </div>
);

// @@@@  ########################   @@@@

class GoodsList extends React.Component {
  state = {
    listIsHidden: true,
    goods: this.props.goods,
    selectedLength: 1,
  }

  selectOptions = Array(10).fill(1).map((item, index) => index + 1);

  changeListVisibility = () => {
    this.setState({
      listIsHidden: false,
    });
  }

  showListReversed = () => {
    this.setState(prevValue => ({
      goods: [...prevValue.goods].reverse(),
    }));
  }

  sortByAlpha = () => {
    this.setState(prevValue => ({
      goods: [...prevValue.goods].sort(),
    }));
  }

  resetList = () => {
    this.setState({
      goods: this.props.goods,
    });
  }

  sortByLength = () => {
    this.setState(prevValue => ({
      goods: [...prevValue.goods].sort((a, b) => a.length - b.length),
    }));
  }

  changeSelectedLength = (event) => {
    this.setState({
      selectedLength: event.target.value,
    });
  }

  resetSelectedLength = () => {
    this.setState({
      selectedLength: 1,
    });
  }

  render() {
    const { goods, listIsHidden, selectedLength } = this.state;

    return (
      <div>
        <button
          hidden={!listIsHidden}
          type="button"
          onClick={this.changeListVisibility}
        >
          Start
        </button>

        <div hidden={listIsHidden}>
          <ul>
            {goods.filter(item => item.length >= selectedLength).map(good => (
              <li key={good}>{good}</li>
            ))}
          </ul>
          <div className="btns-section">

            <button
              type="button"
              onClick={this.showListReversed}
            >
              REVERSE
            </button>

            <button
              type="button"
              onClick={this.sortByAlpha}
            >
              SORT ALPHABETICALLY
            </button>

            <button
              type="button"
              onClick={this.resetList}
            >
              RESET
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              SORT by LENGTH
            </button>

            <select onChange={this.changeSelectedLength}>
              {this.selectOptions.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <button
              type="button"
              onClick={this.resetSelectedLength}
            >
              RESET SELECTED LENGTH
            </button>
          </div>
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
