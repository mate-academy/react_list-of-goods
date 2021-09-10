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

  getVisiblePeople = () => {
    const {
      sortBy,
      isReverse,
      lengthLimit,
    } = this.state;

    const { goods } = this.props;
    const visibleGoods = goods.filter(good => (
      good.length >= lengthLimit
    ));

    if (sortBy) {
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
    }

    if (isReverse) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  sortByField = (field: string) => {
    this.setState({
      sortBy: field,
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
    const visibleGoods = this.getVisiblePeople();
    const lengthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { lengthLimit } = this.state;
    const {
      reverse,
      sortByField,
      reset,
      changeHandler,
    } = this;

    return (
      <>
        <select
          className="form-select"
          onChange={changeHandler}
          value={lengthLimit}
        >
          {lengthArr.map(number => (
            <option value={number}>{number}</option>
          ))}
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
          onClick={() => {
            sortByField('alphabet');
          }}
        >
          Sort alphabetically
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            sortByField('length');
          }}
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
