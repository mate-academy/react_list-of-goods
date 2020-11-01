import React from 'react';
import './App.css';

import Buttons from './components/Buttons/Buttons';
import ListOfGoods from './components/ListOfGoods/ListOfGoods';

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
    newList: [],
    showButton: true,
    sortAlphabeticallyIncrease: true,
    sortByLength: true,
  }

  startList = () => {
    this.setState(state => ({
      newList: [...goodsFromServer],
      showButton: false,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      newList: state.newList.reverse(),
    }));
  };

  sortAlphabetically = () => {
    const { sortAlphabeticallyIncrease, newList } = this.state;

    const sortedList = newList.sort((a, b) => {
      if (sortAlphabeticallyIncrease) {
        return a.localeCompare(b);
      }

      return b.localeCompare(a);
    });

    this.setState({
      newList: sortedList,
      sortAlphabeticallyIncrease: !sortAlphabeticallyIncrease,
    });
  };

  sortByLength = () => {
    const { sortByLength, newList } = this.state;

    const sortedList = newList.sort((a, b) => {
      if (sortByLength) {
        return a.length - b.length;
      }

      return b.length - a.length;
    });

    this.setState({
      newList: sortedList,
      sortByLength: !sortByLength,
    });
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
          : (
            <div>
              <Buttons
                clickReverse={this.reverse}
                clickSortAlphabetically={this.sortAlphabetically}
                clickSortByLength={this.sortByLength}
                clickReset={this.reset}
              />
              <ListOfGoods
                items={this.state.newList}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
