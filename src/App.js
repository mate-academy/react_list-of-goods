import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import { LengthSelect } from './components/Select';

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

const preperedGoods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

const maxLength = 10;
const range = [];

for (let i = 1; i <= maxLength; i += 1) {
  range.push(i);
}

class App extends React.PureComponent {
  state = {
    isListShown: false,
    goods: preperedGoods,
    minLength: 1,
  }

  toggleList = () => {
    this.setState(state => ({
      isListShown: !state.isListShown,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.name.length - b.name.length),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: preperedGoods,
      minLength: 1,
    }));
  }

  changeMinLength = (event) => {
    const minLength = +event.target.value;

    this.setState(state => ({
      goods: preperedGoods.filter(good => good.name.length >= minLength),
      minLength,
    }));
  }

  render() {
    const { isListShown, goods, minLength } = this.state;

    return (
      <div className="app">
        <h1>Goods</h1>
        {!isListShown && <Button name="Start" onClick={this.toggleList} />}
        {isListShown
          && (
            <>
              <GoodsList goods={goods} />

              <div>
                <Button
                  name="Reverse"
                  onClick={this.reverse}
                />

                <Button
                  name="Sort alphabetically"
                  onClick={this.sortAlphabetically}
                />

                <Button
                  name="Sort by length"
                  onClick={this.sortByLength}
                />

                <Button
                  name="Reset"
                  onClick={this.reset}
                />
              </div>

              <p>
                Min length of words :
              </p>

              <LengthSelect
                range={range}
                onChange={this.changeMinLength}
                value={minLength}
              />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
