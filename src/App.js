import React from 'react';

import ListOfGoods from './components/ListOfGoods';
import goodsFromServer from './api/data';
import getItemsSortedByLength from './components/getItemsSortedByLength';
import getAlphabeticalSorting from './components/getAlphabeticalSorting';

class App extends React.Component {
  state = {
    initialGoods: [...goodsFromServer],
    goods: [...goodsFromServer],
    isLoaded: false,
    lengthKey: 'length',
    alphabetKey: 'alphabet',
    currentKey: '',
  };

  handleClick = () => {
    this.setState({
      isLoaded: true,
    });
  };

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortAlphabetically = (alphabetKey) => {
    this.setState(prevState => ({
      goods: getAlphabeticalSorting(prevState),
      currentKey: alphabetKey,
    }));
  };

  sortByLength = (lengthKey) => {
    this.setState(prevState => ({
      goods: getItemsSortedByLength(prevState),
      currentKey: lengthKey,
    }));
  };

  returnInitial = () => {
    this.setState(prevState => ({
      goods: [...prevState.initialGoods],
      currentKey: '',
    }));
  };

  render() {
    const { goods, isLoaded } = this.state;

    return (
      <div className="App">
        { isLoaded
          ? (
            <>
              <h1>Goods 1</h1>

              <button type="button" onClick={this.reverseGoods}>
                Reverse
              </button>

              <button
                type="button"
                onClick={() => this.sortAlphabetically('alphabet')}
              >
                Sort alphabetically
              </button>

              <button type="button" onClick={() => this.sortByLength('length')}>
                Sort by length
              </button>

              <button type="button" onClick={this.returnInitial}>
                Reset
              </button>

              <ListOfGoods goods={goods} />
            </>
          )
          : (
            <button
              type="button"
              onClick={this.handleClick}
              className="load-btn"
            >
                Load
            </button>
          )}
      </div>
    );
  }
}

export default App;
