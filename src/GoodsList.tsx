import React from 'react';

type Sort = 'len' | 'alphabet' | 'reset';

type Props = {
  goods: string[];
};

type State = {
  isReversed: boolean;
  sortBy: Sort;
  minLen: number;
};

export class GoodsList extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortBy: 'len',
    minLen: 1,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState({ isReversed: false, sortBy: 'len' });
  };

  sortByAlphabet = () => {
    this.setState({ isReversed: false, sortBy: 'alphabet' });
  };

  reset = () => {
    this.setState({ isReversed: false, sortBy: 'reset', minLen: 1 });
  };

  filterByLenght = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      minLen: Number(event.target.value),
    });
  };

  render() {
    const { isReversed, sortBy, minLen } = this.state;
    const goods = this.props.goods.filter(product => product.length >= minLen);

    goods.sort((p1, p2) => {
      switch (sortBy) {
        case 'len':
          return p1.length - p2.length;

        case 'alphabet':
          return p1.localeCompare(p2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="box is-small">
        <ul className="Goods__list content is-medium">
          {goods.map(product => (
            <li className="goods__item" key={product}>
              {product}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button
            className="button is-success"
            type="button"
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>
          <button
            className="button is-success"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            className="button is-warning"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            className="button is-danger"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
        <div className="select is-normal is-rounded">
          <select
            name="minLen"
            id="minLen"
            value={minLen}
            onChange={this.filterByLenght}
          >
            {
              [...new Array(10)].map((_, i) => (
                <option value={i + 1}>{i + 1}</option>
              ))
            }
          </select>
        </div>
      </div>
    );
  }
}
