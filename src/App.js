import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

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
    goods: [],
    isVisible: false,
  }

  showList = () => {
    this.setState({
      goods: [...goodsFromServer],
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState((prevState) => {
      const reversedArray = [...prevState.goods].reverse();

      return ({
        goods: reversedArray,
      });
    });
  }

  sortByName = () => {
    this.setState((prevState) => {
      const sortedArray = [...prevState.goods]
        .sort((firstGood, secondGood) => firstGood.localeCompare(secondGood));

      return ({
        goods: sortedArray,
      });
    });
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState((prevState) => {
      const sortedArray = [...prevState.goods]
        .sort((firstGood, secondGood) => firstGood.length - secondGood.length);

      return ({
        goods: sortedArray,
      });
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isVisible && (
            <>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortByName}
              >
                Sort by alphabet
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
              <GoodsList goods={this.state.goods} />
            </>
          )
        }
        {this.state.isVisible || (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )
        }
      </div>
    );
  }
}

export default App;
