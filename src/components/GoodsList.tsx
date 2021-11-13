import React from 'react';

interface State {
  goods: string[]
}

export class GoodsList extends React.PureComponent<State> {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
