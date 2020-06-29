import React from 'react';
import { ShapeGoods } from '../Shapes/ShapeGood';

export class GoodsSection extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <ul className="list-group p-4 ">
        {goods.map(good => (
          <li
            key={good}
            className="list-group-item nopadding"
          >
            {good}
          </li>
        ))}
      </ul>
    );
  }
}

GoodsSection.propTypes = ShapeGoods.isRequired;
