import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { ButtonGenerator } from './components/ButtonGenerator';

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

  reverseList = () => {
    this.setState((prevState) => ({
      goodsList: [...prevState.goodsList].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState((prevState) => ({
      goodsList: [...prevState.goodsList].sort(
        (good1, good2) => good1.localeCompare(good2),
      ),
    }));
  };

  resetList = () => {
    this.setState(() => ({
      goodsList: [...goodsFromServer],
      lengthLimit: 1,
    }));
  };

  sortbyLength = () => {
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

  render() {
    return (
      <div className="App has-text-centered">
        <br />
        <h1 className="title is-1">Goods list sorting</h1>
        {!this.state.visibility
          && <ButtonGenerator name="Start" method={this.visibilitySwitch} />}
        {this.state.visibility
        && (
          <>
            <ButtonGenerator name="Reverse" method={this.reverseList} />
            <ButtonGenerator
              name="Sort alphabetically"
              method={this.sortAlphabetically}
            />
            <ButtonGenerator name="Reset" method={this.resetList} />
            <ButtonGenerator name="Sort by length" method={this.sortbyLength} />
            <div className="select is-rounded is-info is-light is-outlined">
              <select
                value={this.state.lengthLimit}
                onChange={this.changeLimit}
              >
                {Array(10).fill('option').map((item, index) => (
                  <option key={`${item}${index + 1}`} value={index + 1}>{index + 1}</option>
                ))}
              </select>
            </div>
            <GoodsList goods={this.state.goodsList} />
          </>
        )}
      </div>
    );
  }
}

export default App;
