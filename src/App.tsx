import React from 'react';
import './App.scss';
import { Button } from './Button';

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

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    start: false,
    reversed: false,
    sortBy: '',
  };

  start = () => {
    this.setState(state => ({ start: !state.start }));
  };

  end = () => {
    this.setState({ start: false });
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

  sortByMethod = (sortArgument: 'length' | 'name'): void => {
    if (sortArgument === 'length') {
      this.setState({ sortBy: 'length' });
    } else {
      this.setState({ sortBy: 'name' });
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

        {!start ? (
          <Button callback={this.start} name="Start" />
        ) : (
          <>
            <ul className="App__list">
              {this.visibleGoods().map(good => (
                <li key={good} className="App__list-item">
                  {good}
                </li>
              ))}
            </ul>

            <Button callback={this.reverse} name="Reverse" />
            <Button callback={this.reset} name="Reset" />
            <Button callback={() => this.sortByMethod('name')} name="Sort by name" />
            <Button callback={() => this.sortByMethod('length')} name="Sort by length" />
            <Button callback={this.end} name="End" />
          </>
        )}
      </div>
    );
  }
}
