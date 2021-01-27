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
    goods: [...goodsFromServer],
    isVisible: false,
    isReversed: false,
    isReseted: false,
    sortBy: '',
  }

  showList = () => {
    this.setState({
      isVisible: true,
    });
  };

  reset = () => {
    this.setState(prevState => ({
      isReseted: !prevState.isReseted,
      isReversed: false,
      sortBy: '',
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
      isReseted: false,
      sortBy: prevState.sortBy,
    }));
  }

  sortByName = () => {
    this.setState({
      sortBy: 'alphabet',
      isReseted: false,
      isReversed: false,
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      isReseted: false,
      isReversed: false,
    });
  }

  render() {
    const { goods, isReversed, isReseted, sortBy } = this.state;
    let visibleGoods = [...goods];

    if (sortBy) {
      visibleGoods.sort((firstGood, secondGood) => {
        switch (sortBy) {
          case 'length':
            return firstGood.length - secondGood.length;

          case 'alphabet':
            return firstGood.localeCompare(secondGood);

          default:
            return 0;
        }
      });
    }

    if (isReseted) {
      visibleGoods = [...goods];
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

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

              <GoodsList goods={visibleGoods} />
            </>
          )
        }
        {!this.state.isVisible && (
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
