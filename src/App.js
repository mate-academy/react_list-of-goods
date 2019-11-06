import React, { Component } from 'react';
import Button from './components/Button';
import GoodsList from './components/GoodsList';

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

class App extends Component {
  state = {
    goods: [...goodsFromServer],
    originalGoods: [...goodsFromServer],
    isLoaded: false,
    selectedOption: 1,
  };

  loadData = () => {
    this.setState({
      goods: [...goodsFromServer],
      isLoaded: true,
    });
  };

  reverseList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  abc = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (
        a.replace(/\s/g, '').length - b.replace(/\s/g, '').length
      )),
    }));
  };

  selectValue = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      selectedOption: value,
      goods: [...prevState.originalGoods].filter(
        item => item.length >= value
      ),
    }));
  };

  resetList = () => {
    this.setState(prevState => ({
      goods: [...prevState.originalGoods],
      selectedOption: 1,
    }));
  };

  render() {
    const { isLoaded, goods, selectedOption } = this.state;

    return (
      <div className="App">
        {isLoaded ? (
          <>
            <Button func={this.reverseList} name="Reverse" />
            <Button func={this.abc} name="Sort alphabetically" />
            <Button func={this.sortLength} name="Sort by length" />
            <Button func={this.resetList} name="Reset" />
            <select
              value={selectedOption}
              onChange={this.selectValue}
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
              <option value="10">10</option>
            </select>
            <GoodsList items={goods} />
          </>
        ) : (
          <Button func={this.loadData} name="Start" />
        )}
      </div>
    );
  }
}

export default App;
