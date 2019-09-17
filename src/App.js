import React, { Component } from 'react';
import Button from './components/Button/Button';
import List from './components/List/List';

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
    originGoods: [...goodsFromServer],
    isLoaded: false,
    selectedValue: 1,
  };

  loadData = () => {
    this.setState({
      goods: [...goodsFromServer],
      isLoaded: true,
    });
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAZ = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (
        a.replace(/\s/g, '').length - b.replace(/\s/g, '').length
      )),
    }));
  }

  selectValue = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      selectedValue: value,
      goods: [...prevState.originGoods].filter(
        item => item.length >= value
      ),
    }));
  };

  reset = () => {
    this.setState(prevState => ({
      goods: [...prevState.originGoods],
      selectedValue: 1,
    }));
  }

  render() {
    const { isLoaded, goods, selectedValue } = this.state;

    return (
      <div className="App">
        {isLoaded ? (
          <>
            <Button func={this.reverse} name="Reverse" />
            <Button func={this.sortAZ} name="Sort alphabetically" />
            <Button func={this.sortByLength} name="Sort by length" />
            <Button func={this.reset} name="Reset" />
            <select
              id="list_length"
              value={selectedValue}
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
            <List items={goods} />
          </>
        ) : (
          <Button func={this.loadData} name="Start" />
        )}
      </div>
    );
  }
}

export default App;
