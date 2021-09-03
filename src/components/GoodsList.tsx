import React from 'react';
import './GoodsList.scss';

type State = {
  isReversed: boolean;
  sortBy: string;
  minLength: string;
};

type Props = {
  goods: string[];
};

const allLength = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: '',
    minLength: '1',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      minLength: '1',
    });
  };

  changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ minLength: event.target.value });
  };

  render() {
    const { goods } = this.props;
    const { isReversed, sortBy, minLength } = this.state;
    const visibleGoods = goods.filter(
      good => good.length >= +minLength,
    );

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'length':
          return g1.length - g2.length;
        case 'alphabet':
          return g1.localeCompare(g2);
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <select
          name="minLength"
          className="select"
          value={minLength}
          onChange={this.changeHandler}
        >
          <option value="">
            Choose min length
          </option>
          {allLength.map(length => (
            <option value={length}>
              {length}
            </option>
          ))}
        </select>
        <ul className="goods">
          {visibleGoods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        <div className="buttons">
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
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="button"
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            type="button"
            className="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
      </>
    );
  }
}
