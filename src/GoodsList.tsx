import React from 'react';

interface Props {
  goods: string[],
}

export class GoodsList extends React.PureComponent<Props, {}> {
  render() {
    const { goods } = this.props;

    return (
      <ul className="Goods">
        {goods.map(good => (
          <li className="Goods__item" key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
