import React from 'react';
import './GoodsList.scss';

interface State {
  isHidden: boolean;
  listItems: string[];
  sortBy: SortBy;
  isReversed: boolean;
  maxItemLength: number;
}

type Props = {
  goods: string[];
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isHidden: true,
    listItems: [...this.props.goods],
    sortBy: null,
    isReversed: false,
    maxItemLength: 1,
  };

  showList = () => {
    this.setState((prevState) => ({ isHidden: !prevState.isHidden }));
  };

  reverseList = () => {
    this.setState((prevState) => ({ isReversed: !prevState.isReversed }));
  };

  setSort = (field: SortBy) => {
    this.setState({ sortBy: field });
  };

  filterByLength = (event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLSelectElement;

    this.setState({ maxItemLength: Number(value) });
  };

  reset = () => {
    this.setState({
      sortBy: null,
      isReversed: false,
      maxItemLength: 1,
    });
  };

  getList = () => {
    const {
      sortBy,
      listItems,
      isReversed,
      maxItemLength,
    } = this.state;
    const listCopy = [...listItems].filter(item => item.length >= maxItemLength);

    if (sortBy) {
      switch (sortBy) {
        case 'length':
          listCopy.sort((x, y) => x.length - y.length);
          break;

        default:
          listCopy.sort((x, y) => x.localeCompare(y));
      }
    }

    if (isReversed) {
      listCopy.reverse();
    }

    return listCopy;
  };

  render() {
    const { isHidden } = this.state;
    const listToRender = this.getList();
    const selectOptions = Array.from({ length: 10 }, (_, x) => x + 1);

    return (
      <article className="GoodsList">
        {isHidden || (
          <>
            <h1 className="GoodsList__title">
              Goods
            </h1>

            <div className="GoodsList__main-content">
              <ul className="GoodsList__list">
                {listToRender.map(item => (
                  <li key={item} className="GoodsList__list-item">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="GoodsList__buttons">
                <button
                  type="button"
                  className="GoodsList__btn"
                  onClick={() => this.setSort('abc')}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="GoodsList__btn"
                  onClick={() => this.setSort('length')}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="GoodsList__btn"
                  onClick={this.reverseList}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="GoodsList__btn"
                  onClick={this.reset}
                >
                  Reset
                </button>

                <select
                  className="GoodsList__btn"
                  onChange={(event) => this.filterByLength(event)}
                >
                  {selectOptions.map(item => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )}

        {isHidden && (
          <button
            type="button"
            className="GoodsList__btn"
            onClick={this.showList}
          >
            Start
          </button>
        )}
      </article>
    );
  }
}
