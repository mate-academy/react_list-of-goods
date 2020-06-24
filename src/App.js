/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';
import { Button } from './Button';
import { OptionsList } from './OptionsList';

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
    sorted: [...goodsFromServer],
    display: 'none',
    startDisplay: 'block',
    goodsItemsDisplay: goodsFromServer.map(item => Boolean(item)),
    selectedLength: 3,
    actions: {
      'sort by length': () => (
        this.setState(prevState => ({
          sorted: prevState.sorted.sort((a, b) => a.length - b.length),
        }))
      ),
      'sort reverse': () => (
        this.setState(prevState => ({
          sorted: prevState.sorted.reverse(),
        }))
      ),
      'sort by name': () => (
        this.setState(prevState => ({
          sorted: prevState.sorted.sort(),
        }))
      ),
      'reset button': () => (
        this.setState(prevState => ({
          goodsItemsDisplay: goodsFromServer.map(item => Boolean(item)),
          sorted: [...goodsFromServer],
          selectedLength: 1,
        }))
      ),
    },
  }

  start = () => (
    this.setState(prevState => ({
      startDisplay: 'none',
      display: 'flex',
    }))
  )

  choose= (ev) => {
    ev.persist();

    return (
      this.setState(prevState => ({
        selectedLength: ev.target.value,
        goodsItemsDisplay: prevState.sorted.map(item => item.length > ev.target.value),
      }))
    );
  }

  render() {
    const { sorted, display, startDisplay, actions, goodsItemsDisplay, selectedLength } = this.state;

    return (
      <div className="App">
        <h1>
          {goodsFromServer.length}
          &nbsp;
          Goods
        </h1>
        <Button key="start" action={['start', this.start]} display={startDisplay} />
        <GoodsList list={sorted} display={display} goodsDisplay={goodsItemsDisplay} />
        <div className="container">
          {Object.entries(actions).map(action => (
            <Button key={action[0]} action={action} display={display} />
          ))}
          <OptionsList i={10} selected={selectedLength} choose={this.choose} display={display} />
        </div>
      </div>
    );
  }
}

export default App;
