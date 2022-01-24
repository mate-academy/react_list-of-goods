import React from 'react';

type Props = {
  goods: string[];
};

export class GoodsList extends React.Component<Props> {
  a = 2;

  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(good => (
          <li key={good}>{good}</li>
        ))}
      </ul>
    );
  }
}
