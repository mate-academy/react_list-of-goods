import React from 'react';
import './App.scss';

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
  goods: string[],
  isVisible: boolean,
  isReverse: boolean,
  isSortByAlphabet: boolean,
  isSortByLength: boolean,
}

export default class App extends React.Component<{}, State> {
  state:State = {
    goods: goodsFromServer,
    isVisible: false,
    isReverse: false,
    isSortByAlphabet: false,
    isSortByLength: false,
  };

  toggleVisible = () => this.setState(({ isVisible }) => ({ isVisible: !isVisible }));

  toggleReverse = () => this.setState(prevState => ({
    isReverse: !prevState.isReverse,
    goods: [...prevState.goods].reverse(),
  }));

  sortByAlphabet = () => {
    this.setState(prevState => ({
      isSortByAlphabet: !prevState.isSortByAlphabet,
      goods: [...prevState.goods].sort((f:string, s:string) => f.localeCompare(s)),
    }));
  };

  sortByLength = () => this.setState(prevState => ({
    isSortByLength: !prevState.isSortByLength,
    goods: [...prevState.goods].sort((f:string, s:string) => f.length - s.length),
  }));

  reset = () => {
    this.setState(() => ({
      goods: goodsFromServer,
      isVisible: true,
      isReverse: false,
      isSortByAlphabet: false,
      isSortByLength: false,
    }));
  };

  filter = (event: any) => {
    this.setState({
      goods: goodsFromServer.filter(good => good.length >= event.currentTarget.value),
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

            <select name="select-values" className="button" id="select-values" onChange={this.filter}>
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

            <button type="button" className="button button__reset" onClick={this.reset}>
              reset
            </button>

            <ul className="goods-list">
              {goods.map(good => (
                <li key={good} className="goods-list__item">
                  {good}
                </li>
              ))}
            </ul>
          </>
        )
          : (
            <button type="button" className="start" onClick={this.toggleVisible}>
              Start
            </button>
          )}
      </>
    );
  }
}
