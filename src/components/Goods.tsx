import { PureComponent } from 'react';

interface Props {
  goods: string[];
}

export class Goods extends PureComponent<Props> {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(good => (
          <li
            data-cy="Good"
            key={good}
          >
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
