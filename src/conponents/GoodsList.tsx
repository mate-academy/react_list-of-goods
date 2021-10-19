import React from 'react';
import { GoodsType } from '../types/GoodsType';

interface Props {
  goods: GoodsType[],
}

interface State {
  isReversed: boolean;
  sortMethod: null | 'alphabetically' | 'length';
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortMethod: null,
  };

  render() {
    const visibleProducts = [...this.props.goods];

    const {
      isReversed,
      sortMethod,
    } = this.state;

    if (sortMethod) {
      visibleProducts.sort((product1, product2) => {
        switch (sortMethod) {
          case 'alphabetically':
            return product1.localeCompare(product2);
          case 'length':
            return product1.length - product2.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      visibleProducts.reverse();
    }

    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.setState({ isReversed: !isReversed });
          }}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ sortMethod: 'alphabetically' });
          }}
        >
          Sort by alphabetically
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ sortMethod: 'length' });
          }}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isReversed: false,
              sortMethod: null,
            });
          }}
        >
          Reset
        </button>
        <ul>
          {visibleProducts.map(product => (
            <li key={product}>
              {product}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
