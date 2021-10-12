import React from 'react';

type SortBy = 'alphabetically' | 'length';

interface Props {
  goods: string[];
}

interface State {
  isReverse: boolean;
  sortBy: SortBy | null;
  selectedValue: number;
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReverse: false,
    sortBy: null,
    selectedValue: 1,
  };

  reverseList = () => {
    this.setState(({ isReverse }) => ({ isReverse: !isReverse }));
  };

  sortList = (option: SortBy) => {
    this.setState({ sortBy: option });
  };

  resetList = () => {
    this.setState({
      isReverse: false,
      sortBy: null,
      selectedValue: 1,
    });
  };

  filterList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedValue: +e.target.value });
  };

  render() {
    const {
      isReverse,
      sortBy,
      selectedValue,
    } = this.state;

    const { goods } = this.props;

    const visibleGoods = goods.filter(
      item => item.length >= selectedValue,
    );

    if (sortBy) {
      visibleGoods.sort((a, b) => {
        switch (sortBy) {
          case 'alphabetically':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          default:
            return 0;
        }
      });
    }

    if (isReverse) {
      visibleGoods.reverse();
    }

    return (
      <div>
        <button
          type="button"
          name="reverse"
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          name="alphabetically"
          onClick={(e) => this.sortList(e.currentTarget.name as SortBy)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          name="length"
          onClick={(e) => this.sortList(e.currentTarget.name as SortBy)}
        >
          Sort by length
        </button>

        <select value={selectedValue} onChange={this.filterList}>
          {Array.from({ length: 10 }, (_, i) => i + 1)
            .map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
        </select>

        <button
          type="button"
          name="reset"
          onClick={this.resetList}
        >
          Reset
        </button>
        <ul>
          {visibleGoods.map(item => (<li key={item}>{item}</li>))}
        </ul>
      </div>
    );
  }
}
