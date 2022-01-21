import React from 'react';
import { Button } from './Button';
import { GoodsList } from './GoodsList';
import goodsFromServer from './api/goods.json';
import './App.css';

class BasicTask extends React.Component<{}, BasicState> {
  state: BasicState = {
    goods: [...goodsFromServer],
    isReversed: false,
    sortBy: 'index' as SortingParams,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = (parameter: SortingParams) => {
    this.setState({ sortBy: parameter });
  };

  displayGoods = () => {
    const { goods, sortBy, isReversed } = this.state;
    let displayedGoods = goods;

    displayedGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'abc' as SortingParams.abc:
          return good1.localeCompare(good2);
        case 'length' as SortingParams.length:
          return good1.length - good2.length;
        case 'index' as SortingParams.index:
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
      sortBy: 'index' as SortingParams.index,
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
            action={() => this.sort('abc' as SortingParams.abc)}
            stylingClass="App__button--sort-abc"
            text="Sort alphabetically"
          />
          <Button
            action={() => this.sort('length' as SortingParams.length)}
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
