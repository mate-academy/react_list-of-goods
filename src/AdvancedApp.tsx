import React from 'react';
import { Button } from './Button';
import { GoodsList } from './GoodsList';
import goodsFromServer from './api/goods.json';

class AdvancedApp extends React.Component<{}, AdvancedState> {
  state: AdvancedState = {
    isShown: false,
    isReversed: false,
    sortBy: 'index',
    wordLength: 1,
    defaultGoods: goodsFromServer,
    visibleGoods: [...goodsFromServer],
  };

  showList = () => {
    this.setState(state => ({
      isShown: !state.isShown,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      visibleGoods: state.visibleGoods.reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState((state) => ({
      isReversed: false,
      sortBy: 'index',
      wordLength: 1,
      visibleGoods: [...state.defaultGoods],
    }));
  };

  filterByLength = () => {
    this.setState((state) => ({
      visibleGoods: state.defaultGoods.filter(good => good.length >= state.wordLength),
    }));
  };

  render() {
    const {
      visibleGoods,
      isShown,
      sortBy,
      wordLength,
    } = this.state;

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    return (
      <div className="App">
        {isShown ? (
          <>
            <form>
              <select
                name="length"
                value={wordLength}
                onChange={(event) => {
                  this.setState({
                    wordLength: +event.target.value,
                  });
                }}
                onClick={this.filterByLength}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </form>
            <GoodsList goods={visibleGoods} />
            <div className="App__buttons">
              <Button
                action={this.reverse}
                stylingClass="App__button--reverse"
                text="Reverse"
              />
              <Button
                action={this.sortAlphabetically}
                stylingClass="App__button--sort-abc"
                text="Sort alphabetically"
              />
              <Button
                action={this.sortByLength}
                stylingClass="App__button--sort-length"
                text="Sort by length"
              />
              <Button
                action={this.reset}
                stylingClass="App__button--reset"
                text="Reset"
              />
            </div>
          </>
        ) : (
          <Button
            action={this.showList}
            stylingClass="App__button--start"
            text="Start"
          />
        )}
      </div>
    );
  }
}

export default AdvancedApp;
