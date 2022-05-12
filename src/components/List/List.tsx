import React from 'react';
import classNames from 'classnames';
import './List.scss';

enum SortBy {
  Length = 'length',
  Alphabet = 'alphabet',
  None = '',
}

type Props = {
  goodsList: string[];
};

type State = {
  isReverse: boolean;
  sortBy: SortBy;
  wordLength: number;
};

export class List extends React.Component<Props, State> {
  state = {
    isReverse: false,
    sortBy: SortBy.None,
    wordLength: 1,
  };

  switchReverse = () => {
    this.setState((state) => ({
      isReverse: !state.isReverse,
    }));
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      sortBy: (state.sortBy === SortBy.Alphabet)
        ? SortBy.None
        : SortBy.Alphabet,
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      sortBy: (state.sortBy === SortBy.Length)
        ? SortBy.None
        : SortBy.Length,
    }));
  };

  handleChange = (value: number) => {
    this.setState({
      wordLength: value,
    });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: SortBy.None,
      wordLength: 1,
    });
  };

  render() {
    const { isReverse, sortBy, wordLength } = this.state;
    const { goodsList } = this.props;
    const newGoodsList = goodsList.filter(word => word.length >= wordLength);

    switch (sortBy) {
      case 'alphabet':
        newGoodsList.sort((elem1, elem2) => elem1.localeCompare(elem2));
        break;
      case 'length':
        newGoodsList.sort((elem1, elem2) => elem1.length - elem2.length);
        break;
      default:
        break;
    }

    if (isReverse) {
      newGoodsList.reverse();
    }

    return (
      <div className="goods">
        <div className="goods__buttons">
          <button
            type="button"
            className={classNames('goods__button',
              { 'goods__button--active': isReverse })}
            onClick={this.switchReverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className={classNames('goods__button',
              { 'goods__button--active': sortBy === SortBy.Alphabet })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('goods__button',
              { 'goods__button--active': sortBy === SortBy.Length })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <select
            className={classNames('goods__button',
              { 'goods__button--active': wordLength !== 1 })}
            onChange={
              event => this.handleChange(Number(event.target.value))
            }
            value={wordLength}
          >
            {
              Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                <option value={num} key={num}>{`Word length >= ${num}`}</option>
              ))
            }
          </select>

          <button
            type="button"
            className="goods__button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <ul className="goods__list">
          {
            newGoodsList.map((item) => (
              <li key={item} className="goods__item">
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
