import React from 'react';

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type Props = {
  goods: string[];
};

type State = {
  isReversed: boolean,
  sortBy: SortType,
  minLength: number,
};

export class GoodsList extends React.Component<Props, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortBy: SortType.NONE,
    minLength: 1,
  };

  sortByAlphabet = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.LENGTH,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.NONE,
      minLength: 1,
    });
  };

  filterByLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      minLength: Number(event.target.value),
    });
  };

  render() {
    const { isReversed, sortBy, minLength } = this.state;
    const goods = this.props.goods.filter(good => good.length >= minLength);

    goods.sort((good1, good2) => {
      switch (sortBy) {
        case SortType.LENGTH:
          return good1.length - good2.length;
          break;

        case SortType.ALPHABET:
          return good1.localeCompare(good2);
          break;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="box">
        <ul className="mb-4">
          {goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        <button
          type="button"
          className="button"
          onClick={this.sortByAlphabet}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <div className="select">
          <select
            name="minLength"
            id="minLength"
            value={minLength}
            onChange={this.filterByLength}
          >
            {
              [...new Array(10)].map((item, index) => (
                <option key={item} value={index + 1}>
                  {index + 1}
                </option>
              ))
            }
          </select>
        </div>
      </div>
    );
  }
}
