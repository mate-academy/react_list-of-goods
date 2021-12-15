import React from 'react';
import './GoodsList.scss';
import '../../styles/button.scss';

interface State {
  goods: string[],
  sortBy?: string,
}

export class GoodsList extends React.Component<State> {
  state = {
    goods: [...this.props.goods],
    sortBy: 'alphab',
  };

  reverse = () => (
    this.setState((state: State) => ({
      goods: state.goods.reverse(),
    }))
  );

  sortByAlphab = () => {
    this.setState({
      sortBy: 'alphab',
    });

    this.sort();
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });

    this.sort();
  };

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
    });
  };

  sort = () => (
    this.setState((state: State) => ({
      goods: state.goods.sort(
        (productA, productB) => {
          switch (state.sortBy) {
            case 'alphab': {
              return productA.localeCompare(productB);
            }

            case 'length': {
              return productA.length - productB.length;
            }

            default: {
              return 0;
            }
          }
        },
      ),
    }))
  );

  render() {
    const { goods } = this.state;

    return (
      <div className="goods-list">
        <h1 className="goods-list__title">
          Goods list
        </h1>

        <div className="goods-list__buttons">
          <button
            type="button"
            className="goods-list__button button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="goods-list__button button"
            onClick={this.sortByAlphab}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="goods-list__button button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            type="button"
            className="goods-list__button button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>

        <ul className="goods-list__list">
          {goods.map((product, index) => (
            <li
              className="goods-list__list-item"
              key={`${product} ${index * Math.random()}`}
            >
              {product}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
