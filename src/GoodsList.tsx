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
  visibleGoods: string[];
  isReversed: boolean;
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    visibleGoods: [...this.props.goodsFromServer],
    isReversed: false,
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      visibleGoods: [...state.visibleGoods.reverse()],
    }));
  };

  reset = () => {
    this.setState({
      visibleGoods: [...this.props.goodsFromServer],
      isReversed: false,
    });
  };

  sortByParam = (sortBy: SortType) => {
    switch (sortBy) {
      case SortType.alphabet:
        this.setState(state => ({
          visibleGoods: [...state.visibleGoods.sort((a, b) => a.localeCompare(b))],
        }));

        break;

      case SortType.length:
        this.setState(state => ({
          visibleGoods: [...state.visibleGoods.sort((a, b) => b.length - a.length)],
        }));

        break;

      default:
        break;
    }
  };

  getVisible = () => {
    const { visibleGoods } = this.state;
    const modifiedGoods = visibleGoods;

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
