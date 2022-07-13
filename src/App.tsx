import classNames from 'classnames';
import { Component, ReactNode } from 'react';
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

enum SortType {
  alfabetically = 'alfabetically',
  length = 'length',
  nosort = '',
}

type State = {
  selectedMinLength: number,
  goodsVisible: boolean,
  isReversed: boolean,
  sortBy: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedMinLength: 1,
    goodsVisible: false,
    isReversed: false,
    sortBy: SortType.nosort,
  };

  setMinLength = (value: string) => {
    this.setState(() => ({ selectedMinLength: +value }));
  };

  reset = () => {
    this.setState({
      sortBy: SortType.nosort,
      isReversed: false,
      selectedMinLength: 1,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  viewList = () => {
    const { goodsVisible } = this.state;

    if (!goodsVisible) {
      this.setState(() => ({ goodsVisible: !goodsVisible }));
    }
  };

  render(): ReactNode {
    const {
      goodsVisible,
      selectedMinLength,
      isReversed,
      sortBy,
    } = this.state;
    const selectValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const visibleGoods = goodsFromServer.filter(
      (good) => good.length >= selectedMinLength,
    );
    const buttonClasses = [
      'button',
      'is-info',
      'is-outlined',
      'is-small',
      'box',
      'is-$white-ter',
    ];

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case SortType.alfabetically:
          return good1.localeCompare(good2);
        case SortType.length:
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <div className="App__title">
          <h1 className="title is-2">
            Goods
          </h1>

          {!goodsVisible
            ? (
              <button
                type="button"
                className={classNames(buttonClasses)}
                onClick={this.viewList}
              >
                Start
              </button>
            )
            : null}

          <select
            value={selectedMinLength}
            className="select is-small"
            onChange={(element) => this.setMinLength(element.target.value)}
          >
            {selectValues.map(value => (
              <option value={`${value}`} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="buttons has-addons">
          <button
            type="button"
            className={classNames(buttonClasses)}
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className={classNames(buttonClasses)}
            onClick={() => this.setState({ sortBy: SortType.alfabetically })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(buttonClasses)}
            onClick={() => this.setState({ sortBy: SortType.length })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(buttonClasses)}
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        {goodsVisible && (
          <ul className="goods">
            {visibleGoods.map(good => (
              <li key={good} className="content is-medium box">
                {good}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
