import React from 'react';
import { Button } from './Button';
import { GoodsList } from './GoodsList';
import goodsFromServer from './api/goods.json';

class AdvancedApp extends React.Component<{}, AdvancedState> {
  state: AdvancedState = {
    isShown: false,
    isReversed: false,
    sortBy: 'index',
    wordLengths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    chosenLength: 1,
    defaultGoods: goodsFromServer,
    visibleGoods: [...goodsFromServer],
  };

  showList = () => {
    this.setState(state => ({
      isShown: !state.isShown,
    }));
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      chosenLength: +event.target.value,
    });
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
      chosenLength: 1,
      visibleGoods: [...state.defaultGoods],
    }));
  };

  filterByLength = () => {
    this.setState((state) => ({
      visibleGoods: state.defaultGoods.filter(good => good.length >= state.chosenLength),
    }));
  };

  render() {
    const {
      visibleGoods,
      isShown,
      sortBy,
      wordLengths,
      chosenLength,
    } = this.state;

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        case 'index':
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
                value={chosenLength}
                onChange={this.handleChange}
                onClick={this.filterByLength}
              >
                {wordLengths.map(number => (
                  <option value={number}>
                    {number}
                  </option>
                ))}
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
