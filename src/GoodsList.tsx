import React from 'react';

type Props = {
  products: string[]
};

export class GoodsList extends React.Component<Props> {
  state = {

  };

  render() {
    const { products } = this.props;

    return (
      <ul className="products">
        {products.map((product: string) => (
          <li
            key={product}
          >
            {product}
          </li>
        ))}
      </ul>
    );
  }
}
