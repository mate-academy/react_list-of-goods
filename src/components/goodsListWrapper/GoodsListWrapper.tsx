import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import { SortType } from '../types/sortType';
import { GoodsList } from '../goodsList';

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

type Props = {
  goods: string[];
};

export class GoodsListWrapper extends React.Component<Props, ReorderOptions> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleSortByLengthButtonClick = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleSortByAlphabetButtonClick = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleReverseButtonClick = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  handleResetButtonClick = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { goods } = this.props;
    const { sortType, isReversed } = this.state;
    const isGoodsChanged: boolean = sortType !== SortType.NONE
      || isReversed !== false;

    return (
      <>
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.handleSortByAlphabetButtonClick}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.handleSortByLengthButtonClick}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.handleReverseButtonClick}
          >
            Reverse
          </button>

          {isGoodsChanged && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleResetButtonClick}
            >
              Reset
            </button>
          )}
        </div>

        <GoodsList
          goods={goods}
          sortType={sortType}
          isReversed={isReversed}
        />
      </>
    );
  }
}
