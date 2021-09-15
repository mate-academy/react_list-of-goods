import React from 'react';
import { GoodsSelected } from './GoodsSelected';

type Props = {
  goods: string[];
};

type State = {
  isReversed: boolean;
  limitedLength: number;
  goods: string[];
};

class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    limitedLength: 1,
    goods: this.props.goods,
  };

  onReverse = () => {
    this.setState((currentState) => ({
      goods: [...currentState.goods].reverse(),
      isReversed: !currentState.isReversed,
    }));
  };

  onSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    if (id === 'alphabet') {
      this.setState((currentState) => ({
        goods: [...currentState.goods].sort((g1, g2) => (g1.localeCompare(g2))),
      }));
    }

    if (id === 'length') {
      this.setState((currentState) => ({
        goods: [...currentState.goods].sort((g1, g2) => (g1.length - g2.length)),
      }));
    }
  };

  filtered = (good: string) => {
    const { limitedLength } = this.state;

    return good.length >= limitedLength;
  };

  changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target.value;

    this.setState({
      limitedLength: +target,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      goods: this.props.goods,
      limitedLength: 1,
    });
  };

  render() {
    const { goods } = this.state;
    const visibleGoods = [...goods].filter(this.filtered);

    return (
      <>
        <span>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={this.onReverse}
          >
            Reverse
          </button>
          <button
            type="button"
            id="alphabet"
            className="btn btn-outline-secondary"
            onClick={this.onSort}
          >
            Sort Alphabetically
          </button>

          <button
            type="button"
            id="length"
            className="btn btn-outline-secondary"
            onClick={this.onSort}
          >
            Sort by length
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.reset}
          >
            Reset
          </button>
        </span>

        <ul className="list-group">
          {visibleGoods.map((good) => (
            <li key={good} className="list-group-item">
              {good}
            </li>
          ))}
        </ul>

        <GoodsSelected
          goods={this.props.goods}
          changeHandler={this.changeHandler}
        />
      </>
    );
  }
}

export default React.memo(GoodsList);
