import React from 'react';
import './App.scss';
import { Button } from './Button';
import { List } from './List';

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

type State = {
  goods: string[];
  start: boolean;
  reversed: boolean;
  sortBy: string;
};

enum SortBy {
  Length = 'length',
  Name = 'name',
}

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    start: false,
    reversed: false,
    sortBy: '',
  };

  start = () => {
    this.setState({ start: true });
  };

  reverse = () => {
    this.setState(state => ({ reversed: !state.reversed }));
  };

  reset = () => {
    this.setState({
      reversed: false,
      sortBy: '',
    });
  };

  sortByMethod = (sortArgument: SortBy): void => {
    if (sortArgument === SortBy.Length) {
      this.setState({ sortBy: SortBy.Length });
    } else {
      this.setState({ sortBy: SortBy.Name });
    }
  };

  visibleGoods = () => {
    const {
      goods,
      reversed,
      sortBy,
    } = this.state;

    const copyOfGoods = [...goods];

    copyOfGoods.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (reversed) {
      copyOfGoods.reverse();
    }

    return copyOfGoods;
  };

  render() {
    const { start } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Goods
        </h1>

        {start ? (
          <>
            <List goods={this.visibleGoods()} />

            <Button callback={this.reverse} name="Reverse" />
            <Button callback={this.reset} name="Reset" />
            <Button callback={() => this.sortByMethod(SortBy.Name)} name="Sort by name" />
            <Button callback={() => this.sortByMethod(SortBy.Length)} name="Sort by length" />
          </>
        ) : (
          <Button callback={this.start} name="Start" />
        )}
      </div>
    );
  }
}
