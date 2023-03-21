import React from 'react';
import { GoodItem } from './GoodItem';

type Props = {
  goods: string[]
};

export class GoodsList extends React.PureComponent<Props> {
  render() {
    return (
      <ul>
        {this.props.goods.map((good) => (
          <GoodItem key={good} good={good} />
        ))}
      </ul>
    );
  }
}
