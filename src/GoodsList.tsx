import React from 'react';

type Props = {
  goodsFromServer: string[]
};

export class GoodsList
  extends React.PureComponent<Props> {
  render() {
    const { goodsFromServer } = this.props;

    return (
      <ul>
        {
          goodsFromServer.map(good => (
            <li key={good}>
              {good}
            </li>
          ))
        }
      </ul>
    );
  }
}
