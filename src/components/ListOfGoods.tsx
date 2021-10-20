import React from 'react';
import './ListOfGoods.scss';

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

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
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
        <ul className="goods__list">
          {visibleGoods.map(good => (
            <li
              key={good}
              className="goods__item"
            >
              {good}
            </li>
          ))}
        </ul>
        <div className="goods__buttons">
          <button
            className="goods__button"
            type="button"
            onClick={this.reverse}
          >
            reverse
          </button>

          <button
            className="goods__button"
            type="button"
            onClick={this.sortByAlphabet}
          >
            sort by alphabet
          </button>

          <button
            className="goods__button"
            type="button"
            onClick={this.sortByLength}
          >
            sort by length
          </button>
          <button
            className="goods__button"
            type="button"
            onClick={this.reset}
          >
            reset
          </button>
        </div>
      </div>
    );
  }
}
