import React from 'react';

type State = {
  isReversed: boolean;
  sortBy: string;
};

type Props = {
  goods: string[];
};

export class ListOfGoods extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(currentState => ({
      isReversed: !currentState.isReversed,
    }));
  };

  sortByValue = (value: string) => {
    this.setState({ sortBy: value });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  getVisibleGoods = () => {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;

    let visibleGoods = goods;

    if (sortBy) {
      visibleGoods = [...visibleGoods].sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      visibleGoods = [...visibleGoods].reverse();
    }

    return visibleGoods;
  };

  render() {
    const visibleGoods = this.getVisibleGoods();

    return (
      <div className="goods">
        <ul className="goods__list list-group w-50">
          {visibleGoods.map(good => (
            <li
              key={good}
              className="goods__item list-group-item"
            >
              {good}
            </li>
          ))}
        </ul>
        <div className="goods__buttons d-flex w-50 gap-5">
          <button
            className="goods__button btn btn-warning"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            className="goods__button btn btn-info"
            type="button"
            onClick={() => this.sortByValue('alphabet')}
          >
            Sort alphabetically
          </button>

          <button
            className="goods__button btn btn-info"
            type="button"
            onClick={() => this.sortByValue('length')}
          >
            Sort by length
          </button>
          <button
            className="goods__button btn btn-danger"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
