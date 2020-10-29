import React from 'react';
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
    goodsList: [...goodsFromServer],
    newList: [],
    showButton: true,
    sortAlphabeticallyIncrease: true,
    sortByLengthIncrease: true,
  }

  startList = () => {
    this.setState(state => ({
      newList: state.goodsList,
      showButton: false,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      newList: state.newList.reverse(),
    }));
  };

  sortAlphabetically = () => {
    if (this.state.sortAlphabeticallyIncrease) {
      this.setState(state => ({
        newList: state.newList.sort((a, b) => (
          a.localeCompare(b)
        )),
        sortAlphabeticallyIncrease: !state.sortAlphabeticallyIncrease,
      }));
    } else {
      this.setState(state => ({
        newList: state.newList.sort((a, b) => (
          b.localeCompare(a)
        )),
        sortAlphabeticallyIncrease: !state.sortAlphabeticallyIncrease,
      }));
    }
  };

  sortByLength = () => {
    if (this.state.sortByLengthIncrease) {
      this.setState(state => ({
        newList: state.newList.sort((a, b) => (
          a.length - b.length
        )),
        sortByLengthIncrease: !state.sortByLengthIncrease,
      }));
    } else {
      this.setState(state => ({
        newList: state.newList.sort((a, b) => (
          b.length - a.length
        )),
        sortByLengthIncrease: !state.sortByLengthIncrease,
      }));
    }
  };

  reset = () => {
    this.setState({
      newList: [...goodsFromServer],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.showButton
          ? (
            <button
              type="button"
              onClick={this.startList}
            >
              Start
            </button>
          )
          : ''
        }

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
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <ul>
          {this.state.newList.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
