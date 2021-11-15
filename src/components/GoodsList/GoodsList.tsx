import React from 'react';

interface Props {
  goods: string[]
}

export class GoodsList extends React.PureComponent<Props, {}> {
  render() {
    const { goods } = this.props;

    return (
      <ul className="App--list">
        {goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
