import React from 'react';

interface Props {
  goods: string[],
}

interface State {
  sortBy: string,
  goods: string[],
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    sortBy: '',
    goods: [...this.props.goods],
  };

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  setSortByAlphabetically = () => {
    const isSortByAlphabetical = this.state.sortBy === 'alphabetically';

    this.setState({ sortBy: isSortByAlphabetical ? '' : 'alphabetically' });
  };

  setSortByLength = () => {
    const isSortByLength = this.state.sortBy === 'length';

    this.setState({ sortBy: isSortByLength ? '' : 'length' });
  };

  resetGoodsList = () => {
    this.setState({
      goods: [...this.props.goods],
      sortBy: '',
    });
  };

  getGoodsList = (sortBy: string) => {
    const { goods } = this.state;

    const copyGoods = [...goods];

    copyGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabetically':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    return copyGoods;
  };

  render() {
    const { sortBy } = this.state;

    return (
      <>
        <ul className="App__list">
          {this.getGoodsList(sortBy).map(good => (
            <li key={good} className="App__item">
              {good}
            </li>
          ))}
        </ul>

        <div className="App__wrap-btns">
          <button
            type="button"
            className="App__btn"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          <button
            type="button"
            className={sortBy === 'alphabetically'
              ? 'App__btn active'
              : 'App__btn'}
            onClick={this.setSortByAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortBy === 'length'
              ? 'App__btn active'
              : 'App__btn'}
            onClick={this.setSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="App__btn App__btn--color--red"
            onClick={this.resetGoodsList}
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}
