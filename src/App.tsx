import { Component } from 'react';
import './App.scss';
import { GoodList } from './component/goodList';

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
  hasButton: boolean,
  isReversed: boolean,
  sortBy: string,
  goods: string[]
  lengthLimit: number,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasButton: false,
    isReversed: false,
    sortBy: '',
    goods: goodsFromServer,
    lengthLimit: 0,
  };

  start = () => {
    this.setState({
      hasButton: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabetically = () => {
    this.setState({
      sortBy: 'Alf',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      sortBy: '', isReversed: false, lengthLimit: 0,
    });
  };

  viewLength = (value: string) => {
    this.setState(() => ({ lengthLimit: +value }));
  };

  render() {
    const {
      hasButton,
      isReversed,
      goods,
      sortBy,
      lengthLimit,
    } = this.state;

    const visibleGoods = [...goods]
      .filter(good => good.length >= lengthLimit);

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'Alf':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!hasButton
          ? (
            <button
              type="button"
              className="button is-warning button--size"
              onClick={this.start}
            >
              START
            </button>
          )
          : undefined}
        {hasButton && <GoodList goods={visibleGoods} />}
        <div className="button__flex">
          {hasButton && (
            <button
              className="button is-success"
              type="button"
              onClick={this.reverse}
            >
              REVERSE
            </button>
          )}
          {hasButton && (
            <button
              className="button is-success"
              type="button"
              onClick={this.sortByAlphabetically}
            >
              Sort alphabetically
            </button>
          )}
          {hasButton && (
            <button
              className="button is-success"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          )}
          {hasButton && (
            <button
              className="button is-success"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
          {hasButton && (
            <div className="select is-success">
              <select
                value={lengthLimit}
                onChange={(element) => this.viewLength(element.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">7</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

          )}
        </div>
      </div>
    );
  }
}
