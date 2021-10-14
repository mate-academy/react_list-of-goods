import React from 'react';
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

interface State {
  originGoods: string[],
  goods: string[],
  isVisible: boolean,
  isReverse: boolean,
  isSortByAlphabet: boolean,
  isSortByLength: boolean,
}

export default class App extends React.Component<{}, State> {
  state:State = {
    originGoods: [...goodsFromServer],
    goods: goodsFromServer,
    isVisible: false,
    isReverse: false,
    isSortByAlphabet: false,
    isSortByLength: false,
  };

  toggleVisible = () => this.setState(({ isVisible }) => ({ isVisible: !isVisible }));

  toggleReverse = () => this.setState(({ isReverse }) => ({
    isReverse: !isReverse,
    goods: goodsFromServer.reverse(),
  }));

  sortByAlphabet = () => {
    this.setState(({ isSortByAlphabet }) => ({
      isSortByAlphabet: !isSortByAlphabet,
      goods: goodsFromServer.sort((f:string, s:string) => f.localeCompare(s)),
    }));
  };

  sortByLength = () => this.setState(({ isSortByLength }) => ({
    isSortByLength: !isSortByLength,
    goods: goodsFromServer.sort((a:string, b:string) => a.length - b.length),
  }));

  reset = () => this.setState(({ originGoods }) => ({
    goods: originGoods,
    isVisible: true,
    isReverse: false,
    isSortByAlphabet: false,
    isSortByLength: false,
  }));

  filter = (event:any) => {
    this.setState({
      goods: goodsFromServer.filter(good => good.length >= event.target.value),
    });
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <>
        {isVisible ? (
          <>
            <button type="button" className="button button__reverse" onClick={this.toggleReverse}>
              toggleReverse
            </button>

            <button type="button" className="button button__sort-by-alphabet" onClick={this.sortByAlphabet}>
              sortByAlphabet
            </button>

            <button type="button" className="button button__sort-by-length" onClick={this.sortByLength}>
              sortByLength
            </button>

            <button type="button" className="button button__reset" onClick={this.reset}>
              reset
            </button>

            <select name="select-values" id="" onChange={this.filter}>
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

            <ul>
              {goods.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </>
        )
          : (
            <button type="button" className="button button__reverse" onClick={this.toggleVisible}>
              toggleVisible
            </button>
          )}
      </>

    );
  }
}
