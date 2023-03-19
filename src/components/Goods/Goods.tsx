import { PureComponent } from 'react';
import { createId } from '../../utils/uuid-creator';

interface GoodsProps {
  goods: string[];
}

export class Goods extends PureComponent<GoodsProps> {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(good => (
          <li key={createId()} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    );
  }
}
