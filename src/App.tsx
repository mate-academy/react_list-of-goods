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

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      reversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      goods,
      start,
      reversed,
      sortBy,
    } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
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
      visibleGoods.reverse();
    }

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
              {visibleGoods.map(good => (
                <li key={good} className="App__list-item">
                  {good}
                </li>
              ))}
            </ul>

            <Button callback={this.reverse} name="Reverse" />
            <Button callback={this.reset} name="Reset" />
            <Button callback={this.sortByName} name="Sort by name" />
            <Button callback={this.sortByLength} name="Sort by length" />
            <Button callback={this.end} name="End" />
          </>
        )}
      </div>
    );
  }
}
