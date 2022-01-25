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
  initialGoods: string[];
  goods: string[];
  isStart: boolean;
  isReverse: boolean;
  isAlphabetically: boolean;
  isLength: boolean;
  minLength: number;
}

class App extends React.Component<{}, State> {
  state: State = {
    initialGoods: goodsFromServer,
    goods: goodsFromServer,
    isStart: true,
    isReverse: false,
    isAlphabetically: false,
    isLength: false,
    minLength: 1,
  };

  selected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const length = Number(event.currentTarget.value);

    if (length) {
      this.setState((state) => ({
        minLength: length,
        goods: [...state.initialGoods.filter(item => (item.length >= length))],
      }));
    }
  };

  sortList = (sortBy: SortBy) => {
    switch (sortBy) {
      case SortBy.Alphabetically:
        this.setState((state) => ({
          isAlphabetically: true,
          isLength: false,
          goods: [...state.goods.sort((item1, item2) => (item1.localeCompare(item2)))],
        }));
        break;
      case SortBy.Length:
        this.setState((state) => ({
          isAlphabetically: false,
          isLength: true,
          goods: [...state.goods.sort((item1, item2) => (item1.length - item2.length))],
        }));

        break;
      default:
    }

    this.setState({
      isReverse: false,
    });
  };

  reset = () => {
    this.setState((state) => ({
      isReverse: false,
      isAlphabetically: false,
      isLength: false,
      minLength: 1,
      goods: [...state.initialGoods],
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      isReverse: !state.isReverse,
      goods: [...state.goods.reverse()],
    }));
  };

  render() {
    const {
      goods,
      isStart,
      isReverse,
      isAlphabetically,
      isLength,
      minLength,
    } = this.state;

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
            <div className="functional">
              <ul className="list">
                {
                  goods.map((item) => (
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
                onClick={this.reverse}
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

              <select
                name="select"
                className="select"
                value={minLength}
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

              <button
                type="button"
                className="list__button-reset"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
