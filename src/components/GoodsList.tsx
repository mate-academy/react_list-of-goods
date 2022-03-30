import React from 'react';

type Props = {
  goods: string[]
};

export class GoodsList extends React.PureComponent<Props> {
  render() {
    const { goods } = this.props;

    return (
      <ul className="list goods__list">
        {goods.map(good => (
          <li
            className="list__item"
            key={good}
          >
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
