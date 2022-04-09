import React from 'react';
import classNames from 'classnames';
import './App.css';
import { GoodList } from './component/GoodsList';

type Options = {
  value: number,
  label: string,
};

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

const options: Options[] = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
];

type State = {
  goodList: string[] | [];
  isReversed: boolean;
  sort: boolean;
  sortByLength: boolean;
  choosedLength: number;
  hidden: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goodList: [],
    isReversed: false,
    sort: false,
    sortByLength: false,
    choosedLength: 1,
    hidden: true,
  };

  changeLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ choosedLength: +event.target.value });
  };

  startHandle = () => {
    this.setState(state => ({
      goodList: [...state.goodList, ...goodsFromServer],
    }));

    this.setState({ hidden: false });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = () => {
    this.setState({ sort: true });
    this.setState({ sortByLength: false });
  };

  sortByLength = () => {
    this.setState({ sortByLength: true });
    this.setState({ sort: false });
  };

  reset = () => {
    this.setState({ sort: false });
    this.setState({ sortByLength: false });
    this.setState({ choosedLength: 1 });
  };

  render() {
    const {
      goodList,
      isReversed,
      sort,
      sortByLength,
      choosedLength,
      hidden,
    } = this.state;

    return (
      <div className="App">
        {goodList.length === 0 && (
          <button
            type="button"
            className={classNames('button', 'start-button')}
            onClick={this.startHandle}
          >
            START
          </button>
        )}

        {!hidden && (
          <>
            <div
              className="actions-buttons-block"
            >
              <select
                className="select"
                value={choosedLength}
                onChange={this.changeLength}
              >
                {options.map(option => (
                  <option
                    value={option.value}
                    key={option.label}
                  >
                    {option.label}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className={classNames('button', 'reverse')}
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className={classNames('button', 'reset')}
                onClick={this.reset}
              >
                Reset all sort
              </button>
            </div>

            <div
              className="sort-buttons"
            >
              <button
                type="button"
                className={classNames('button', 'albSort')}
                onClick={this.sort}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className={classNames('button', 'lengthSort')}
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </div>
          </>

        )}

        <GoodList
          goods={goodList}
          isReversed={isReversed}
          sorted={sort}
          lengthSort={sortByLength}
          choosedLength={choosedLength}
        />
      </div>
    );
  }
}

export default App;
