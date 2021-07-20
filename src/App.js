import React from 'react';
import { OrderList } from './components/OrderList';
import './App.css';
import Button from './components/Button';

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

class App extends React.Component {
  state = {
    isListVisible: false,
    goodsList: goodsFromServer,
    sortParameters: 'null',
    minWordLength: 1,
    maxNameLength: 10,
  }

  reverseList = () => this.setState(state => ({
    goodsList: [...state.goodsList].reverse(),
  }));

  changeListVisibility = () => this.setState(
    prevState => ({ isListVisible: !prevState.isListVisible }),
  );

  resetList = () => this.setState({
    goodsList: goodsFromServer,
    sortParameters: 'null',
    minWordLength: 0,
  })

  changeSortParametersInString = () => {
    this.setState({
      sortParameters: 'string',
    });
    this.setState(state => ({
      goodsList:
        this.sortByParameters([...state.goodsList], state.sortParameters),
    }));
  }

  changeSortParametersInNumber= () => {
    this.setState({
      sortParameters: 'number',
    });

    this.setState(state => ({
      goodsList:
        this.sortByParameters([...state.goodsList], state.sortParameters),
    }));
  }

  sortByParameters =
    (copyGoods, sortParameters) => copyGoods.sort((prev, next) => {
      switch (sortParameters) {
        case 'string':
          return prev.localeCompare(next);

        case 'number':
          return prev.length - next.length;

        default:
          return 0;
      }
    })

  filterByLength = event => this.setState({
    minWordLength: +event.target.value,
    goodsList:
      goodsFromServer.filter(good => good.length >= +event.target.value),
  })

  render() {
    const optionCount = Array.from(
      { length: this.state.maxNameLength }, (_, i) => i + 1,
    );

    return (
      <>
        {this.state.isListVisible
          ? (
            <>
              <OrderList
                goods={this.state.goodsList}
              />
              <Button
                onClick={this.reverseList}
                text="reverse"
              />
              <Button
                onClick={this.changeSortParametersInString}
                text="sort by Name"
              />
              <Button
                onClick={this.resetList}
                text="reset"
              />
              <Button
                onClick={this.changeSortParametersInNumber}
                text="sort by Length"
              />
              <Select
                onChange={this.filterByLength}
                value={this.state.minWordLength}
                optionCount={optionCount}
              />
            </>

          )
          : (
            <Button
              onClick={this.changeListVisibility}
              text="start"
            />
          )
        }
      </>
    );
  }
}

export default App;
