import React from 'react';

type Props = {
  goods: string[],
};

// eslint-disable-next-line
export class GoodsList extends React.Component<Props> {
  render() {
    return (
      <ul className="GoodsList">
        {this.props.goods.map((good) => (
          <li className="GoodsList__item" key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
