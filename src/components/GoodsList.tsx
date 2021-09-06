import React from 'react';

interface Props {
  goods: string[];
}

type State = {
  isReverse: boolean;
  sortBy: string;
  lengthLimit: number,
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReverse: false,
    sortBy: '',
    lengthLimit: 1,
  };

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target.value;

    this.setState({ lengthLimit: +target });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      lengthLimit: 1,
      sortBy: '',
    });
  };

  render() {
    const { goods } = this.props;
    const { isReverse, lengthLimit, sortBy } = this.state;
    const {
      reverse,
      sortByAlphabet,
      sortByLength,
      reset,
      changeHandler,
    } = this;

    const visibleGoods = goods.filter(good => (
      good.length >= lengthLimit
    ));

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'length':
          return g1.length - g2.length;
        case 'alphabet':
          return g1.localeCompare(g2);
        default:
          return 0;
      }
    });

    if (isReverse) {
      visibleGoods.reverse();
    }

    return (
      <>
        <select
          className="form-select"
          onChange={changeHandler}
          value={lengthLimit}
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
        <ul className="list-group">
          {visibleGoods.map(good => (
            <li className="list-group-item" key={good}>{good}</li>
          ))}
        </ul>
        <button
          className="btn btn-primary"
          type="button"
          onClick={reverse}
        >
          Reverse
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={sortByAlphabet}
        >
          Sort alphabetically
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={sortByLength}
        >
          Sort by length
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={reset}
        >
          Reset
        </button>
      </>
    );
  }
}
