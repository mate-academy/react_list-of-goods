import React from 'react';

enum SortBy {
  name = 'name',
  length = 'length',
  default = '',
}

enum Length {
  One = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
}

type Props = {
  goods: string[];
};

type State = {
  isListVisible: boolean;
  goods: string[];
  isReversed: boolean;
  sortBy: string;
  visibleLength: number;
};

export class GoodsList extends React.Component<Props, State> {
  defaultGoods = this.props.goods;

  state: State = {
    isListVisible: false,
    goods: this.defaultGoods,
    isReversed: false,
    sortBy: SortBy.default,
    visibleLength: Length.One,
  };

  toggleListVisibleHandler = () => {
    this.setState(prevState => ({
      isListVisible: !prevState.isListVisible,
    }));
  };

  reverseHandler = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  sortAlphabeticallyHandler = () => {
    this.setState(prevState => ({
      sortBy: SortBy.name,
      isReversed: !prevState.isReversed,
    }));
  };

  resetHandler = () => {
    this.setState({
      goods: this.defaultGoods,
      isReversed: false,
      sortBy: SortBy.default,
      visibleLength: Length.One,
    });
  };

  sortByLengthHandler = () => {
    this.setState(prevState => ({
      sortBy: SortBy.length,
      isReversed: !prevState.isReversed,
    }));
  };

  selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      visibleLength: Number(event.target.value),
    });
  };

  render() {
    const {
      isListVisible, goods, isReversed, sortBy, visibleLength,
    } = this.state;

    const copyGoods = [...goods].filter(item => item.length >= visibleLength);

    if (sortBy === SortBy.name) {
      copyGoods.sort((a, b) => a.localeCompare(b));
    }

    if (sortBy === SortBy.length) {
      copyGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      copyGoods.reverse();
    }

    return (
      <>
        {!isListVisible
          ? (
            <div className="buttons">
              <button
                className="button is-small is-primary"
                type="button"
                onClick={this.toggleListVisibleHandler}
              >
                Start
              </button>
            </div>
          )
          : (
            <>
              <div className="buttons">
                <button
                  className="button is-small is-primary is-outlined"
                  type="button"
                  onClick={this.toggleListVisibleHandler}
                >
                  Hide
                </button>
                <button
                  className="button is-small is-info"
                  type="button"
                  onClick={this.reverseHandler}
                >
                  Reverse
                </button>
                <button
                  className="button is-small is-success"
                  type="button"
                  onClick={this.sortAlphabeticallyHandler}
                >
                  Sort alphabetically
                </button>
                <button
                  className="button is-small is-danger"
                  type="button"
                  onClick={this.resetHandler}
                >
                  Reset
                </button>
                <button
                  className="button is-small is-primary"
                  type="button"
                  onClick={this.sortByLengthHandler}
                >
                  Sort by length
                </button>
                <div className="select select-wraper is-warning">
                  <select
                    className="select is-small"
                    name="visibleLength"
                    value={this.state.visibleLength}
                    onChange={(event) => {
                      this.selectChangeHandler(event);
                    }}
                  >
                    <option value={Length.One}>
                      {Length.One}
                    </option>
                    <option value={Length.Two}>
                      {Length.Two}
                    </option>
                    <option value={Length.Three}>
                      {Length.Three}
                    </option>
                    <option value={Length.Four}>
                      {Length.Four}
                    </option>
                    <option value={Length.Five}>
                      {Length.Five}
                    </option>
                    <option value={Length.Six}>
                      {Length.Six}
                    </option>
                    <option value={Length.Seven}>
                      {Length.Seven}
                    </option>
                    <option value={Length.Eight}>
                      {Length.Eight}
                    </option>
                    <option value={Length.Nine}>
                      {Length.Nine}
                    </option>
                    <option value={Length.Ten}>
                      {Length.Ten}
                    </option>
                  </select>
                </div>
              </div>

              <ul className="list-group">
                {copyGoods.map(good => (
                  <li className="list-item" key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </>
          )}
      </>
    );
  }
}
