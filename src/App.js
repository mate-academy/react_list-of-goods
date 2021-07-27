import React from 'react';
import { nanoid } from 'nanoid';
import { Button } from './components/Button/Button';
import { Select } from './components/Select/Select';
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
    goods: [...goodsFromServer],
    minLength: 1,
    isGoodsListVisible: false,
  };

  setGoodsVisible = () => {
    this.setState({
      isGoodsListVisible: true,
    });
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      minLength: 1,
    });
  }

  sortByLength = () => {
    const filtered = [...this.state.goods].sort((a, b) => a.length - b.length);

    this.setState(state => ({
      goods: filtered,
    }));
  }

  filterLength = () => {
    this.setState(state => ({
      goods: state.goods.filter(a => a.length >= state.minLength),
    }));
  }

  reverse = () => {
    const reversed = [...this.state.goods].reverse();

    this.setState(state => ({
      goods: reversed,
    }));
  }

  onChange = (event) => {
    const { value } = event.target;

    this.setState({
      minLength: value,
    });

    this.filterLength();
  }

  render() {
    const { reverse, sortByAlphabet, reset,
      sortByLength, onChange, setGoodsVisible } = this;
    const { goods, minLength, isGoodsListVisible } = this.state;

    return (
      <div className="app">
        {isGoodsListVisible
          ? (
            <>
              <h1>Goods</h1>
              <ul className="list">
                {goods.map(good => <li key={nanoid()}>{good}</li>)}
              </ul>
              <div className="buttons">
                <Button onClick={reverse} text="Reverse" />
                <Button onClick={sortByAlphabet} text="Sort alphabetically" />
                <Button onClick={reset} text="Reset" />
                <Button onClick={sortByLength} text="Sort by length" />
                <Select onChange={onChange} id={minLength} />
              </div>
            </>
          )
          : (
            <Button onClick={setGoodsVisible} text="Start" />
          )
        }
      </div>
    );
  }
}

export default App;
