import React from 'react';

export class GoodsSection extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <ul className="list-group">
        {goods.map(good => (
          <li
            key={good}
            className="list-group-item"
          >
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
