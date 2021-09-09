import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

enum SortType {
  length = 'length',
  alphabet = 'alphabet',
}

interface Props {
  goodsFromServer: string[]
}

interface State {
  goods: string[];
  isReversed: boolean;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: [...this.props.goodsFromServer],
    isReversed: false,
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      goods: [...this.props.goodsFromServer],
      isReversed: false,
    });
  };

  sortByParam = (sortBy: SortType) => {
    switch (sortBy) {
      case SortType.alphabet:
        return this.setState(state => ({
          goods: [...state.goods.sort((a, b) => a.localeCompare(b))],
        }));

      case SortType.length:
        return this.setState(state => ({
          goods: [...state.goods.sort((a, b) => b.length - a.length)],
        }));

      default:
        return 0;
    }
  };

  getVisible = () => {
    const { isReversed, goods } = this.state;
    let modifiedGoods = goods;

    if (isReversed) {
      modifiedGoods = [...modifiedGoods].reverse();
    }

    return modifiedGoods;
  };

  render() {
    const buttonClass = 'btn-box bg-primary border-0 rounded text-light w-25 py-2 m-1';
    const flexLayout = 'd-flex justify-content-center align-items-center';

    const modifiedGoods = this.getVisible();

    return (
      <div className="w-100">

        <div className={`${flexLayout} flex-column`}>
          <h1>Goods</h1>
          <ul className="w-25">
            {modifiedGoods.map(good => (
              <li
                key={good}
                className="border border-success rounded p-1 m-1 text-center"
              >
                {good}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${flexLayout}`}>
          <button
            type="button"
            onClick={() => this.reverseList()}
            className={`${buttonClass}`}
          >
            Reverse List
          </button>

          <button
            type="button"
            onClick={() => this.sortByParam(SortType.alphabet)}
            className={`${buttonClass}`}
          >
            Sort by Alphabet
          </button>

          <button
            type="button"
            onClick={() => this.sortByParam(SortType.length)}
            className={`${buttonClass}`}
          >
            Sort by Length
          </button>

          <button
            type="button"
            onClick={() => this.reset()}
            className={`${buttonClass}`}
          >
            Reset
          </button>
        </div>

      </div>

    );
  }
}
