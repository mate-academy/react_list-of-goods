import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

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

class App extends React.PureComponent {
  state = {
    goodsList: [...goodsFromServer],
    isStarted: false,
  }

  start = () => {
    this.setState({ isStarted: true });
  }

  reverse = () => {
    this.setState(
      state => ({
        goodsList: [...state.goodsList].reverse(),
      }),
    );
  }

  sortAlphabet = () => {
    this.setState(
      state => ({
        goodsList: [...state.goodsList].sort(),
      }),
    );
  }

  reset= () => {
    this.setState(
      state => ({
        goodsList: [...goodsFromServer],
      }),
    );
  }

  sortLength = () => {
    this.setState(
      state => ({
        goodsList: [...state.goodsList].sort(
          (g1, g2) => (g1.length - g2.length),
        ),
      }),
    );
  }

  render() {
    return (
      <div className="App box">
        {this.state.isStarted ? (
          <>
            <GoodsList goodsList={this.state.goodsList} />
            <div className="buttons is-grouped">
              <Button
                classes="button is-medium is-primary"
                text="Reverse"
                action={this.reverse}
              />
              <Button
                classes="button is-medium is-success"
                text="Sort alphabetically"
                action={this.sortAlphabet}
              />
              <Button
                classes="button is-medium is-info"
                text="Reset"
                action={this.reset}
              />
              <Button
                classes="button is-medium is-warning"
                text="Sort by length"
                action={this.sortLength}
              />
            </div>
          </>
        ) : (
          <Button
            classes="start-btn button is-large is-success"
            text="START"
            action={this.start}
          />
        )}
      </div>
    );
  }
}

export default App;
