import React from 'react';

import './GoodsList.scss';

type Props = {
  goodsList: string[],
};

export class GoodsList extends React.PureComponent<Props> {
  render() {
    return (
      <ul className="goodsList">
        {this.props.goodsList.map(goods => (
          <li
            className="goodsList__item"
            key={goods}
          >
            {goods}
          </li>
        ))}
      </ul>
    );
  }
}
