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
  start: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    start: false,
  };

  start = () => {
    this.setState({ start: true });
  };

  render() {
    const { start } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Goods
        </h1>

        {start ? (
          <List goods={goodsFromServer} />
        ) : (
          <Button callback={this.start} name="Start" />
        )}
      </div>
    );
  }
}
