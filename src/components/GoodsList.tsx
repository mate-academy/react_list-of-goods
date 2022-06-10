import React from 'react';

type Props = {
  goods: string[],
};

type State = {
  goods: string[],
  select: number,
};

class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: this.props.goods,
    select: 1,
  };

  getReverse = () => {
    this.setState(() => {
      const newArrayReverse:string[] = [...this.props.goods];

      const reverse = newArrayReverse.reverse();

      return {
        goods: reverse,
      };
    });
  };

  getSort = () => {
    this.setState(() => {
      const newArraySort: string[] = [...this.props.goods];
      const sort = newArraySort.sort((a, b) => a.localeCompare(b));

      return {
        goods: sort,
      };
    });
  };

  getReset = () => {
    this.setState(() => {
      const reset = this.props.goods;

      return {
        goods: reset,
        select: 1,
      };
    });
  };

  getSortLength = () => {
    this.setState(({ select }) => {
      const newArray: string[] = [...this.props.goods];

      const sortByLength = newArray.sort((a, b) => a.length - b.length);

      return {
        goods: sortByLength.filter(len => len.length >= select),
      };
    });
  };

  getSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      select: +event.target.value,
    });
  };

  render() {
    const { goods, select } = this.state;

    return (
      <div>
        <button type="submit" onClick={this.getReset}>
          Reset
        </button>
        <button type="submit" onClick={this.getReverse}>
          Reverse
        </button>
        <button type="submit" onClick={this.getSort}>
          Sort alphabetically
        </button>
        <button type="submit" onClick={this.getSortLength}>
          Sort by length
        </button>
        <label htmlFor="select">
          Choose select:
          <input
            type="number"
            id="select"
            name="select"
            value={select}
            min="1"
            max="10"
            step={1}
            onChange={this.getSelect}
          />
        </label>
        <ul>
          {goods.filter(len => len.length >= select)
            .map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default GoodsList;
