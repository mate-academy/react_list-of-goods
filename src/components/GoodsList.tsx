import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: string[]
};

export class GoodsList extends React.Component<Props, {}> {
  state = {};

  render() {
    const { goods } = this.props;

    return (
      <ul className="Goods">
        {goods.map(product => {
          return (
            <li
              key={product}
              className="Goods__item"
            >
              {product}
            </li>
          );
        })}
      </ul>
    );
  }
}
