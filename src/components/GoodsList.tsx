import React from 'react';

interface Props {
  goods: string[];
}

export class GoodsList extends React.PureComponent<Props> {
  render() {
    return (
      <ul>
        {this.props.goods.map((good) => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
