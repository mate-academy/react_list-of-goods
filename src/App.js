import React from 'react';

import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

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
    showGoods: false,
    goods: goodsFromServer,
    reversed: false,
    sortBy: null,
    minLength: 1,
  };

  showGoodsList = () => {
    this.setState({
      showGoods: true,
    });
  };

  sort = (sortBy) => {
    this.setState({
      sortBy,
      reversed: false,
    });
  };

  reverse = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  };

  reset = () => {
    this.setState({
      sortBy: null,
      reversed: false,
      minLength: 1,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      showGoods, goods, reversed, sortBy, minLength,
    } = this.state;

    const filteredGoods = goods.filter(good => good.length >= minLength);

    filteredGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'name':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (reversed) {
      filteredGoods.reverse();
    }

    return (
      <div className="App">
        {
          showGoods ? (
            <>
              <GoodsList goods={filteredGoods} />

              <Button
                label="Reverse"
                clickHandler={this.reverse}
              />
              <Button
                label="Sort alphabetically"
                clickHandler={() => {
                  this.sort('name');
                }}
              />
              <Button
                label="Sort by length"
                clickHandler={() => {
                  this.sort('length');
                }}
              />
              <Button
                label="Reset"
                clickHandler={this.reset}
              />

              <select
                name="minLength"
                value={minLength}
                onChange={this.handleChange}
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
            </>
          ) : (
            <Button
              label="Show Goods"
              clickHandler={this.showGoodsList}
            />
          )
        }
      </div>
    );
  }
}

export default App;
