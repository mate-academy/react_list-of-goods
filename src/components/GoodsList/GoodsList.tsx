import React from 'react';
import './GoodsList.scss'

type Props = {
  goodsList: string[];
};

type State = {
  isReversed: boolean;
  sortBy: string;
  length: number;
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: 'init',
    length: 1,
  };

  render() {
    const { isReversed, sortBy, length } = this.state;
    const selectArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const visibleGoodsList = this.props.goodsList.filter(good => good.length >= length);

    visibleGoodsList.sort((good1, good2) => {
      switch (sortBy) {
        case 'abc':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        case 'init':
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoodsList.reverse();
    }

    return (
      <div className="list">
        <div className="buttons-block">
          <h2 className="buttons-block__title">Sort by:</h2>
          <button
            className="buttons-block__button"
            type="button"
            onClick={() => {
              this.setState({ sortBy: 'abc' });
            }}
          >
            Alphabetically
          </button>
          <button
            className="buttons-block__button"
            type="button"
            onClick={() => {
              this.setState({ sortBy: 'length' });
            }}
          >
            Length of goods
          </button>
          <button
            className="buttons-block__button"
            type="button"
            onClick={() => {
              this.setState({ isReversed: !isReversed });
            }}
          >
            Reverse
          </button>
          <button
            className="buttons-block__button"
            type="button"
            onClick={() => {
              this.setState({ sortBy: 'init', isReversed: false, length: 1 });
            }}
          >
            Reset
          </button>
          <div className="selector">
            <div>Select length of good:</div>
            <select
              className="buttons-block__select"
              value={length}
              onChange={(event) => {
                this.setState({ length: +event.target.value });
              }}
            >
              {selectArr.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <ul className="goods-list">
          {visibleGoodsList.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
