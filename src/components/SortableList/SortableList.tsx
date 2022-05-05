import React from 'react';
import { GoodsList } from '../GoodsList';

type Props = {
  goods: string[];
};

enum SortOrder {
  none = 0,
  alphabetic = 1,
  length = 2,
}

type State = {
  isShown: boolean;
  isReversed: boolean;
  sortOrder: SortOrder;
  minLen: number;
};

// eslint-disable-next-line
export class SortableList extends React.Component<Props, State> {
  state = {
    isShown: false,
    isReversed: false,
    sortOrder: SortOrder.none,
    minLen: 1,
  };

  show = () => {
    this.setState(
      {
        isShown: true,
      },
    );
  };

  reverse = () => {
    this.setState((prevState) => (
      {
        isReversed: !prevState.isReversed,
      }
    ));
  };

  sortBy = (parameter: SortOrder) => {
    this.setState(
      {
        sortOrder: parameter,
      },
    );
  };

  reset = () => {
    this.setState(
      {
        isReversed: false,
        sortOrder: SortOrder.none,
        minLen: 1,
      },
    );
  };

  setMinLen = (minLen: number) => {
    this.setState(
      {
        minLen,
      },
    );
  };

  render() {
    const {
      isShown,
      isReversed,
      sortOrder,
      minLen,
    } = this.state;

    if (!isShown) {
      return (
        <div className="SortableList">
          <button
            type="button"
            className="Button"
            onClick={this.show}
          >
            Start
          </button>
        </div>
      );
    }

    const {
      goods,
    } = this.props;

    let preparedList: string[] = [];

    preparedList = goods.slice()
      .filter((good) => good.length >= minLen);

    switch (sortOrder) {
      case SortOrder.alphabetic: {
        preparedList.sort(
          (good1, good2) => good1.localeCompare(good2),
        );

        break;
      }

      case SortOrder.length: {
        preparedList.sort(
          (good1, good2) => good1.length - good2.length,
        );

        break;
      }

      default: {
        break;
      }
    }

    if (isReversed) {
      preparedList.reverse();
    }

    return (
      <div className="SortableList">
        <button
          type="button"
          className="Button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className="Button"
          onClick={() => this.sortBy(SortOrder.alphabetic)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="Button"
          onClick={() => this.sortBy(SortOrder.length)}
        >
          Sort by length
        </button>

        <select onChange={
          (e) => this.setMinLen(Number(e.target.value))
        }
        >
          {
            (new Array(10))
              .fill(null)
              .map((_, index) => (
                <option
                  value={index + 1}
                  // eslint-disable-next-line
                  key={index + 1}
                  selected={index + 1 === minLen}
                >
                  {`${index + 1}+ letters`}
                </option>
              ))
          }
        </select>

        <button
          type="button"
          className="Button"
          onClick={this.reset}
        >
          Reset
        </button>

        <GoodsList goods={preparedList} />
      </div>
    );
  }
}
