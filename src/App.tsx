import classNames from 'classnames';
import { ChangeEvent, Component, ReactNode } from 'react';
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

type State = {
  goodsLength: number,
  goodsVisible: boolean,
  isReversed: boolean,
  sortBy: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    goodsLength: 1,
    goodsVisible: false,
    isReversed: false,
    sortBy: '',
  };

  viewLength = (value: ChangeEvent<HTMLSelectElement>) => {
    this.setState(() => ({ goodsLength: +value.target.value }));
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
      goodsLength: 1,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlfabetically = () => {
    this.setState({ sortBy: 'alfabetically' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
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
      goodsLength,
      isReversed,
      sortBy,
    } = this.state;
    const visibleGoods = goodsFromServer.filter(
      (good) => good.length >= goodsLength,
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
        case 'alfabetically':
          return good1.localeCompare(good2);
        case 'length':
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
            className="select is-small"
            onChange={(value) => this.viewLength(value)}
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
        </div>

        <div className="buttons has-addons">
          <button
            type="button"
            className={classNames(...buttonClasses)}
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className={classNames(...buttonClasses)}
            onClick={this.sortAlfabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(...buttonClasses)}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(...buttonClasses)}
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
