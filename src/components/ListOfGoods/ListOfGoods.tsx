import React from 'react';

type Props = {
  goods: string[];
};

export class ListOfGoods extends React.PureComponent<Props> {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(good => (
          <li data-cy="Good" key={good}>{good}</li>
        ))}
      </ul>
    );
  }
}
