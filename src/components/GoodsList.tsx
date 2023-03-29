import React from 'react';

type Props = {
  orderingGoods: string[],
};

export class GoodsList extends React.PureComponent<Props, {}> {
  render() {
    const { orderingGoods } = this.props;

    return (
      <ul>
        {orderingGoods
          .map(
            word => <li data-cy="Good" key={word}>{word}</li>,
          )}
      </ul>
    );
  }
}
