import React from 'react';

type Props = {
  data: string[];
};
type State = {
  goods: string[];
  isReversed: boolean;
  sortBy: string;
  selected: string;
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: [...this.props.data],
    isReversed: false,
    sortBy: 'id',
    selected: '',
  };

  handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selected: event.target.value });
  };

  sortByABC = () => {
    this.setState({ sortBy: 'abc' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      goods: [...this.props.data], sortBy: 'id', isReversed: false, selected: '',
    });
  };

  render() {
    const {
      goods, sortBy, isReversed, selected,
    } = this.state;
    const selectValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const goodsToShow = goods.filter(good => good.length >= +selected);

    if (sortBy !== 'id') {
      goodsToShow.sort((a, b) => {
        switch (sortBy) {
          case 'abc':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      goodsToShow.reverse();
    }

    return (
      <>
        <button type="button" onClick={this.sortByABC}>
          Sort alphabetically
        </button>
        <button type="button" onClick={this.sortByLength}>
          Sort by length
        </button>
        <button type="button" onClick={this.reverse}>
          Reverse
        </button>
        {' '}
        <button type="button" onClick={this.reset}>
          Reset
        </button>
        <form className="select.form">
          <label htmlFor="select">
            Choose length:
            <select id="select" value={selected} onChange={this.handleSelectionChange}>
              {selectValue.map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </label>
        </form>
        <ul className="goods-list">
          {goodsToShow.map((good => (
            <li
              key={good}
              className="goods-list__item"
            >
              {good}
            </li>
          )))}
        </ul>
      </>
    );
  }
}
