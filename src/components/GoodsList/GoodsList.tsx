import { Component } from 'react';

type Props = {
  goods: string[]
};

type State = {
  isReversed: boolean,
  sortBy: string,
  filterByLength: number,
};

export class GoodsList extends Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: '',
    filterByLength: 1,
  };

  reverse = () => {
    this.setState(prevState => (
      { isReversed: !prevState.isReversed }
    ));
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
      filterByLength: 1,
    });
  };

  filterGoodsByLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ filterByLength: +event.target.value });
  };

  render() {
    const {
      isReversed,
      sortBy,
      filterByLength,
    } = this.state;

    const { goods } = this.props;

    const copyGoods = goods.filter(good => good.length >= filterByLength);

    switch (sortBy) {
      case 'name':
        copyGoods.sort((a, b) => a.localeCompare(b));
        break;
      case 'length':
        copyGoods.sort((a, b) => a.length - b.length);
        break;
      default:
        break;
    }

    if (isReversed) {
      copyGoods.reverse();
    }

    return (
      <>
        <ul>
          {copyGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <button type="button" onClick={this.reverse}>Reverse</button>
        <button type="button" onClick={this.sortByName}>
          Sort alphabetically
        </button>
        <button type="button" onClick={this.reset}>Reset</button>
        <button type="button" onClick={this.sortByLength}>
          Sort by length
        </button>

        <form action="#">
          <select
            onChange={(event) => {
              this.filterGoodsByLength(event);
            }}
            value={String(filterByLength)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </form>
      </>
    );
  }
}
