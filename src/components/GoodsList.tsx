import React from 'react';

type Props = {
  goods: string[];
  start: boolean;
  isReversed: boolean;
  sortBy: string;
};

class GoodsList extends React.Component<Props, {}> {
  render() {
    const {
      goods,
      start,
      isReversed,
      sortBy,
    } = this.props;

    const visibleList = goods;

    visibleList.sort((a, b) => {
      switch (sortBy) {
        case 'length':
          return a.length - b.length;

        case 'alphabetically':
          return a.localeCompare(b);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleList.reverse();
    }

    return (
      <>
        {start && (
          <ul className="GoodsList">
            {visibleList.map(good => (
              <li
                key={good}
                className="GoodsList__Item"
              >
                {good}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default GoodsList;
