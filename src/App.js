import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { GoodList } from './components/GoodList';
import { Select } from './components/Select';

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

const preparedGoods = goodsFromServer.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

class App extends React.Component {
  state = {
    isShown: false,
    goods: preparedGoods,
    selected: 1,
  };

  clickHandler = () => {
    this.setState({
      isShown: true,
    });
  }

  reverseGoods = () => {
    this.setState(prevState => (
      {
        goods: [...prevState.goods].reverse(),
      }
    ));
  }

  sortAlphabetically = () => {
    this.setState(prevState => (
      {
        goods: [...prevState.goods].sort((x, y) => (
          x.name.localeCompare(y.name)
        )),
      }
    ));
  }

  reset = () => {
    this.setState({
      goods: preparedGoods,
      selected: 1,
    });
  }

  sortByLength = () => {
    this.setState(prevState => (
      {
        goods: [...prevState.goods].sort((x, y) => (
          x.name.length - y.name.length
        )),
      }
    ));
  }

  chengeMinLength = (event) => {
    const minLength = +event.target.value;

    this.setState(() => (
      {
        goods: preparedGoods.filter(good => good.name.length >= minLength),
        selected: minLength,
      }
    ));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>

        {this.state.isShown
          ? (
            <GoodList goods={this.state.goods} />
          )
          : (
            <Button text="Start" onClick={this.clickHandler} />
          )}

        <div className="btn-group">
          <Button
            text="Reverse"
            onClick={this.reverseGoods}
          />
          <Button
            text="Sort alphabetically"
            onClick={this.sortAlphabetically}
          />
          <Button
            text="Reset"
            onClick={this.reset}
          />
          <Button
            text="Sort by length"
            onClick={this.sortByLength}
          />
        </div>

        <Select
          value={this.state.selected}
          changeHandler={event => this.chengeMinLength(event)}
          className="custom-select"
          range={10}
        />
      </div>
    );
  }
}

export default App;
