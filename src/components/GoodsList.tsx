import React from 'react';
import './GoodsList.scss';

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

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReverse: false,
    sortBy: SortBy.None,
    wordLength: 1,
  };

  reversed = () => {
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
      case SortBy.Alphabet:
        newGoodsList.sort(
          (prevGood, nextGood) => prevGood.localeCompare(nextGood),
        );
        break;

      case SortBy.Length:
        newGoodsList.sort(
          (prevGood, nextGood) => prevGood.length - nextGood.length,
        );
        break;

      default:
        break;
    }

    if (isReverse) {
      newGoodsList.reverse();
    }

    return (
      <div>
        <div>
          <button
            type="button"
            onClick={this.reversed}
            className="GoodsList__button"
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortByAlphabet}
            className="GoodsList__button"
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className="GoodsList__button"
          >
            Sort by length
          </button>

          <select
            onChange={
              event => this.handleChange(Number(event.target.value))
            }
            value={wordLength}
            className="GoodsList__button"
          >
            {
              Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                <option value={num} key={num}>{`Word length >= ${num}`}</option>
              ))
            }
          </select>

          <button
            type="button"
            onClick={this.reset}
            className="GoodsList__button"
          >
            Reset
          </button>
        </div>

        <ul>
          {
            newGoodsList.map((item) => (
              <li key={item} className="GoodsList__item">
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
