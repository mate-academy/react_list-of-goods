import React from 'react';
import classNames from 'classnames';
import './App.css';
import { GoodList } from './component/GoodsList';
import { State } from './types/type';
import { goodsFromServer, options } from './constants';

class App extends React.Component<{}, State> {
  state: State = {
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
      hidden: false,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sort = () => {
    this.setState({
      sort: true,
      sortByLength: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortByLength: true,
      sort: false,
    });
  };

  reset = () => {
    this.setState({
      sort: false,
      sortByLength: false,
      choosedLength: 1,
    });
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
