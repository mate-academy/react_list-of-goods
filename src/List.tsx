import React from 'react';

type Props = {
  goods: string[],
};

export class List extends React.PureComponent<Props, {}> {
  render() {
    return (
      <ul>
        {this.props.goods.map(good => (
          <li
            key={good}
            data-cy="Good"
          >
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
