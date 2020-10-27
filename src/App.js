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
    minLength: 0,
    sortBy: 'id',
    isReversed: false,
  }

  toggleList = () => {
    this.setState(state => ({
      isListShown: !state.isListShown,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      sortBy: 'id',
      minLength: 0,
    });
  }

  changeMinLength = (event) => {
    this.setState({ minLength: +event.target.value });
  }

  render() {
    const {
      isListShown,
      goods,
      minLength,
      isReversed,
      sortBy,
    } = this.state;

    const visibleGoods = [...goods].filter(good => (
      good.name.length >= minLength
    ));

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'id':
          return a[sortBy] - b[sortBy];

        case 'length':
          return a.name.length - b.name.length;

        case 'alphabet':
          return a.name.localeCompare(b.name);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="app">
        <h1>Goods</h1>
        {!isListShown && <Button name="Start" onClick={this.toggleList} />}
        {isListShown
          && (
            <>
              <GoodsList goods={visibleGoods} />

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
