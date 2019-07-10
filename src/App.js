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
    filterLength: 1,
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

  filterByLength = (event) => {
    const { value } = event.target;
    this.setState(prevState => ({
      filterLength: value,
      goods: [...prevState.initialGoods].filter(
        good => good.length >= +value
      ),
    }));
  }

  returnInitial = () => {
    this.setState(prevState => ({
      goods: [...prevState.initialGoods],
      currentKey: '',
      filterLength: 1,
    }));
  };

  render() {
    const { goods, isLoaded, filterLength } = this.state;

    return (
      <div className="App">
        { isLoaded
          ? (
            <>
              <h1>Goods 1</h1>

              <div className="changing=buttons">
                <button type="button" onClick={this.reverseGoods}>
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={() => this.sortAlphabetically('alphabet')}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={() => this.sortByLength('length')}
                >
                  Sort by length
                </button>

                <label htmlFor="length-filter">
                  Max length of the word:
                  <select
                    id="length-filter"
                    name="length-filter"
                    onChange={this.filterByLength}
                    value={filterLength}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="20">10</option>
                  </select>
                </label>

                <button type="button" onClick={this.returnInitial}>
                  Reset
                </button>
              </div>

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
