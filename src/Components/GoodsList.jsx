import React from 'react';

export class GoodsList extends React.Component {
  render() {
    const { goods } = this.props;
    return (
      <ul>
        {goods.map(good => (
          <li key={good}>{good}</li>
        ))}
      </ul>
    )
  }
}
