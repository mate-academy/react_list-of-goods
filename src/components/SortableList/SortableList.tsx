import React from 'react';
import './SortableList.scss';
import { ListOfGoods } from '../ListOfGoods';

type Props = {
  goods: string[],
};

type State = {
  goods: string[],
  isHidden: boolean,
  minLength: number,
};

export class SortableList extends React.Component<Props, State> {
  state: State = {
    goods: this.props.goods,
    isHidden: true,
    minLength: 1,
  };

  showList = () => {
    this.setState({
      isHidden: false,
    });
  };

  reverseList = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((prev, next) => (
        prev.localeCompare(next)
      )),
    }));
  };

  sortByLength = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((prev, next) => (
        prev.length - next.length
      )),
    }));
  };

  lengthFilter = (length: string) => {
    this.setState({
      minLength: +length,
    });
  };

  resetList = () => {
    this.setState({
      goods: this.props.goods,
      minLength: 1,
    });
  };

  render() {
    const {
      isHidden,
      goods,
      minLength,
    } = this.state;

    const amountOfOptions = new Array(this.props.goods.length);
    const filteredByLengthGoods = goods
      .filter(good => good.length >= minLength);

    return (
      <>
        {
          isHidden && (
            <button
              type="button"
              onClick={this.showList}
            >
              Start
            </button>
          )
        }
        {
          !isHidden && (
            <div className="sortable-list">
              <div className="sortable-list__buttons">
                <button
                  type="button"
                  className="sortable-list__btn"
                  onClick={this.sortByAlphabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="sortable-list__btn"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="sortable-list__btn"
                  onClick={this.reverseList}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="sortable-list__btn"
                  onClick={this.resetList}
                >
                  Reset
                </button>

                <select
                  className="sortable-list__select"
                  value={minLength}
                  onChange={(event) => {
                    this.lengthFilter(event.target.value);
                  }}
                >
                  {
                    amountOfOptions.fill('option').map((_option, index) => (
                      <option
                        key={String(index + 1)}
                        value={index + 1}
                      >
                        {`Length > ${index + 1}`}
                      </option>
                    ))
                  }
                </select>
              </div>

              <ListOfGoods goods={filteredByLengthGoods} />
            </div>
          )
        }
      </>
    );
  }
}
