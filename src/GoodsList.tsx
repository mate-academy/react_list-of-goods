import React from 'react';

import './GoodsList.css';

interface Props {
  goodsFromServer: string[];
}

interface State {
  sortBy: string;
  listOfLength: string[];
  goodLength: string;
  isReversed: boolean;
  goods: string[];
}
export class GoodsList extends React.Component<Props, State> {
  state = {
    sortBy: 'initial',
    listOfLength: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    goodLength: '1',
    isReversed: false,
    goods: [...this.props.goodsFromServer],
  };

  sortBy = (sortingMethod: 'alphabetically' | 'sortByLength') => {
    this.setState({
      sortBy: sortingMethod,
    });
    this.getPrepearedList();
  };

  resetSort = () => {
    this.setState({
      sortBy: 'initial',
      goodLength: '1',
      isReversed: false,
    });
    this.getPrepearedList();
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      goodLength: event.target.value,
    });
    this.getPrepearedList();
  };

  reverse = () => {
    this.setState((currentState) => ({
      isReversed: !currentState.isReversed,
    }));
    this.getPrepearedList();
  };

  getPrepearedList = () => {
    const {
      sortBy,
      goodLength,
      isReversed,
      goods,
    } = this.state;

    let prepearedList = goods;

    prepearedList = prepearedList.filter(good => good.length >= Number(goodLength));

    prepearedList = [...prepearedList].sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabetically':
          return g1.localeCompare(g2);

        case 'sortByLength':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      prepearedList = [...prepearedList].reverse();
    }

    return prepearedList;
  };

  render() {
    const {
      listOfLength,
      goodLength,
    } = this.state;

    const goods = this.getPrepearedList();

    return (
      <>
        <select
          className="form-select Select"
          aria-label="Default select example"
          name="goodsLength"
          value={goodLength}
          onChange={this.handleChange}
        >
          {listOfLength.map((length) => (
            <option key={length} value={length}>
              {length}
            </option>
          ))}
        </select>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => this.sortBy('alphabetically')}
          >
            Sort alphabetically
          </button>
          <button
            type="submit"
            className="btn btn-info"
            onClick={() => this.sortBy('sortByLength')}
          >
            Sort by length
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.resetSort}
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn btn-warning"
            onClick={this.reverse}
          >
            Reverse
          </button>
        </div>
        <ul>
          {goods.map(good => <li key={good}>{good}</li>)}
        </ul>
      </>
    );
  }
}
