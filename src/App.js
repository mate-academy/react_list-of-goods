import React from 'react';
import { GoodsList } from './components/GoogsList';
import { Button } from './components/Button';
import { Select } from './components/Select';
import './App.css';

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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    wasStarted: false,
    wordLength: 1,
  }

  start = () => this.setState({ wasStarted: true });

  reset = () => this.setState({
    goods: goodsFromServer,
    wordLength: 1,
  });

  reverseList = () => (
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }))
  );

  sortAlphabetically = () => (
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }))
  )

  sortByLength = () => (
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }))
  )

  selectByLength = event => this.setState({ wordLength: event.target.value });

  render() {
    const { wasStarted, goods, wordLength } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">Goods</h1>

        <div>
          <Button
            wasStarted={!wasStarted}
            action={this.reset}
            text="Reset"
          />

          <Button
            wasStarted={wasStarted}
            action={this.start}
            text="Start"
          />

          <Button
            wasStarted={!wasStarted}
            action={this.reverseList}
            text="Reverse"
          />

          <Button
            wasStarted={!wasStarted}
            action={this.sortAlphabetically}
            text="Sort alphabetically"
          />

          <Button
            wasStarted={!wasStarted}
            action={this.sortByLength}
            text="Sort by length"
          />

          <Select
            wasStarted={!wasStarted}
            action={this.selectByLength}
            targetLength={wordLength}
            initList={goodsFromServer}
          />
        </div>

        <GoodsList
          wasStarted={!wasStarted}
          goods={goods}
          targetLength={wordLength}
        />
      </div>
    );
  }
}

export default App;
