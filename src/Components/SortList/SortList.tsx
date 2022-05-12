/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { GoodsList } from '../GoodsList/goodsList';

import './SortList.scss';

type Props = {
  goods: string[];
};

enum SortBy {
  none,
  alphabetic,
  length,
}

type State = {
  isShown: boolean,
  isReversed: boolean,
  sortOrder: SortBy,
  minLen: number,
};

export class SortList extends React.Component<Props, State> {
  state = {
    isShown: false,
    isReversed: false,
    sortOrder: SortBy.none,
    minLen: 1,
  };

  show = () => {
    this.setState({
      isShown: true,
    });
  };

  reverse = () => {
    this.setState((prevState) => (
      {
        isReversed: !prevState.isReversed,
      }
    ));
  };

  sorBy = (param: SortBy) => {
    this.setState(
      {
        sortOrder: param,
      },
    );
  };

  reset = () => {
    this.setState(
      {
        isReversed: false,
        sortOrder: SortBy.none,
      },
    );
  };

  setMinLen = (minLen: number) => this.setState({ minLen });

  render() {
    const {
      isShown,
      isReversed,
      sortOrder,
      minLen,
    } = this.state;

    if (!isShown) {
      return (
        <div className="sortList">
          <button
            type="button"
            onClick={this.show}
            className="sortList__button"
          >
            Start
          </button>
        </div>
      );
    }

    const { goods } = this.props;

    const prepearedList = goods.filter((good) => good.length >= minLen);

    switch (sortOrder) {
      case SortBy.alphabetic: {
        prepearedList.sort(
          (firstGood, secondGood) => firstGood.localeCompare(secondGood),
        );

        break;
      }

      case SortBy.length: {
        prepearedList.sort(
          (firstGood, secondGood) => firstGood.length - secondGood.length,
        );

        break;
      }

      default: {
        break;
      }
    }

    if (isReversed) {
      prepearedList.reverse();
    }

    return (
      <div className="sortList">
        <div className="sortList__buttons">
          <button
            type="button"
            onClick={() => this.sorBy(SortBy.alphabetic)}
            className="sortList__button"
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={() => this.sorBy(SortBy.length)}
            className="sortList__button"
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverse}
            className="sortList__button"
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.reset}
            className="sortList__button"
          >
            Reset
          </button>
        </div>

        <div className="sortList__list">
          <GoodsList goods={prepearedList} />
        </div>
      </div>
    );
  }
}
