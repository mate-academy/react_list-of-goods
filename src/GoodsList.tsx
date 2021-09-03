import React from 'react';

import './GoodsList.css';

interface Props {
  goodsFromServer: string[];
}

interface State {
  goods: string[];
  sortBy: string;
  listOfLength: string[];
  goodLength: string;
}
export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: [...this.props.goodsFromServer],
    // isReversed: false,
    sortBy: 'initial',
    listOfLength: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    goodLength: '1',
  };

  sortByAbc = () => {
    this.setState({
      sortBy: 'alphabetically',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'sortByLength',
    });
  };

  resetSort = () => {
    this.setState({
      goods: [...this.props.goodsFromServer],
      sortBy: 'initial',
    });
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      goodLength: event.target.value,
    });
  };

  render() {
    const {
      goods,
      sortBy,
      listOfLength,
      goodLength,
    } = this.state;

    goods.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabetically':
          return g1.localeCompare(g2);

        case 'sortByLength':
          return g1.length - g2.length;

        case 'initial':
        default:
          return 0;
      }
    });

    goods.filter(good => good.length >= Number(goodLength));

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
            <option value={length}>
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
            onClick={this.sortByAbc}
          >
            Sort alphabetically
          </button>
          <button
            type="submit"
            className="btn btn-info"
            onClick={this.sortByLength}
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
        </div>
        <ul>
          {goods
            .filter(good => good.length >= Number(goodLength))
            .map(good => <li key={good}>{good}</li>)}
        </ul>
      </>
    );
  }
}
