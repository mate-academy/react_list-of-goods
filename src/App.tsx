import React from 'react';
import './App.scss';
import classNames from 'classnames/bind';

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

enum SortBy {
  'None',
  'Length',
  'Alphabetically',
}

interface State {
  goods: string[];
  isStart: boolean;
  isReverse: boolean;
  isAlphabetically: boolean;
  isLength: boolean;
  sortedBy: SortBy;
  minLength: number;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isStart: true,
    isReverse: false,
    isAlphabetically: false,
    isLength: false,
    sortedBy: SortBy.None,
    minLength: 1,
  };

  selected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      minLength: Number(event.currentTarget.value),
    });
  };

  sortList = (sortBy: SortBy) => {
    switch (sortBy) {
      case SortBy.Alphabetically:
        this.setState({
          isAlphabetically: true,
          isLength: false,
        });
        break;
      case SortBy.Length:
        this.setState({
          isAlphabetically: false,
          isLength: true,
        });

        break;
      default:
    }

    this.setState({
      sortedBy: sortBy,
      isReverse: false,
    });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      isAlphabetically: false,
      isLength: false,
      sortedBy: SortBy.None,
      minLength: 1,
    });
  };

  render() {
    const {
      goods,
      isStart,
      isReverse,
      isAlphabetically,
      isLength,
      sortedBy,
      minLength,
    } = this.state;

    const visibleGoods = goods.filter(item => item.length >= minLength);

    visibleGoods.sort((item1, item2) => {
      switch (sortedBy) {
        case SortBy.Alphabetically:
          return item1.localeCompare(item2);
        case SortBy.Length:
          return item1.length - item2.length;
        default:
          return 0;
      }
    });

    if (isReverse) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {
          isStart
          && (
            <div className="start">
              <h1 className="title">Goods</h1>
              <button
                type="button"
                className="button"
                onClick={() => (
                  this.setState((state) => ({
                    isStart: !state.isStart,
                  }))
                )}
              >
                Start
              </button>
            </div>
          )
        }
        {
          !isStart
          && (
            <>
              <ul className="list">
                {
                  visibleGoods.map((item) => (
                    <li key={item} className="list__item">
                      {item}
                    </li>
                  ))
                }
              </ul>

              <button
                type="button"
                className={classNames(
                  'list__button',
                  { 'list__button--active': isReverse },
                )}
                onClick={() => (
                  this.setState((state) => ({
                    isReverse: !state.isReverse,
                  }))
                )}
              >
                Reverse
              </button>

              <button
                type="button"
                className={classNames(
                  'list__button',
                  { 'list__button--active': isAlphabetically },
                )}
                onClick={() => (this.sortList(SortBy.Alphabetically))}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className={classNames(
                  'list__button',
                  { 'list__button--active': isLength },
                )}
                onClick={() => (this.sortList(SortBy.Length))}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="list__button-reset"
                onClick={this.reset}
              >
                Reset
              </button>

              <select
                name="select"
                className="select"
                defaultValue="1"
                onChange={(event) => (this.selected(event))}
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
            </>
          )
        }
      </div>
    );
  }
}

export default App;
