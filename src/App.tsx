import React from 'react';
import { Button } from './Button';
import { GoodsList } from './GoodsList';
import './App.css';

const goodsFromServer: string[] = [
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

class App extends React.Component<{}, State> {
  state: State = {
    defaultGoods: goodsFromServer,
    isShown: false,
    isReversed: false,
    sortBy: 'index',
  };

  showList = () => {
    this.setState(state => ({
      isShown: !state.isShown,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: 'index',
    });
  };

  render() {
    const {
      defaultGoods,
      isShown,
      isReversed,
      sortBy,
    } = this.state;

    const visibleGoods = [...defaultGoods];

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

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {isShown ? (
          <>
            <GoodsList goods={visibleGoods} />
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

export default App;
