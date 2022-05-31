import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

type Props = {};

type State = {
  goodsList : string[],
  visibility : boolean,
  lengthLimit : number,
};

class App extends React.Component <Props, State> {
  state = {
    goodsList: [...goodsFromServer],
    visibility: false,
    lengthLimit: 1,
  };

  visibilitySwitch = () => {
    this.setState((prevState) => ({
      visibility: !prevState.visibility,
    }));
  };

  buttonGenerator = (text:string, method:() => void) => (
    <button type="button" onClick={method}>
      {text}
    </button>
  );

  reverseList = () => {
    this.setState((prevState) => ({
      goodsList: [...prevState.goodsList].reverse(),
    }));
  };

  sortABC = () => {
    this.setState((prevState) => ({
      goodsList: [...prevState.goodsList].sort(
        (good1, good2) => good1.localeCompare(good2),
      ),
    }));
  };

  initialOrder = () => {
    this.setState(() => ({
      goodsList: [...goodsFromServer],
      lengthLimit: 1,
    }));
  };

  byLength = () => {
    this.setState((prevState) => ({
      goodsList: [...prevState.goodsList].sort(
        (good1, good2) => good1.length - good2.length,
      ),
    }));
  };

  changeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState(() => ({
      lengthLimit: +event.target.value,
      goodsList: [...goodsFromServer]
        .filter(good => good.length >= +event.target.value),
    }));
  };

  selectGenerator = () => (
    <select
      value={this.state.lengthLimit}
      onChange={this.changeLimit}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  );

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.visibility
          && this.buttonGenerator('Start', this.visibilitySwitch)}
        {this.state.visibility
        && (
          <>
            {this.buttonGenerator('Reverse', this.reverseList)}
            {this.buttonGenerator('Sort alphabetically', this.sortABC)}
            {this.buttonGenerator('Reset', this.initialOrder)}
            {this.buttonGenerator('Sort by length', this.byLength)}
            {this.selectGenerator()}
            <GoodsList goods={this.state.goodsList} />
          </>
        )}
      </div>
    );
  }
}

export default App;
