import React from 'react';
import './App.css';
import { Goods } from './components/Goods/Goods';

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
    isCLicked: false,
    goodList: [],
  }

  startButton = () => {
    this.setState(state => ({
      goodList: [...goodsFromServer],
      isCLicked: !state.isCLicked,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goodList: state.goodList.reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goodList: state.goodList.sort(),
    }));
  }

  reset = () => {
    this.setState({
      goodList: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goodList: state.goodList.sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goodList, isCLicked } = this.state;

    return (
      <div>
        {!isCLicked && (
          <button
            type="button"
            onClick={this.startButton}
          >
            Start
          </button>
        )}
        <Goods goods={goodList} />
        {isCLicked && (
          <>
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
              Sort Alphabetically
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
