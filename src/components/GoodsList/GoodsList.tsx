import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: string[];
};

type State = {
  isReversed: boolean;
  sortBy: string;
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: 'id',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: 'id',
    });
  };

  sortAZ = () => {
    this.setState({
      sortBy: 'az',
      isReversed: false,
    });
  };

  sortLength = () => {
    this.setState({
      sortBy: 'length',
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortBy } = this.state;
    const { goods } = this.props;

    const newGoods = goods.map((good, index) => ({
      id: index,
      name: good,
    }));

    newGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'az':
          return g1.name.localeCompare(g2.name);

        case 'length':
          return g1.name.length - g2.name.length;

        case 'id':
          return g1.id - g2.id;

        default:
          return 0;
      }
    });

    if (isReversed) {
      newGoods.reverse();
    }

    return (
      <div
        className="
          Goods
          container
          content
          is-medium
          has-background-info-light
          m-1
          p-2
        "
      >
        <div className="Goods__buttons buttons block">
          <button
            type="button"
            className="button is-info"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button is-info"
            onClick={this.sortAZ}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-info"
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <div className="Goods__header block">
          <h1 className="title">Goods list</h1>
          <p className="subtitle">
            {'Quantity of goods: '}
            {newGoods.length}
          </p>
        </div>

        <div className="Goods__list content block">
          <ul className="list">
            {newGoods.map((good) => (
              <li key={good.name} className="">
                {good.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
