import React from 'react';

type Props = {
  goods: string[],
};

export class List extends React.PureComponent<Props, {}> {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(good => (
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
