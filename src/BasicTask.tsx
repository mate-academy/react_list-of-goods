import React from 'react';
import { Button } from './Button';
import { GoodsList } from './GoodsList';
import goodsFromServer from './api/goods.json';
import './App.css';

class BasicTask extends React.Component<{}, BasicState> {
  state: BasicState = {
    goods: [...goodsFromServer],
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = (parameter: 'abc' | 'length') => {
    this.setState({ sortBy: parameter });
  };

  displayGoods = () => {
    const { goods, sortBy, isReversed } = this.state;
    let displayedGoods = goods;

    displayedGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'abc':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      displayedGoods = [...displayedGoods].reverse();
    }

    return displayedGoods;
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      goods: [...goodsFromServer],
    });
  };

  render() {
    const displayedGoods = this.displayGoods();

    return (
      <div className="App">
        <GoodsList goods={displayedGoods} />
        <div className="App__buttons">
          <Button
            action={this.reverse}
            stylingClass="App__button--reverse"
            text="Reverse"
          />
          <Button
            action={() => this.sort('abc')}
            stylingClass="App__button--sort-abc"
            text="Sort alphabetically"
          />
          <Button
            action={() => this.sort('length')}
            stylingClass="App__button--sort-length"
            text="Sort by length"
          />
          <Button
            action={this.reset}
            stylingClass="App__button--reset"
            text="Reset"
          />
        </div>
      </div>
    );
  }
}

export default BasicTask;
