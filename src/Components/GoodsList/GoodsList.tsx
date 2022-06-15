import React from 'react';

type Props = {
  goodsFromServer: string[],
  isReversed: boolean,
  sortBy: string,
  selectValue: number,
};

export class GoodsList extends React.PureComponent<Props> {
  render() {
    const {
      goodsFromServer, isReversed, sortBy, selectValue,
    } = this.props;
    const visibleGoods = [...goodsFromServer];

    switch (sortBy) {
      case 'alphabetically':
        visibleGoods.sort((el1, el2) => el1.localeCompare(el2));
        break;

      case 'length':
        visibleGoods.sort((el1, el2) => el1.length - el2.length);
        break;

      default:
        break;
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    const filteredGoods = visibleGoods.filter(el => el.length <= selectValue);

    return (
      <ul>
        {filteredGoods
          .map(good => <li key={good}>{good}</li>)}
      </ul>
    );
  }
}
