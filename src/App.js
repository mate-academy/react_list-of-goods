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
    listIsVisible: false,
    goodsList: goodsFromServer,
    sortBy: 'null',
    isReverse: false,
    minWordLength: 1,
    maxNameLength: 10,
  }

  reverseList = () => this.setState(state => ({
    isReverse: !state.isReverse,
  }
  ));

  changeListVisibility = () => this.setState(
    prevState => ({ listIsVisible: !prevState.listIsVisible }),
  );

  resetList = () => this.setState({
    goodsList: goodsFromServer,
    isReverse: false,
    sortBy: 'null',
    minWordLength: 0,
  })

  sortByName = () => this.setState({
    sortBy: 'name',
  })

  sortByLength = () => this.setState({
    sortBy: 'length',
  })

  filterByLength = event => this.setState({
    minWordLength: +event.target.value,
  })

  render() {
    return (
      <>
        {this.state.listIsVisible
          ? (
            <>
              <OrderList
                goods={this.state.goodsList}
                isReverse={this.state.isReverse}
                sortBy={this.state.sortBy}
                maxNameLength={this.state.maxNameLength}
                value={this.state.minWordLength}
              />
              <Button
                onClick={this.reverseList}
                text="reverse"
              />
              <Button
                onClick={this.sortByName}
                text="sort by Name"
              />
              <Button
                onClick={this.resetList}
                text="reset"
              />
              <Button
                onClick={this.sortByLength}
                text="sort by Length"
              />
              <Select
                onChange={this.filterByLength}
                value={this.state.minWordLength}
                maxNameLength={this.state.maxNameLength}
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
