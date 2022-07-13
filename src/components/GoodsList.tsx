import React from 'react';

type Props = {
  goods: string[],
};

export class GoodsList extends React.Component<Props> {
  state: Readonly<{}> = {};

  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    );
  }
}
